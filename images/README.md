# Images

These are **neutral placeholder SVGs**. Replace them with real photos when you have them.

| File | Used for | Suggested content |
|------|----------|-------------------|
| `hero.svg` | Hero + first gallery item | The building façade / entrance |
| `common-room.svg` | Gallery | An empty common room or activity space |
| `donations.svg` | Gallery | Donated goods (rice, milk, hygiene products) |
| `team.svg` | Gallery | Adult team / volunteers **with their consent** |
| `og-image.svg` | Social sharing preview | A 1200×630 banner image |
| `favicon.svg` | Browser tab icon | A simple logo or symbol |

## How to replace
1. Keep the **same file name** (e.g. save your photo as `hero.jpg`).
2. If you change the extension, update the `src` paths in **`../data.js`** (gallery)
   and the `<img>` / `<meta>` / `<link>` tags in **`../index.html`** + `ogImage` / `favicon` in `data.js`.
3. Recommended sizes: gallery photos ~1200×900 px, `og-image` exactly 1200×630 px.
4. Compress JPG/PNG before uploading (e.g. https://squoosh.app) to keep the page fast.

## ⚠️ Photo rules (important)
- **No close-up or recognizable photos of children** by default.
- Prefer: façade, empty rooms, donated goods, adults who have agreed to appear.
- Never publish a child's photo without **written permission** from a parent/guardian.
- When in doubt, leave the neutral placeholder in place — the page works fine without real faces.
