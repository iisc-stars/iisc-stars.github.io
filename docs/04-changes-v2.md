# v2 Refresh — Change Log & Rationale

Feedback received on the v1 archival site drove this refresh. Constraint kept throughout:
**stay 100% static**, **keep the overall layout/navigation intact**, **zero content repetition**.

## Change 1 — Archive notice banner removed ✅

- The “ARCHIVE NOTICE” ticker under the nav on the home page was removed entirely.
- The “STARS Offline Archive” label in the top bar and “(Archival Offline Edition)” in the
  footers were removed on every page (the site is now the primary STARS web presence).
- The legitimate announcement that was in the ticker (IP/Patent workshop, Sept 21 2024)
  already lives on `important-dates.html`, so no information was lost.

## Change 2 — Original imagery restored ✅

The dump contained every image the original site used (see
[02-image-inventory.md](02-image-inventory.md) for the full mapping). Restored:

- **Home hero slider** — the 7 original 1920×505 slides (main banner + one per thrust area),
  auto-advancing, each thrust slide linking to its page. Replaces the plain gradient hero.
  Implemented in dependency-free JS (`assets/js/main.js`) + CSS.
- **Domain cards on home** — original thrust-area icons.
- **Per-page banners** — every subpage’s `.page-banner` now uses its original 1920×484
  illustration with a navy overlay gradient.
- **Thrust-area pages** — original 977×378 watercolour feature images.
- **objectives.html** — original 5-card layout with `obj1..5.png` icons and original colours.
- **system-of-monitoring.html** — original 4-card layout with `iconpro1`/`smicon2-4` icons.
- **approved-proposals.html** — original clickable results figure → `STARS_Results_April2019.pdf`.
- **Footer** — the eight GoI initiative logos from the original footer (myGov, ECI, IMPRINT,
  NDL, Digital India, data.gov.in, Swachh Bharat, MoE).
- **Favicon** — original favicon set.

## Change 3 — New pages (recovered content, no repetition) ✅

- **`ip-rights.html`** — existed in the original nav under Programme Details (DB page
  `ip-rights`, body = IP figure `iprights.jpg`). Added to the Programme Details dropdown
  and the sidebar of Programme Details pages.
- **`outreach.html`** — the original `outreach1` page: “Online Workshop on Grant Writing”
  (Dec 7–12, 2020), with program schedule PDF. Linked from `important-dates.html`
  (which previously pointed at a dead `/p/outreach1` URL).
- Call-for-proposals page from the DB was **not** recreated: its content (closed registration
  buttons, links to FAQ/downloads) would duplicate `important-dates.html` and `downloads.html`.

## What deliberately did NOT change

- Overall layout: top bar → header → nav → banner → content → footer; sidebar on
  Programme Details pages; page slugs/URLs unchanged (no broken links).
- All textual content of existing pages.
- Static-only architecture: no PHP, no build system, no external CDN dependencies.

## Content provenance rule for the future

Anything public that the original site had is fair game to copy from the dump (see
[01-dump-analysis.md](01-dump-analysis.md) §3). Never copy from `phase1/`, `phase2/`, `dev/`,
`uploads/proposal*/` or any DB dump — those contain private proposals and PII.
