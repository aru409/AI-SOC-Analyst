# AI SOC Analyst Frontend

A professional multi-page startup website for an AI SOC Analyst product, built with React, Vite, Tailwind CSS, and a lightweight Node backend.

This project includes:

- a polished multi-page frontend
- animated product-focused UI sections
- a contact form connected to a real backend endpoint
- a Render-ready deployment setup

## Features

- Responsive navbar with desktop and mobile navigation
- Hero section with startup-style product messaging
- Interactive dashboard preview with tab switching
- Pricing page with billing toggle
- Contact page with backend form submission
- Multi-page routing using `react-router-dom`
- Light professional UI theme
- Render deployment support through `render.yaml`

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Node.js HTTP server

## Project Structure

```text
src/
  components/
  pages/
  App.jsx
  main.jsx
server/
  index.js
data/
  contact-submissions.json
render.yaml
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm run server
```

Start the frontend in another terminal:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Production Build

Build the frontend:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## API Endpoints

- `GET /api/health`
- `GET /api/contact`
- `POST /api/contact`

## Contact Form Storage

Contact form submissions are stored in:

```text
data/contact-submissions.json
```

This is suitable for demos and local development.

## Render Deployment

This repository includes a free-tier Render configuration in `render.yaml`.

Deploy flow:

1. Push the project to GitHub
2. Create a new Render Blueprint
3. Select this repository
4. Deploy the generated web service

The production server serves both:

- the built React frontend from `dist/`
- the backend API from `server/index.js`

## Free Tier Note

On Render's free web service tier, filesystem writes are ephemeral. That means contact submissions can be lost when the service restarts, redeploys, or spins down.

For a more production-ready setup, replace JSON file storage with a real database such as PostgreSQL.

## Live Deployment

Render deployment URL:

[https://sentra-ai-soc.onrender.com](https://sentra-ai-soc.onrender.com)

## Author

Arundhati Singh
