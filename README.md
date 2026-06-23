# Greek Athlete OS

A Progressive Web App (PWA) workout tracker — minimalist 3-day cut split. Built with Vite + React + Tailwind CSS, installable to the iPhone Home Screen.

**Live:** https://lenehan3.github.io/greek-athlete-os/

## Commands

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build into dist/
npm run preview    # serve the production build locally (http://localhost:4173)
npm run icons      # regenerate the app icons from scripts/generate-icons.mjs
```

## Editing workouts

All workout / program content lives in **`src/program.js`** — the `program` object,
the `days` order array, and the `tagColors` map. Edit that file to change exercises,
sets, notes, tags, or add/remove days. The rendering logic in `src/App.jsx` reads
from those exports, so you should not need to touch `App.jsx` for content changes.

Each exercise has `{ name, sets, note, priority? }`. Set `priority: true` to show the
flame icon. A day's `tagColor` must be one of the keys in `tagColors` (yellow, green,
blue, orange, gray).

## Persistence

Completed-exercise state is stored in the browser's `localStorage` under the key
`completed:<YYYY-MM-DD>`, so progress resets naturally each day and survives reloads.

## Deploy

Hosted on GitHub Pages at https://lenehan3.github.io/greek-athlete-os/. Deployment is
automatic: the `.github/workflows/deploy.yml` Action builds and publishes on every push
to `main`. To ship a change, just commit and push:

```bash
git add -A && git commit -m "update program" && git push
```

The site is served from the `/greek-athlete-os/` subpath, which is why `vite.config.js`
sets `base = '/greek-athlete-os/'` (and the manifest/service-worker scope match it). If
you ever rename the repo, update `base` to match.

## Install on iPhone

The app installs to the Home Screen and runs full-screen (standalone) with a black
status bar matching the design.

1. On the iPhone, open **https://lenehan3.github.io/greek-athlete-os/** in **Safari**
   (Chrome on iOS cannot add PWAs).
2. Tap the **Share** button, then **Add to Home Screen**.
3. Launch from the new Home Screen icon — it opens standalone, no Safari chrome.

> Local testing alternative: `npm run preview` serves the production build, or
> `npm run preview -- --host` exposes it on your LAN so the phone can reach it over
> http for a quick check (install still wants HTTPS/localhost, which the live URL gives).
