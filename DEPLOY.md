# Deploying Sentra AI

## Render

This project is prepared to deploy as a single Render web service that serves:

- the React frontend from `dist/`
- the contact API from `server/index.js`

### What is already configured

- `render.yaml` defines the web service, build command, start command, and health check.
- `npm start` runs the production Node server.
- The production server serves both `/api/*` routes and the built React app.

### Steps

1. Push this project to GitHub.
2. In Render, choose **New > Blueprint**.
3. Select your repository.
4. Render will detect `render.yaml` and propose the `sentra-ai-soc` web service.
5. Create the service and wait for the first deploy to finish.

### Important note

The contact form currently stores submissions in `data/contact-submissions.json`.

On Render's free web service tier, local filesystem writes are ephemeral. That means contact submissions can be lost whenever the service redeploys, restarts, or spins down. This free setup is fine for demos and portfolio use, but for production lead handling you should move submissions to a real database.

### After deploy

- Frontend: available at your Render URL
- Health check: `/api/health`
- Contact API: `POST /api/contact`

### Local production test

```bash
npm install
npm run build
npm start
```
