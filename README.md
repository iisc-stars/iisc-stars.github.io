# IISc STARS — Official Website

Static website for the **Scheme for Transformational and Advanced Research in Sciences (STARS)**,
an initiative of the Ministry of Education (MoE), Government of India, coordinated and monitored by
the Indian Institute of Science (IISc), Bangalore.

Live at: **https://iisc-stars.github.io/**

- Pure static HTML/CSS/JS — no build step, no server-side code, no tracking. Hosted via GitHub Pages
  from the root of the `main` branch (`.nojekyll` present).
- Reconstructed from the original `stars.iisc.ac.in` web dump (Sept 2026). The original was a
  CodeIgniter/MySQL application; all public content and imagery were recovered and converted to
  static pages.
- Project documentation for maintainers and future AI sessions lives in [`docs/`](docs/README.md).
- Rollback point: tag `v1.0.0-archive` (GitHub release) preserves the initial reconstruction.

## Editing

Each page is a standalone HTML file at the repo root. Shared chrome (top bar, header, nav, footer)
is duplicated by design — copy an existing page as a template when adding a new one, and see
[`docs/05-handoff.md`](docs/05-handoff.md) for conventions.

Copyright © STARS – Indian Institute of Science, Bangalore.
