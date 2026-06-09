/* =============================================================================
   script.js  —  Renders the page from data.js and handles EN/VI switching.
   -----------------------------------------------------------------------------
   No frameworks, no tracking, no cookies, no storage. Everything runs locally
   in the browser. Content comes from `SITE` (see data.js).

   UI_LABELS below are the fixed interface words (button labels, section titles
   that are the same for every association). Association-specific text lives in
   data.js. Both are translated EN / VI.
   ========================================================================== */

const UI_LABELS = {
  en: {
    skipLink: "Skip to content",
    navAbout: "About & Contact",
    navHelp: "How to help",
    navNeeds: "Needs",
    navNotes: "Notes",
    navMenu: "Menu",
    backToTop: "Back to top",
    aboutContactTitle: "About & Contact",
    aboutTitle: "About",
    whoWeHelpTitle: "Who we help",
    helpTitle: "How to help",
    contactTitle: "Visit & contact",
    footerNote: "Volunteer-made information page.",
    btnMaps: "Open in Google Maps",
    btnHelp: "How to help",
    btnFacebook: "Facebook",
    lblAddress: "Address",
    lblHours: "Opening hours",
    lblPhone: "Phone",
    lblWhatsapp: "WhatsApp",
    lblEmail: "Email",
    lblFacebook: "Facebook",
    findUsOn: "Find us on",
    glanceLocation: "Location",
    glanceHelp: "Help with",
    glanceVisit: "Visits",
    carouselPrev: "Previous photo",
    carouselNext: "Next photo",
    slideLabel: "Photo {n} of {total}",
    goToPhoto: "Go to photo {n}"
  },
  vi: {
    skipLink: "Bỏ qua đến nội dung",
    navAbout: "Giới thiệu & Liên hệ",
    navHelp: "Cách hỗ trợ",
    navNeeds: "Nhu cầu hiện tại",
    navNotes: "Lưu ý",
    navMenu: "Menu",
    backToTop: "Lên đầu trang",
    aboutContactTitle: "Giới thiệu & Liên hệ",
    aboutTitle: "Giới thiệu",
    whoWeHelpTitle: "Chúng tôi giúp ai",
    helpTitle: "Cách giúp đỡ",
    contactTitle: "Thăm & liên hệ",
    footerNote: "Trang thông tin do tình nguyện viên thực hiện.",
    btnMaps: "Mở trong Google Maps",
    btnHelp: "Cách giúp đỡ",
    btnFacebook: "Facebook",
    lblAddress: "Địa chỉ",
    lblHours: "Giờ mở cửa",
    lblPhone: "Điện thoại",
    lblWhatsapp: "WhatsApp",
    lblEmail: "Email",
    lblFacebook: "Facebook",
    findUsOn: "Tìm chúng tôi trên",
    glanceLocation: "Vị trí",
    glanceHelp: "Hỗ trợ về",
    glanceVisit: "Thăm",
    carouselPrev: "Ảnh trước",
    carouselNext: "Ảnh tiếp theo",
    slideLabel: "Ảnh {n} / {total}",
    goToPhoto: "Đến ảnh {n}"
  }
};

/* ----------------------------- helpers ---------------------------------- */
const $ = (sel) => document.querySelector(sel);
const el = (tag, props = {}, children = []) => {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k === "text") node.textContent = v;
    else if (v !== null && v !== undefined) node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
};
const setText = (id, value) => { const n = document.getElementById(id); if (n) n.textContent = value || ""; };
const list = (items, mapper) => { const f = document.createDocumentFragment(); (items || []).forEach((it, i) => f.appendChild(mapper(it, i))); return f; };

/* Localized alt text for a photo, with EN fallback. */
const altFor = (photo, lang) =>
  (photo.alt && (photo.alt[lang] || photo.alt.en)) || "";

/* Localized caption — falls back to the alt text if no caption is provided. */
const captionFor = (photo, lang) =>
  (photo.caption && (photo.caption[lang] || photo.caption.en)) || altFor(photo, lang);

