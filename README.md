# Randstad AI Transformation Pitch

A premium single-page React application for a 3–4 minute executive pitch on Randstad Nederland's AI transformation in recruitment.

## Tech stack

- React 18 + Vite 5
- Tailwind CSS 3
- lucide-react (icons)

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Build for production

```bash
npm run build
```

The output is placed in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Railway deployment

### Prerequisites

- A [Railway](https://railway.app) account
- The project pushed to a GitHub repository

### Steps

1. Log in to [Railway](https://railway.app) and click **New Project**.
2. Choose **Deploy from GitHub repo** and select this repository.
3. Railway will auto-detect the project. Set the following settings under **Settings → Build & Deploy**:

   | Setting | Value |
   |---|---|
   | **Build command** | `npm install && npm run build` |
   | **Start command** | `npm run start` |

4. Click **Deploy**. Railway will build and serve the app automatically.

### How the PORT variable works

Railway injects a `$PORT` environment variable at runtime. The `start` script is configured to use it:

```json
"start": "vite preview --host 0.0.0.0 --port $PORT"
```

No manual configuration of the port is required — Railway handles this automatically.

### No backend required

This is a fully static single-page application. No environment variables, API keys, or backend services are needed.

---

## Project structure

```
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx       # Full landing page (5 sections)
    ├── index.css     # Tailwind base + custom animations
    └── main.jsx      # React entry point
```