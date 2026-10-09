# IISc STARS Website — Project Documentation

This directory contains everything a future developer, maintainer, or AI agent needs
to understand and continue work on the **IISc STARS static website**
(https://iisc-stars.github.io/).

## Document index

| Document | Purpose |
|---|---|
| [01-dump-analysis.md](01-dump-analysis.md) | Deep analysis of the original website dump (PHP/CodeIgniter app + MySQL dumps + uploads). What it contains, where things live, what is safe to publish and what is NOT (PII/private data). |
| [02-image-inventory.md](02-image-inventory.md) | Complete mapping of original site images (source path in dump → destination in this repo → where each image is used). |
| [03-website-status.md](03-website-status.md) | Current status of the static website: pages, assets, releases/tags, deploy setup. |
| [04-changes-v2.md](04-changes-v2.md) | The v2 refresh: what changed, why, and the exact mapping used (banner removal, image restoration, new pages). |
| [05-handoff.md](05-handoff.md) | How-to guide for the next session/agent: how to build, test, deploy, roll back, and where to pick up. |

## Quick facts

- **Live site:** https://iisc-stars.github.io/ (GitHub Pages, deploys automatically from `main` branch root)
- **Repo:** https://github.com/iisc-stars/iisc-stars.github.io
- **Architecture:** 100% static HTML/CSS, no build step, no server-side code. Client-side vanilla JS only (hero slider).
- **Original site:** https://stars.iisc.ac.in — a CodeIgniter 3 PHP app backed by MySQL, dumped in Sept 2026 to
  `/Users/nbharadwaj/mine/code/stars_dump/stars_web_dump_sep2026` (the authoritative copy; a partial Google Drive mirror exists).
- **Rollback release:** tag `v1.0.0-archive` + GitHub release "v1.0.0 — Static archival snapshot" preserves the
  pre-refresh state of the site.
