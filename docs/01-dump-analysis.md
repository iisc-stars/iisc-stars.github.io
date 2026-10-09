# Deep Analysis: `stars_web_dump_sep2026`

**Source dump location (authoritative local copy):**
`/Users/nbharadwaj/mine/code/stars_dump/stars_web_dump_sep2026`

A second, possibly incomplete copy exists on Google Drive at
`/Users/nbharadwaj/Library/CloudStorage/GoogleDrive-bharath12345@gmail.com/My Drive/STARS IISc/stars_web_dump_sep2026`.
The local copy is complete and was used for all analysis here. Total dump size ≈ 14 GB, ~62,000 files.

## 1. What the original site was

The original STARS site (`https://stars.iisc.ac.in`) was a **CodeIgniter 3 (PHP) application
with a MySQL backend**. Public pages were DB-driven:

- Table `star_pages` — one row per public page: `st_slug`, `st_title`, `st_titlealign`,
  `st_description` (raw HTML incl. Bootstrap markup), `st_file` (feature/banner image path),
  `st_style` (page-specific CSS).
- Table `star_posts` — rows with `st_for='slider'` are the home-page carousel slides
  (`st_file` = image, `st_url` = click-through link, `st_sorting` = order).
- Table `star_navigation` — the menu tree: `st_parent`, `st_slug`, `st_title`, `st_bannner`
  (per-page banner image path), `st_icon` (thrust-area icon path), sort order.
- Table `star_slug` — slug → (id, type) mapping where type ∈ {navigation, pages, posts}.
- Views: `application/views/homepage.php` (home), `application/views/page.php` (generic page),
  `application/views/inc/header.php` / `footer.php` (chrome).

**Authoritative page content** lives in the SQL dumps:
- `all_databases_backup.sql` (214 MB) — all databases: `stars_app` (live), `stars_app_dev`,
  `stars_phase2`, `stars_phase2_dev`, `development`, `mysql`. Contains the `star_*` tables above
  for the live site (multiple dumps of the same DB, later ones superset earlier ones).
- `phase2__backup.sql` (27 MB) — phase-2 proposal system only.

> ⚠️ These SQL dumps contain **PII and credentials** (researcher accounts, reviews, password
> hashes, proposal budgets). NEVER publish them or extract user tables to the public site.
> Only `star_pages`, `star_posts` (sliders), `star_navigation`, `star_slug` and the
> eligible-institutions list were mined for public content.

## 2. Top-level directory map

| Path | Size | Contents | Publishable? |
|---|---|---|---|
| `front/` | 28 MB | Public-site frontend: `front/assets/images/**` (banners, icons, logos), `front/assets/css`, `front/assets/js`, Bootstrap etc. Also a stale `front/OLD/` copy. | ✅ images/css/fonts |
| `uploads/front/` | ~26 MB | CMS-managed images actually referenced by the DB (sliders, per-page banners, thrust feature images) + a few public PDFs. | ✅ |
| `uploads/userfiles/` | ~17 MB | CKEditor-managed public files: `images/` (obj icons, monitoring icons, IP-rights figure, approved-results figure, public PDFs) and `files/` (priority-area PDFs PS/CS/BS/NS/DS/ES.pdf, Grant Writing schedule, sample forms). | ✅ |
| `uploads/` root | — | Public scheme PDFs: proposal templates (.docx/.pdf), endorsement template, STARS Results April 2019, MoE eligible-institution lists (CFI/NCFI), Priority Areas, IP-workshop 2024, Nanobiotech conference flyer, Annexure I/II. | ✅ |
| `OLDSITE/` | 20 MB | An even older (c. 2018?) Bootstrap "Freelancer" template static site with `img/portfolio/**`. Superseded; only of historical interest. | ✅ (unused) |
| `application/` | 5 MB | CodeIgniter app: controllers/models/views for front, portal (PI/co-PI), reviewer, panel. Source for understanding, not for publishing. | ❌ (code, no PII, but pointless to publish) |
| `panel/` | 14 MB | Admin panel frontend. | ❌ |
| `ckeditor/`, `ckfinder/`, `system/`, `vendor/` | ~180 MB | PHP framework/libraries. | ❌ |
| `phase1/`, `phase2/`, `dev/`, `uploads/proposal/`, `uploads/phase2/`, `uploads/zip/` | ~13.8 GB | **Submitted research proposals, reviewer reports, user documents — PRIVATE (PII, unpublished research).** | 🚫 NEVER |
| `DB/stars.sql` | 15 KB | Small schema-only dump. | — |
| `all_databases_backup.sql`, `phase2__backup.sql` | 241 MB | Full DB dumps (PII!). | 🚫 NEVER |

## 3. Key DB content recovered (public-facing)

### 3.1 Home-page slider (`star_posts`, `st_for='slider'`, live DB order)

| # | Image (dump path) | Linked to |
|---|---|---|
| 1 | `uploads/front/11.jpg` | (none — main STARS title banner) |
| 2 | `uploads/front/2.jpg` | `/p/physics` (Physical Sciences) |
| 3 | `uploads/front/3.jpg` | `/p/chemistry-1` |
| 4 | `uploads/front/4.jpg` | `/p/biological-sciences-1` |
| 5 | `uploads/front/51.jpg` | `/p/nanosciences-1` |
| 6 | `uploads/front/6.jpg` | `/p/data-science-mathematics-1` |
| 7 | `uploads/front/7.jpg` | `/p/earth-sciences-1` |

