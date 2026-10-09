# Website Status

**Last updated:** v2 refresh session (see git log; baseline release: `v1.0.0-archive`).

## Deployment

- Repo: `https://github.com/iisc-stars/iisc-stars.github.io` (branch `main` = live site, root).
- Hosting: GitHub Pages, serves the repo root directly. `.nojekyll` present.
- No build step. Edit HTML/CSS, commit, push — live in ~1 min.
- Rollback release: tag **`v1.0.0-archive`** (+ GitHub release *“v1.0.0 — Static archival snapshot”*)
  = the site as first reconstructed from the dump, before the v2 refresh.
  Roll back with: `git checkout v1.0.0-archive -- . && git commit -m "rollback" && git push`.

## Page inventory (static, root-level HTML)

| Page | Notes |
|---|---|
| `index.html` | Home. Hero image slider (7 slides recovered from original DB), About/Objectives intro boxes, six domain cards with original icons, footer with GoI initiative logos. |
| `objectives.html` | 5 objective cards with original `obj1..5.png` icons and original border colours. |
| `scheme-details.html` | Overview of scheme. |
| `eligibility.html` | CFI/NCFI categories. |
| `application-guide.html` | 4 evaluation pillars (original content). |
| `expert-committees.html` | 4 committee cards with original pastel backgrounds. |
| `selection-procedure.html` | Process walkthrough. |
| `system-of-monitoring.html` | 4 monitoring cards with original icons (`iconpro1`, `smicon2-4`). |
| `financing-of-the-scheme.html` | Grant caps, UC/audit rules. |
| `ip-rights.html` | **NEW in v2** — recovered page (original body was the IP figure). |
| `physics.html`, `chemistry.html`, `biological-sciences.html`, `nanosciences.html`, `data-science-mathematics.html`, `earth-sciences.html` | Thrust areas, each with original watercolour feature image. |
| `outreach.html` | **NEW in v2** — Online Workshop on Grant Writing (Dec 7–12, 2020) recovered page. |
| `approved-proposals.html` | Sanction lists Phase 1 & 2 + clickable results figure (as in original). |
| `important-dates.html` | Chronology table incl. workshop links. |
| `faq.html` | 24 FAQs from original DB, accordion. |
| `downloads.html` | Templates & official PDFs (in `assets/docs/`). |
| `contact.html` | Address + link to maps (no tracking embed). |

## Assets

- `style.css` — single stylesheet, CSS custom properties, responsive. No framework.
- `assets/images/` — all recovered site imagery (see [02-image-inventory.md](02-image-inventory.md)).
- `assets/docs/` — official PDFs/DOCX (proposal template, endorsement, eligible institutions CFI/NCFI,
  priority areas, STARS-1/STARS-2 project details, results 2019, IP workshop 2024, nanobiotech conference,
  grant-writing schedule, priority-area PDFs PS/CS/BS/NS/DS/ES.pdf, Annexure I/II).
- `assets/js/main.js` — dependency-free hero slider (auto-advance + click-through links).
- No tracking, no external CDNs, no Google Fonts — fully offline-capable.

## Chrome / layout (identical on every page)

```
top bar (GoI links … tagline)
header (STARS logo + name | emblem + IISc logos)
nav  (Home, Objectives, Programme Details ▾, Thrust Areas ▾, Approved Proposals,
      Important Dates, FAQ, Downloads, Contact)
page banner / hero (per-page banner image from the original site)
main content (some pages have left sidebar for Programme Details)
footer (About + Quick Links + Contact … GoI logos strip … copyright)
```

## Maintenance notes

- When adding a page: copy an existing page as template, set `--banner` inline style on the
  `.page-banner` div, add nav/sidebar links, add favicon links.
- Keep pages self-contained; there is no templating by design (static hosting).
- The archive notice ticker and “Offline Archive” branding were **removed in v2** on purpose —
  do not reintroduce them.
