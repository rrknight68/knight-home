# Knight Family Homes

Static site (no build step) deployed on Vercel.

| Route | File | Source of truth |
|---|---|---|
| `/` | `index.html` | redirects to `/westway` (vercel.json) |
| `/westway` | `westway.html` | `data/residences/westway.js`, rendered by `assets/residence-page.js` |
| `/bayshore` | `bayshore.html` | original hand-authored page, kept intact (budget key `238bayshore_budget_v1`) |
| `/compare` | `compare.html` | `compare{}` block in each `data/residences/*.js` |

- Edit a residence by editing its data file only; residences never share state.
- Shared: `assets/residence-bar.js` (selector), `assets/kfh-base.css` (Bayshore's styles), `assets/kfh.css` (components).
- Budget "Your #" entries are per-browser localStorage, namespaced per residence.
- Bayshore content check: `python3 .snapshots/extract_text.py bayshore.html | diff .snapshots/bayshore_before.txt -` (needs the before-snapshot locally).
