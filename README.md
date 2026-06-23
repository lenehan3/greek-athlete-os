# Greek Athlete OS

A Progressive Web App (PWA) workout tracker — 4-day cut split. Built with Vite + React + Tailwind CSS, installable to the iPhone Home Screen.

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

## Install on iPhone

The app installs to the Home Screen and runs full-screen (standalone) with a black
status bar matching the design.

1. Serve the app over **HTTPS or localhost** — service workers (required for install)
   only run in those contexts. For local testing run `npm run preview` and open the
   printed URL on the same machine, or deploy the `dist/` folder to any static host.
2. On the iPhone, open that URL in **Safari** (Chrome on iOS cannot add PWAs).
3. Tap the **Share** button, then **Add to Home Screen**.
4. Launch from the new Home Screen icon — it opens standalone, no Safari chrome.

> Note: to install on a physical phone the site must be reachable over HTTPS (any
> static host works) or via localhost on that device. `npm run preview` is only
> reachable from the machine running it unless you expose it on your LAN
> (`npm run preview -- --host`).
