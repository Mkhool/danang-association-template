# Community Center — Static Site Template

A tiny, static, dependency-free website to give a small association / social
center in **Da Nang, Vietnam** a credible, durable web presence — the kind of
"website" you can add to a **Google Maps / Google Business Profile** listing.

It helps visitors, donors and volunteers confirm the place exists, find it,
contact it, see current needs, and **help the right way** (contact first).

> The repository ships with **fictional example data**
> (*"Example Community Center Da Nang"*). Replace it with real, verified info.

> 🧑‍🤝‍🧑 **Not a developer?** Read the plain-language editing manual instead:
> **[GUIDE-EN.md](GUIDE-EN.md)** (English) · **[GUIDE-FR.md](GUIDE-FR.md)** (Français).
> It explains how to change photos, contact details and texts without coding.

## What it is (and is not)

- ✅ 100% static: plain **HTML + CSS + vanilla JS**. No build step.
- ✅ Bilingual **English / Vietnamese** with an EN/VI toggle (English default).
- ✅ SEO + Open Graph + Schema.org `NGO`/Organization JSON-LD.
- ✅ Responsive, mobile-first, fast, accessible.
- ❌ No backend, no forms, no database, no payment, no online donations.
- ❌ No cookies, no tracking, no analytics, no external fonts or libraries.

## File structure

```
.
├── index.html      # Page skeleton + SEO meta tags
├── styles.css      # Theme (edit the CSS variables at the top to re-skin)
├── data.js         # ALL association content (edit this for each org)
├── script.js       # Renders the page + EN/VI switch + JSON-LD (rarely edited)
├── README.md       # This file (technical)
├── GUIDE-EN.md     # Plain-language editing manual (English, non-developers)
├── GUIDE-FR.md     # Mode d'emploi simple (Français, non-développeurs)
└── images/         # Placeholder SVGs + image guidelines (images/README.md)
```

---

## 1) Edit an association's information

Open **`data.js`**. Everything is in one `SITE` object:

- `SITE.config` — facts that are the **same in every language**: address,
  `googleMapsUrl`, `phone`, `whatsapp` (digits only), `email`, `facebookUrl`,
  `lastUpdated`, `siteUrl`, and the `photos` list.
  → Leave any contact field as `""` (empty) to **hide** its button/row.
- `SITE.content.en` / `SITE.content.vi` — all **translated text**: name,
  descriptions, current needs, accepted / not-accepted donations, visit policy,
  important notes, verified status, etc.

Rules:
- Keep the **same keys** in `en` and `vi`. If a `vi` value is missing, the
  English text is used automatically.
- After editing, just reload the page — no build needed.

Fixed interface words (button labels, generic section titles) live in
`UI_LABELS` at the top of **`script.js`** — you usually don't need to touch them.

## 2) Replace the photos

See **`images/README.md`** for the full guide. In short:
1. Drop your photos in `/images/` (keep the same names to avoid editing paths).
2. If you change file names/extensions, update `src` in `data.js` and the
   `ogImage` / `favicon` values there.
3. Recommended: gallery ~1200×900 px, `og-image` exactly 1200×630 px; compress
   before uploading.

### ⚠️ Photo precautions (read this)
- **Never use close-up or recognizable photos of children** by default.
- Use neutral images: façade, empty common room, donated goods, or adults who
  have **given consent**.
- A child's photo requires **written permission** from a parent/guardian.
- The page is designed to look credible **even with no real photos** — when in
  doubt, keep the placeholders.

## 3) Deploy free on Cloudflare Pages

You can deploy with **drag-and-drop** (no Git needed) or from a Git repo.

**Option A — Direct upload (simplest):**
1. Go to <https://dash.cloudflare.com> → **Workers & Pages** → **Create** →
   **Pages** → **Upload assets**.
2. Name the project (e.g. `example-center-danang`).
3. Drag the **whole project folder** (the one containing `index.html`).
4. Click **Deploy**. You get a free URL like
   `https://example-center-danang.pages.dev`.
5. Set `siteUrl` in `data.js` to that URL (used for SEO/sharing) and redeploy.

**Option B — From Git (auto-deploys on every push):**
1. Push this folder to a GitHub/GitLab repo.
2. Cloudflare Pages → **Connect to Git** → pick the repo.
3. **Framework preset:** *None*. **Build command:** *(leave empty)*.
   **Build output directory:** `/` (the repo root).
4. **Save and Deploy.**

> Works the same on **GitHub Pages**, **Netlify**, or **Vercel** — it's just
> static files, so "no build / output = root" everywhere.

## 4) Make a page for another association

Because all content is in `data.js`, just **duplicate the folder**:
1. Copy the whole project folder → rename it (e.g. `org-two/`).
2. Edit `data.js` with the new association's details.
3. Replace the photos in `org-two/images/`.
4. Deploy that folder as a **separate** Cloudflare Pages project.

Each association = one folder = one free site. Keep them independent so
updating one never breaks another.

## 5) Photo precautions — summary

See section 2. The core rule: **no recognizable children without written
consent**, prefer neutral images, and it's always fine to ship with placeholders.

## 6) Why there is no online donation system

This template **intentionally** has no payment or "Donate" button:
- Collecting money online for someone else can be **illegal** without official
  authorization, registration, or a written agreement with the organization.
- It creates **trust, tax and accountability** problems (who receives funds? are
  they declared? is there a receipt?).
- Fake or unofficial donation pages are a common **scam pattern** — adding one
  can harm the very organization you want to help.

➡️ The right model here: the page **informs and redirects** people to contact
the organization **directly**. If they later set up official donations
themselves, they can add their own verified link.

## 7) Add the site to Google Maps / Google Business Profile

1. The organization should own/claim its listing at
   <https://business.google.com> (Google Business Profile). Ideally the org does
   this; a volunteer can only suggest an edit.
2. In the profile (or via **Maps → Suggest an edit** if you don't manage it),
   open **Edit profile → Contact → Website**.
3. Paste the deployed URL (e.g. `https://example-center-danang.pages.dev`).
4. Save. Google may take some time to review/publish the change.
5. Make sure the **name, address and phone** on this page **match** the Google
   listing exactly — consistency improves trust and local SEO.

---

## Run it locally

It's static, so you can just open `index.html` — but a tiny local server avoids
browser file-path quirks. From the project folder:

**Python (already on most machines):**
```bash
python -m http.server 8000
```
Then open <http://localhost:8000>.

**Node (if you prefer):**
```bash
npx serve .
```

**Just open the file (no server):**
- Windows: double-click `index.html`, or run `start index.html`
- macOS: `open index.html`
- Linux: `xdg-open index.html`

## Accessibility & performance notes
- Semantic landmarks, a skip link, `aria-pressed` on the language toggle,
  visible focus styles, `prefers-reduced-motion` respected.
- No external requests → fast first load and strong Lighthouse scores.
- Images use `width`/`height` + `loading="lazy"` (except the hero) to avoid
  layout shift.

## License / usage
Free to reuse and adapt for non-profit, community purposes. Always confirm the
real organization's information before publishing, and keep `lastUpdated` and
`verifiedStatus` honest.
