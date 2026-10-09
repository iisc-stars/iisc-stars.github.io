# Image Inventory & Mapping (dump → repo)

All original images were recovered from the dump. Naming in the repo is normalised;
destination is `assets/images/` with subfolders. Original dimensions noted; files were
copied byte-for-byte (no re-encoding) unless stated.

## 1. Hero slider images (1920×505 JPEG)

| Source (dump) | Destination (repo) | Used as |
|---|---|---|
| `uploads/front/11.jpg` | `assets/images/slides/slide-home.jpg` | Slide 1 — main STARS title banner (navy, STARS logo, science icons) |
| `uploads/front/2.jpg` | `assets/images/slides/slide-physics.jpg` | Slide 2 — Physics teaser, links to physics.html |
| `uploads/front/3.jpg` | `assets/images/slides/slide-chemistry.jpg` | Slide 3 — Chemistry teaser, links to chemistry.html |
| `uploads/front/4.jpg` | `assets/images/slides/slide-biological.jpg` | Slide 4 — Biological Sciences teaser |
| `uploads/front/51.jpg` | `assets/images/slides/slide-nanosciences.jpg` | Slide 5 — Nanosciences teaser |
| `uploads/front/6.jpg` | `assets/images/slides/slide-datascience.jpg` | Slide 6 — Data Science & Mathematics teaser |
| `uploads/front/7.jpg` | `assets/images/slides/slide-earth.jpg` | Slide 7 — Earth Sciences teaser |

## 2. Inside-page banners (1920×484 JPEG)

Used as the `.page-banner` background image on each subpage (with a dark overlay for
text legibility).

| Source (dump, all under `uploads/front/`) | Destination (repo, under `assets/images/banners/`) | Used on |
|---|---|---|
| `objectives1.jpg` | `banner-objectives.jpg` | objectives.html |
| `about-the-programe.jpg` | `banner-scheme-details.jpg` | scheme-details.html |
| `eligibility.jpg` | `banner-eligibility.jpg` | eligibility.html |
| `application_guide.jpg` | `banner-application-guide.jpg` | application-guide.html |
| `expert_committees.jpg` | `banner-expert-committees.jpg` | expert-committees.html |
| `selection_procedure.jpg` | `banner-selection-procedure.jpg` | selection-procedure.html |
| `systems_monitoring.jpg` | `banner-system-monitoring.jpg` | system-of-monitoring.html |
| `financing-scheme.jpg` | `banner-financing.jpg` | financing-of-the-scheme.html |
| `iprights.jpg` | `banner-ip-rights.jpg` | ip-rights.html |
| `important_dates.jpg` | `banner-important-dates.jpg` | important-dates.html |
| `approved_proposal.jpg` | `banner-approved-proposals.jpg` | approved-proposals.html |
| `faq.jpg` | `banner-faq.jpg` | faq.html |
| `downloads1.jpg` | `banner-downloads.jpg` | downloads.html |
| `contact-us1.jpg` | `banner-contact.jpg` | contact.html |

## 3. Thrust-area feature images (977×378 watercolour JPEG)

Shown at the top of each thrust-area page body.

| Source (dump, all under `uploads/front/`) | Destination (repo, under `assets/images/thrust/`) | Used on |
|---|---|---|
| `physics.jpg` | `feature-physics.jpg` | physics.html |
| `chemical.jpg` | `feature-chemistry.jpg` | chemistry.html |
| `biological.jpg` | `feature-biological.jpg` | biological-sciences.html |
| `nanosc.jpg` | `feature-nanosciences.jpg` | nanosciences.html |
| `datasc.jpg` | `feature-datascience.jpg` | data-science-mathematics.html |
| `earthsc.jpg` | `feature-earth.jpg` | earth-sciences.html |

## 4. Thrust-area icons (small PNG, ~45×50)

Used on home page domain cards and next to headings on thrust pages.

| Source (`front/assets/images/`) | Destination (`assets/images/icons/`) |
|---|---|
| `physics.png` | `icon-physics.png` |
| `chemistry.png` | `icon-chemistry.png` |
| `biological.png` | `icon-biological.png` |
| `nanosciences.png` | `icon-nanosciences.png` |
| `mathematics.png` | `icon-datascience.png` |
| `earth.png` | `icon-earth.png` |

## 5. Objectives icons (`uploads/userfiles/images/` → `assets/images/icons/`)

`obj1.png` … `obj5.png` — one per objective card on objectives.html, with the original
coloured bottom borders (#004a8b, #08c2f0, #26da99, #52aa2b, #ec961c).

## 6. System-of-Monitoring icons (`uploads/userfiles/images/` → `assets/images/icons/`)

`iconpro1.png`, `smicon2.png`, `smicon3.png`, `smicon4.png` — the 4 monitoring cards.

## 7. Figures used inside pages

| Source | Destination | Used on |
|---|---|---|
| `uploads/userfiles/images/iprights.jpg` (579×234) | `assets/images/iprights-figure.jpg` | ip-rights.html (main page figure) |
| `uploads/userfiles/images/approveimg(1).jpg` (522×338) | `assets/images/approved-results.jpg` | approved-proposals.html (clickable → `assets/docs/STARS_Results_April2019.pdf`) |

## 8. Footer GoI initiative logos (`front/assets/images/footerlogo/` → `assets/images/footerlogo/`)

| File | Logo | Links to |
|---|---|---|
| `1.png` | myGov | https://www.mygov.in |
| `2.png` | Election Commission of India | https://eci.gov.in |
| `3.png` | IMPRINT India | https://imprint-india.org |
| `4.png` | National Digital Library | https://ndl.iitkgp.ac.in |
| `5.png` | Digital India | https://www.digitalindia.gov.in |
| `6.png` | data.gov.in | https://data.gov.in |
| `7.png` | Swachh Bharat Mission | https://swachhbharatmission.gov.in |
| `8.png` | MoE (MHRD) | https://www.education.gov.in |

## 9. Branding / misc

| Source | Destination | Used as |
|---|---|---|
| `front/assets/images/logo.png` | `assets/images/logo.png` (already present in v1) | Header logo |
| `front/assets/images/emblem.png` | `assets/images/emblem.png` (already present) | Header, Emblem of India |
| `front/assets/images/iscbangalore.png` | `assets/images/iscbangalore.png` (already present) | Header, IISc |
| `front/assets/images/moe.jpg` | `assets/images/moe.jpg` | (available; spare) |
| `front/assets/images/favicon/favicon.ico`, `favicon-32x32.png`, `apple-icon-152x152.png` | `assets/images/favicon/…` | Site favicon set |

## 10. Images seen in the dump but intentionally unused

- `coming-soon.jpg`, `comingsoon.jpg`, `login.jpg`, `gmap.jpg` (Google Maps embed replacement —
  contact page deliberately uses a static link instead of a tracking embed), `paymonthly.jpg*`,
  `newgif.gif` ("NEW" gif), `default.jpg`, `default2.jpg`, `cygnusg.png`, `starstext.png`,
  `nataniallogo.png` (national emblem duplicate), `first.png`, `smicon2/3/4` variants,
  everything under `front/OLD/`, `OLDSITE/img/` (old placeholder portfolio).
