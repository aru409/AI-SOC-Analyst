import { mkdir, readFile, writeFile, stat } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDir = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.resolve(__dirname, '../data')
const dataFile = path.join(dataDir, 'contact-submissions.json')
const distDir = path.resolve(__dirname, '../dist')
const port = process.env.PORT || 8787
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
}

async function ensureStorage() {
  await mkdir(dataDir, { recursive: true })

  try {
    await readFile(dataFile, 'utf8')
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(dataFile, '[]\n', 'utf8')
      return
    }

    throw error
  }
}

async function readSubmissions() {
  const raw = await readFile(dataFile, 'utf8')
  return JSON.parse(raw)
}

async function writeSubmissions(submissions) {
  await writeFile(dataFile, `${JSON.stringify(submissions, null, 2)}\n`, 'utf8')
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  response.end(JSON.stringify(payload))
}

async function sendStaticFile(response, filePath) {
  const extension = path.extname(filePath).toLowerCase()
  const file = await readFile(filePath)

  response.writeHead(200, {
    'Content-Type': mimeTypes[extension] || 'application/octet-stream',
  })
  response.end(file)
}

async function resolveStaticAsset(urlPath) {
  const requestedPath = urlPath === '/' ? '/index.html' : urlPath
  const normalizedPath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, '')
  const absolutePath = path.resolve(distDir, `.${normalizedPath}`)

  if (!absolutePath.startsWith(distDir)) {
    return null
  }

  try {
    const fileStats = await stat(absolutePath)
    if (fileStats.isFile()) {
      return absolutePath
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error
    }
  }

  return null
}

function validateSubmission(payload) {
  const errors = {}

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = 'Please enter a valid name.'
  }

  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = 'Please enter a valid work email.'
  }

  if (!payload.company || payload.company.trim().length < 2) {
    errors.company = 'Please enter your company name.'
  }

  if (!payload.message || payload.message.trim().length < 20) {
    errors.message = 'Please share a little more context for the demo request.'
  }

  return errors
}

async function parseRequestBody(request) {
  const chunks = []

  for await (const chunk of request) {
    chunks.push(chunk)
  }

  const rawBody = Buffer.concat(chunks).toString('utf8')
  return rawBody ? JSON.parse(rawBody) : {}
}

const server = http.createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 400, { error: 'Missing request URL.' })
    return
  }

  const requestUrl = new URL(request.url, `http://localhost:${port}`)
  const pathname = requestUrl.pathname

  if (request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
    response.end()
    return
  }

  if (pathname === '/api/health' && request.method === 'GET') {
    sendJson(response, 200, { ok: true, service: 'contact-api' })
    return
  }

  if (pathname === '/api/contact' && request.method === 'POST') {
    try {
      const payload = await parseRequestBody(request)
      const normalized = {
        name: String(payload.name ?? '').trim(),
        email: String(payload.email ?? '').trim(),
        company: String(payload.company ?? '').trim(),
        message: String(payload.message ?? '').trim(),
      }

      const errors = validateSubmission(normalized)

      if (Object.keys(errors).length > 0) {
        sendJson(response, 422, { errors })
        return
      }

      const submissions = await readSubmissions()
      const entry = {
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        ...normalized,
      }

      submissions.unshift(entry)
      await writeSubmissions(submissions)

      sendJson(response, 201, {
        message: 'Demo request captured successfully.',
        submission: entry,
      })
    } catch (error) {
      if (error instanceof SyntaxError) {
        sendJson(response, 400, { error: 'Invalid JSON payload.' })
        return
      }

      console.error(error)
      sendJson(response, 500, { error: 'Unable to save the contact request right now.' })
    }

    return
  }

  if (pathname === '/api/contact' && request.method === 'GET') {
    try {
      const submissions = await readSubmissions()
      sendJson(response, 200, { submissions })
    } catch (error) {
      console.error(error)
      sendJson(response, 500, { error: 'Unable to read contact requests.' })
    }

    return
  }

  if (request.method === 'GET' || request.method === 'HEAD') {
    try {
      const assetPath = await resolveStaticAsset(pathname)

      if (assetPath) {
        if (request.method === 'HEAD') {
          response.writeHead(200)
          response.end()
          return
        }

        await sendStaticFile(response, assetPath)
        return
      }

      const indexPath = path.join(distDir, 'index.html')
      await sendStaticFile(response, indexPath)
      return
    } catch (error) {
      if (error.code === 'ENOENT') {
        sendJson(response, 503, {
          error: 'Frontend build files are missing. Run `npm run build` before starting the production server.',
        })
        return
      }

      console.error(error)
      sendJson(response, 500, { error: 'Unable to serve the frontend right now.' })
      return
    }
  }

  sendJson(response, 404, { error: 'Route not found.' })
})

ensureStorage()
  .then(() => {
    server.listen(port, () => {
      console.log(`Contact API listening on http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error('Failed to initialize contact API storage.', error)
    process.exitCode = 1
  })