/* --------------------------- render the page ---------------------------- */
let currentLang = SITE.config.defaultLang || "en";

function render(lang) {
  const c = SITE.config;
  // Fall back to English for any missing translation block.
  const t = { ...SITE.content.en, ...(SITE.content[lang] || {}) };
  const ui = UI_LABELS[lang] || UI_LABELS.en;
  currentLang = lang;

  /* <html lang> + fixed UI labels marked with data-ui */
  document.documentElement.lang = lang === "vi" ? "vi" : "en";
  document.querySelectorAll("[data-ui]").forEach((node) => {
    const key = node.getAttribute("data-ui");
    if (ui[key]) node.textContent = ui[key];
  });
  // A couple of labels live in aria-label, not text content:
  const backTop = $("#back-to-top");
  if (backTop && ui.backToTop) backTop.setAttribute("aria-label", ui.backToTop);
  const navToggle = $("#nav-toggle");
  if (navToggle && ui.navMenu) navToggle.setAttribute("aria-label", ui.navMenu);

  /* ---- Head / SEO ---- */
  document.title = `${t.name} — Da Nang`;
  setText("brand-name", t.name);
  $("#meta-description").setAttribute("content", t.shortDescription);
  $("#og-title").setAttribute("content", t.name);
  $("#og-description").setAttribute("content", t.shortDescription);
  $("#og-image").setAttribute("content", absoluteUrl(c.ogImage));
  $("#og-url").setAttribute("content", c.siteUrl);
  if (c.themeColor) $("#meta-theme-color").setAttribute("content", c.themeColor);

  /* ---- Hero ---- */
  setText("hero-subtitle", t.subtitle);
  setText("hero-name", t.name);
  setText("hero-short", t.shortDescription);

  const actions = $("#hero-actions");
  actions.replaceChildren();
  // One discreet CTA. Google Maps + full contacts live only in About & Contact.
  actions.appendChild(el("a", { class: "btn btn--ghost", href: "#how-to-help", text: ui.btnHelp }));
  actions.appendChild(el("a", { class: "hero-link", href: "#about-contact", text: `${ui.navAbout} →` }));
  // Facebook stays a discreet text link, not a primary call-to-action.
  if (c.facebookUrl)
    actions.appendChild(
      el("a", { class: "hero-link", href: c.facebookUrl, target: "_blank", rel: "noopener" },
        [`${ui.findUsOn} ${ui.btnFacebook} →`])
    );

  /* ---- At a glance (quick facts) ---- */
  const glance = [
    { label: ui.glanceLocation, value: c.address },
    { label: ui.glanceHelp, value: t.helpShort },
    { label: ui.glanceVisit, value: t.visitShort }
  ].filter((g) => g.value);
  $("#glance-grid").replaceChildren(
    list(glance, (g) =>
      el("li", { class: "glance-card" }, [
        el("span", { class: "glance-card__label", text: g.label }),
        el("span", { class: "glance-card__value", text: g.value })
      ])
    )
  );

  /* ---- About ---- */
  setText("about-long", t.longDescription);
  setText("about-who", t.whoWeHelp);

  /* ---- How to help ---- */
  setText("help-intro", t.howToHelpIntro);
  $("#help-steps").replaceChildren(
    list(t.howToHelpSteps, (s) => el("li", {}, [el("h3", { text: s.title }), el("p", { text: s.text })]))
  );

  /* ---- Current needs ---- */
  setText("needs-title", t.currentNeedsTitle);
  $("#needs-list").replaceChildren(list(t.currentNeeds, (n) => el("li", { text: n })));
  setText("needs-note", t.needsNote);

  setText("accepted-title", t.acceptedTitle);
  $("#accepted-list").replaceChildren(list(t.acceptedDonations, (n) => el("li", { text: n })));
  setText("volunteer-title", t.volunteerTitle);
  setText("volunteer-info", t.volunteerInfo);

  /* ---- Visit & contact ---- */
  const info = $("#contact-info");
  info.replaceChildren();
  const addRow = (label, valueNode) => info.appendChild(el("div", {}, [el("dt", { text: label }), el("dd", {}, [valueNode])]));
  if (c.address) addRow(ui.lblAddress, document.createTextNode(c.address));
  if (t.openingHours) addRow(ui.lblHours, document.createTextNode(t.openingHours));
  if (c.phone) addRow(ui.lblPhone, el("a", { href: "tel:" + c.phone.replace(/\s+/g, ""), text: c.phone }));
  if (c.whatsapp) addRow(ui.lblWhatsapp, el("a", { href: "https://wa.me/" + c.whatsapp.replace(/[^\d]/g, ""), target: "_blank", rel: "noopener", text: c.whatsapp }));
  if (c.email) addRow(ui.lblEmail, el("a", { href: "mailto:" + c.email, text: c.email }));
  if (c.facebookUrl) addRow(ui.lblFacebook, el("a", { href: c.facebookUrl, target: "_blank", rel: "noopener", text: c.facebookUrl }));
  if (t.languages && t.languages.length) addRow(t.languagesLabel, document.createTextNode(t.languages.join(", ")));

  // Single, most-useful action inside the contact card.
  const cActions = $("#contact-actions");
  if (cActions) {
    cActions.replaceChildren();
    if (c.googleMapsUrl)
      cActions.appendChild(el("a", { class: "btn btn--primary", href: c.googleMapsUrl, target: "_blank", rel: "noopener", text: ui.btnMaps }));
  }

  /* ---- Photos (carousel) ---- */
  buildCarousel(c.photos || [], lang, ui);

  /* ---- Important notes ---- */
  setText("notes-title", t.importantNotesTitle);
  $("#notes-list").replaceChildren(list(t.importantNotes, (n) => el("li", { text: n })));
  setText("emergency-note", t.emergencyNote);

  /* ---- Footer (minimal identity line: name · year · note) ---- */
  const year = (c.lastUpdated && c.lastUpdated.slice(0, 4)) || String(new Date().getFullYear());
  setText("footer-line", `${t.name} · ${year} · ${ui.footerNote}`);

  /* ---- Language buttons state ---- */
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
  );

  injectJsonLd();
}

