# 📖 How to edit this site (no coding needed)

This guide explains, **step by step and without jargon**, how to update the
site: change photos, contact details, current needs, texts, and more.

> 👉 **99% of changes happen in a single file: `data.js`.**
> You don't need to know how to code — just replace the text between quotes.

---

## 1. The 3 golden rules (read before touching anything)

The `data.js` file is a list of information. To avoid breaking it:

1. **Only change the text between quotes `"..."`.**
   Example: in `phone: "+84 000 000 000"`, change only `+84 000 000 000` —
   **not** the word `phone` and not the quotes.

2. **Keep the quotes and the comma.**
   Each line looks like `key: "value",` — leave the `:`, the `"` and the `,`.

3. **Use straight quotes `"` (not « » or " ").**
   If you copy from Word, replace curly quotes with the keyboard's straight ones.

> 🛟 **If something breaks** (blank page), it's almost always a missing comma or
> quote. Undo your last change (Ctrl + Z) and try again. See "Troubleshooting"
> at the bottom.

### How to open `data.js`
- **Windows**: right-click `data.js` → *Open with* → **Notepad**.
- **Mac**: right-click → *Open with* → **TextEdit**.
- Even better (free, friendlier): **Visual Studio Code** or **Notepad++**.

---

## 2. Change contact details (phone, address, etc.)

Open `data.js`. Near the top, find the `config: { ... }` block. Edit:

| What to change | Line to find | Tip |
|----------------|--------------|-----|
| Address | `address: "Da Nang, Vietnam"` | Shown on page + used by Google |
| Google Maps link | `googleMapsUrl: "https://..."` | Copy the URL from Google Maps (*Share* button) |
| Phone | `phone: "+84 000 000 000"` | As it should be displayed |
| WhatsApp | `whatsapp: "+84000000000"` | **Digits only, no spaces** |
| Email | `email: "contact@example.org"` | |
| Facebook | `facebookUrl: ""` | Paste the full `https://...` address |

> 💡 **To hide an item** (e.g. no Facebook), leave the quotes empty:
> `facebookUrl: ""`. The button/row disappears automatically.

---

## 3. Change the photos

All images live in the **`images/`** folder.

### A) Replace an existing photo (easiest)
1. Prepare your photo (`.jpg` preferred — see tips below).
2. **Rename it exactly like the old one**: `hero.svg` → your photo as `hero.jpg`.
3. Since the extension changes (`.svg` → `.jpg`), open `data.js`, find
   `src: "images/hero.svg"` and change it to `src: "images/hero.jpg"`.

### B) Add a new photo to the carousel
In `data.js`, find the `photos: [ ... ]` list and add a block at the end
(before the `]`). Copy-paste this template:

```js
{
  src: "images/my-photo.jpg",
  alt: { en: "Short description (English)", vi: "Mô tả ngắn (Tiếng Việt)" },
  caption: { en: "Caption shown under the photo", vi: "Chú thích dưới ảnh" }
},
```

- `src` = path to the image inside `images/`.
- `alt` = short description (for screen-reader users) — **required**.
- `caption` = caption shown under the photo — **optional** (if removed, the
  `alt` text is shown instead).
- Don't forget the **comma** after the block if more photos follow.

The carousel adjusts itself: arrows, dots and thumbnails appear depending on the
number of photos. With a single photo, all controls are hidden.

### 📸 Photo tips & rules
- **Never use a recognizable photo of a child without written permission** from
  the parents.
- Prefer: the building façade, an empty room, donations, the adult team (with
  consent).
- Recommended size: ~1200 × 900 px. Compress them at https://squoosh.app to keep
  the site fast.
- When in doubt, **keep the default grey placeholders** — the site still looks
  credible.

---

## 4. Change the texts (English + Vietnamese)

Still in `data.js`, under `content: { ... }`, there are two blocks:
- `en: { ... }` → the **English** version
- `vi: { ... }` → the **Vietnamese** version

➡️ **When you edit an English text, edit its Vietnamese counterpart too** (same
key in both blocks). If you forget the Vietnamese, the English shows instead —
not broken, just less polished.

Common texts worth customizing:

| Key | Purpose |
|-----|---------|
| `name` | Organization name |
| `subtitle` | Short line under the name |
| `shortDescription` | Short description (hero + sharing) |
| `longDescription` | "About" presentation |
| `currentNeeds: [ ... ]` | The list of needs (the badges) |
| `acceptedDonations: [ ... ]` | What you can bring |
| `notAcceptedDonations: [ ... ]` | Check before bringing |
| `openingHours` | Opening hours |
| `visitPolicy` | Visit policy |

For **lists** (inside square brackets `[ ]`), each item is between quotes and
separated by a comma:

```js
currentNeeds: ["Rice", "Milk", "Diapers"],
```

---

## 5. Update the date and status

In `config:`:
- `lastUpdated: "2026-06-09"` → set today's date (format `year-month-day`).

In `content.en` and `content.vi`:
- `verifiedStatus: "Information to be confirmed"` → change it to
  `"Information confirmed by the organization"` once everything is validated.

---

## 6. (Optional) Change the colors

Colors live in **`styles.css`**, at the very top, inside the `:root { }` block.
Just change the color code (e.g. `#3f6f5e`). Pick one at https://www.color-hex.com.

```css
--color-primary: #3f6f5e;     /* main green */
--color-secondary: #b98a52;   /* soft brown accent */
--color-background: #faf6ee;  /* page background */
```

> If you change `--color-primary`, set the same color in `data.js` on the line
> `themeColor: "..."` (the browser bar color on mobile).

---

## 7. Preview and publish your changes

### Preview on your computer (before publishing)
Just double-click **`index.html`**: it opens in your browser.
(For a perfect preview, see the "Run it locally" section of `README.md`.)

### Publish the new version online
It depends on how the site was put online:
- **Cloudflare Pages via drag-and-drop**: go back to the Cloudflare dashboard →
  your project → **Create deployment** → drop the **whole folder** again. The new
  version replaces the old one in ~1 minute.
- **Cloudflare Pages connected to GitHub**: just push your changed files; the
  site updates by itself.

(Full details in `README.md`, section 3.)

---

## 8. Troubleshooting 🛟

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Blank / broken page | Missing comma or quote in `data.js` | Undo (Ctrl + Z) your last change |
| A photo doesn't show | Wrong file name in `src` | Make sure the name in `data.js` = the real file name in `images/` |
| Weird text / broken accents | File saved wrong | Re-save as **UTF-8** (your editor's "Encoding" option) |
| Vietnamese doesn't appear | Missing key in `vi` | Add the same key as in `en` |

💡 **Safety tip**: before a big change, **make a copy of the folder**
(copy-paste). If anything breaks, you can go back to the copy.

---

Need more technical help (deployment, file structure)? See **`README.md`**.
French version of this guide: **`GUIDE-FR.md`**.