All slider images are 1920×505 JPEG. Slide 1 is identical to `front/assets/images/banner/1.jpg`;
slides 2–7 are dark-blue themed banners with the thrust-area name, a teaser sentence and line-art icons.

### 3.2 Per-page banner images (`star_navigation.st_bannner`)

1920×484 JPEG illustrations, one per public page:

| Page slug | Dump path |
|---|---|
| objectives | `uploads/front/objectives1.jpg` |
| about-the-program (Scheme Details) | `uploads/front/about-the-programe.jpg` |
| eligibility | `uploads/front/eligibility.jpg` |
| application-guide | `uploads/front/application_guide.jpg` |
| expert-committees | `uploads/front/expert_committees.jpg` |
| selection-procedure | `uploads/front/selection_procedure.jpg` |
| system-of-monitoring | `uploads/front/systems_monitoring.jpg` |
| financing-of-the-scheme | `uploads/front/financing-scheme.jpg` |
| ip-rights | `uploads/front/iprights.jpg` |
| important-dates | `uploads/front/important_dates.jpg` |
| approved-proposals | `uploads/front/approved_proposal.jpg` |
| faq | `uploads/front/faq.jpg` |
| downloads | `uploads/front/downloads1.jpg` |
| contact | `uploads/front/contact-us1.jpg` |

Thrust-area pages use 977×378 watercolour feature images instead:
`uploads/front/physics.jpg`, `chemical.jpg`, `biological.jpg`, `nanosc.jpg`, `datasc.jpg`, `earthsc.jpg`.

### 3.3 Thrust-area icons (`star_navigation.st_icon`)

Small PNG icons (≈45×50) shown next to each thrust area in the home-page "Thrust Areas" box:
`front/assets/images/{physics,chemistry,biological,nanosciences,mathematics,earth}.png`.

### 3.4 Page-content images (`uploads/userfiles/images/`)

| File | Used on | Size |
|---|---|---|
| `obj1.png` … `obj5.png` | Objectives — 5 objective cards with coloured bottom borders (#004a8b, #08c2f0, #26da99, #52aa2b, #ec961c) | 93×93 |
| `iconpro1.png`, `smicon2.png`, `smicon3.png`, `smicon4.png` | System of Monitoring — 4 monitoring-process cards (DST-SERB template, midterm review, termination policy, Apex report) | ~58×61 |
| `iprights.jpg` | IP Rights page — the entire page body was this figure | 579×234 |
| `approveimg(1).jpg` | Approved Proposals — clickable figure linking to `STARS Results April2019.pdf` | 522×338 |

### 3.5 Original navigation structure (from `star_navigation`)

```
HOME
OBJECTIVES
PROGRAM DETAILS
  ├─ Scheme Details (about-the-program)
  ├─ Thrust Areas (parent of the 6 domains)
  │    ├─ Physical Sciences ├─ Chemical Sciences ├─ Biological Sciences
  │    ├─ Nanosciences ├─ Data Science & Mathematics ├─ Earth Sciences
  ├─ Eligibility ├─ Application Guide ├─ Expert Committees
  ├─ Selection Procedure ├─ System of Monitoring
  ├─ Financing of the Scheme └─ IP Rights
CALL FOR PROPOSALS (linked to registration portal — closed/portal-only, omitted in static site)
IMPORTANT DATES
APPROVED PROPOSALS
FAQ
DOWNLOADS
CONTACT
```

Plus non-nav pages that existed: `about-the-programme` (duplicate intro used on home),
`outreach1` ("Online Workshop on Grant Writing", Dec 7–12 2020), `call-for-proposal`
(closed registration info).

### 3.6 Per-page custom CSS

`star_pages.st_style` carried page CSS: objective card border colours (above), expert-committee
card backgrounds (#5db6f2, #86cdfb, #85dfa9, #9ed37b), important-dates box colours
(#49c1cf, #a4cd65, #fdb044, #ed706e, #ac88a4, #6d99fb) with a blinking "registration open"
animation. These palettes were carried into the v2 static pages.

## 4. Original visual design tokens (from `front/assets/css`)

The original used Bootstrap 4 + custom CSS: deep navy (#003366-family) header/nav, teal
accents (#009f9a in FAQ accordion), the colours listed above, `front/assets/images/logo.png`
(yellow circular STARS logo), emblem + IISc logos in header, and the eight GoI initiative
logos (myGov, ECI, IMPRINT, NDL, Digital India, data.gov.in, Swachh Bharat, MoE) in the
footer (`front/assets/images/footerlogo/1..8.png`).

## 5. What was deliberately NOT brought over (and why)

- Everything under `phase1/`, `phase2/`, `dev/`, `uploads/proposal*/`, `uploads/zip/` —
  submitted proposals & reviews (private, unpublished research + PII).
- All database dumps (PII, password hashes).
- Portal/reviewer/admin views (login-gated app screens).
- `OLDSITE/` (superseded design; portfolio images are placeholders).
- Duplicate/aliased files in the dump (`11.jpg` ≡ `1.jpg`, `*1.jpg`/`*(1).jpg` copies, `front/OLD/`).