/* ------------------------- photo carousel ------------------------------- */
/* Builds a simple, accessible carousel from the photos list. Rebuilt on each
   language switch; index always resets to the first photo. Works with 1, 2 or
   many photos — controls are hidden when there is only one. */
function buildCarousel(photos, lang, ui) {
  const root = $("#carousel");
  const track = $("#carousel-track");
  const caption = $("#carousel-caption");
  const dots = $("#carousel-dots");
  const prevBtn = $("#carousel-prev");
  const nextBtn = $("#carousel-next");
  if (!root || !track) return;

  // No photos → hide the whole block gracefully.
  if (!photos.length) { root.hidden = true; return; }
  root.hidden = false;

  const total = photos.length;
  const single = total === 1;
  const label = (tpl, i) => (tpl || "{n}").replace("{n}", i + 1).replace("{total}", total);

  // Slides
  track.replaceChildren(
    list(photos, (p, i) =>
      el("figure", {
        class: "carousel__slide", role: "group", "aria-roledescription": "slide",
        "aria-label": label(ui.slideLabel, i)
      }, [
        el("img", { src: p.src, alt: altFor(p, lang), draggable: "false",
          loading: i === 0 ? "eager" : "lazy" })
      ])
    )
  );

  // Dots
  dots.replaceChildren(
    list(photos, (p, i) =>
      el("button", { type: "button", class: "carousel__dot", role: "tab",
        "aria-label": label(ui.goToPhoto, i) })
    )
  );

  // Static button labels + show/hide controls for the single-photo case.
  prevBtn.setAttribute("aria-label", ui.carouselPrev || "Previous photo");
  nextBtn.setAttribute("aria-label", ui.carouselNext || "Next photo");
  prevBtn.hidden = single;
  nextBtn.hidden = single;
  dots.hidden = single;

  const dotEls = Array.from(dots.children);

  let index = 0;
  function go(i) {
    index = (i + total) % total;
    track.style.transform = `translateX(${-index * 100}%)`;
    caption.textContent = captionFor(photos[index], lang);
    dotEls.forEach((d, k) => {
      const active = k === index;
      d.classList.toggle("is-active", active);
      d.setAttribute("aria-selected", String(active));
      d.tabIndex = active ? 0 : -1;
    });
  }

  prevBtn.onclick = () => go(index - 1);
  nextBtn.onclick = () => go(index + 1);
  dotEls.forEach((d, k) => (d.onclick = () => go(k)));

  // Keyboard arrows when focus is inside the carousel.
  root.onkeydown = (e) => {
    if (single) return;
    if (e.key === "ArrowLeft") go(index - 1);
    else if (e.key === "ArrowRight") go(index + 1);
  };

  // Touch swipe on mobile.
  const vp = $("#carousel-viewport");
  if (vp && !single) {
    let startX = 0, dx = 0, swiping = false;
    vp.ontouchstart = (e) => { startX = e.touches[0].clientX; dx = 0; swiping = true; };
    vp.ontouchmove = (e) => { if (swiping) dx = e.touches[0].clientX - startX; };
    vp.ontouchend = () => {
      if (swiping && Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      swiping = false;
    };
  }

  go(0);
}

/* Build an absolute URL from a relative asset path + siteUrl. */
function absoluteUrl(path) {
  if (!path) return SITE.config.siteUrl;
  if (/^https?:\/\//.test(path)) return path;
  try { return new URL(path, SITE.config.siteUrl).href; }
  catch { return path; }
}

/* Schema.org Organization data for search engines / Google Business. */
function injectJsonLd() {
  const c = SITE.config;
  const t = SITE.content.en; // structured data uses the English (canonical) text
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: t.name,
    description: t.shortDescription,
    url: c.siteUrl,
    address: { "@type": "PostalAddress", streetAddress: c.address, addressLocality: "Da Nang", addressCountry: "VN" }
  };
  if (c.phone) data.telephone = c.phone;
  if (c.email) data.email = c.email;
  if (c.ogImage) data.image = absoluteUrl(c.ogImage);
  if (c.facebookUrl) data.sameAs = [c.facebookUrl];
  if (c.googleMapsUrl) data.hasMap = c.googleMapsUrl;
  $("#json-ld").textContent = JSON.stringify(data, null, 2);
}

/* --------------------------- navbar behaviour --------------------------- */
function setupNavbar() {
  const nav = $(".nav");
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");
  if (nav && toggle && menu) {
    const closeMenu = () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Clicking a section link closes the menu. Switching language keeps it
    // open so the user immediately sees the translated links.
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeMenu();
    });
    // Close on Escape for keyboard users.
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  }

  // Highlight the link of the section currently in view.
  const links = Array.from(document.querySelectorAll(".nav__link"));
  if ("IntersectionObserver" in window && links.length) {
    const byId = new Map(links.map((l) => [l.getAttribute("data-nav"), l]));
    const sections = links
      .map((l) => document.getElementById(l.getAttribute("data-nav")))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("is-active"));
            const active = byId.get(entry.target.id);
            if (active) active.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }
}

/* --------------------------- back-to-top button ------------------------- */
function setupBackToTop() {
  const btn = $("#back-to-top");
  if (!btn) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const onScroll = () => {
    const show = window.scrollY > 400;
    btn.hidden = !show;
    btn.classList.toggle("is-visible", show);
  };
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
  );
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ------------------------------ init ------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) =>
    btn.addEventListener("click", () => render(btn.dataset.lang))
  );
  render(currentLang);
  setupNavbar();
  setupBackToTop();
});
