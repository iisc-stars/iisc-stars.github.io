# Handoff Guide (for the next AI session / developer)

## Getting oriented

1. Read `docs/README.md`, then `docs/03-website-status.md` (what the site is now).
2. Read `docs/01-dump-analysis.md` if you need original content — it tells you exactly
   which dump paths are safe to use and which contain private data (never publish
   `phase1/`, `phase2/`, `dev/`, `uploads/proposal*/`, DB dumps).
3. `docs/02-image-inventory.md` maps every original image to its repo path.
4. `docs/04-changes-v2.md` explains what the v2 refresh changed and why.

## Working environment

- Repo: `/Users/nbharadwaj/Mine/code/iisc-stars.github.io`
- Dump: `/Users/nbharadwaj/mine/code/stars_dump/stars_web_dump_sep2026`
  (Google Drive mirror exists but is possibly incomplete — always use the local copy).
- GitHub push works with the `bharath12345` account (`gh auth switch --user bharath12345`);
  the `ns-nbharadwaj` token does **not** have write access to this repo.
- Preview locally: `python3 -m http.server 8000` in the repo root → http://localhost:8000.
  (Open pages directly via `file://` also works; there are no fetch() calls.)

## Deploy

`git add -A && git commit -m "..." && git push origin main` — GitHub Pages serves the
root of `main`; live in about a minute. No build, no CI to wait for.

## Rollback

- Release/tag `v1.0.0-archive` = pre-refresh snapshot.
- `git checkout v1.0.0-archive -- .` then commit/push, or point Pages at the tag if a
  temporary rollback of the whole site is needed.

## Conventions to keep

- One HTML file per page at repo root, kebab-case filenames.
- Every page: same top bar / header / nav / footer chrome; set per-page banner with an
  inline `style="--banner:url('assets/images/banners/….jpg')"` on `.page-banner` and add the
  favicon `<link>`s (copy from any existing page).
- Programme Details pages carry a left sidebar menu listing all Programme Details pages —
  add new ones there and to the nav dropdown on every page.
- All official PDFs live in `assets/docs/`; images in `assets/images/` subfolders.
- Keep the site dependency-free (no CDN, no tracking, works offline).
- If adding content from the dump, sanity-check it isn’t already on another page
  (the “zero repetition” rule).

## Open ideas (not yet done)

- A “Projects Showcase” section: the approved-projects PDFs (STARS-1/STARS-2 Details of
  projects) could be transcribed into a searchable static HTML table, one row per project
  (title/PI/institute are public in those PDFs).
- Original DB had per-page custom CSS palettes (important-dates card colours #49c1cf,
  #a4cd65, #fdb044, #ed706e, #ac88a4, #6d99fb) — important-dates.html currently uses a
  plain table; converting it to the original coloured date cards would match the old look.
- `star_mhrd_inst` table in the DB dump holds the eligible-institutions list; could be
  rendered as a static searchable table page instead of the CFI/NCFI PDFs.
- Add `sitemap.xml` + `robots.txt` and per-page `<meta name="description">` tags.
