/* =============================================================================
   data.js  —  ALL editable information for ONE organization.
   -----------------------------------------------------------------------------
   To reuse this template for another association, you normally only need to
   edit THIS file (and replace the photos in /images/).

   STRUCTURE
   - SITE.config   : facts that are the SAME in every language
                     (address, phone, links, photos, dates...).
   - SITE.content  : text that must be TRANSLATED. Each language (en / vi)
                     holds the same set of keys.

   Keep both languages in sync: every key present in `en` should also exist
   in `vi`. If a Vietnamese translation is missing, the English text is used
   as a fallback automatically (see script.js).

   This is FICTIONAL EXAMPLE DATA. Replace it with real, verified information.
   ========================================================================== */

const SITE = {
  /* ------------------------------------------------------------------ */
  /* 1) CONFIG — language-independent facts                              */
  /* ------------------------------------------------------------------ */
  config: {
    // Default language shown on first load: "en" or "vi"
    defaultLang: "en",

    // Public website URL (used for SEO / Open Graph / JSON-LD).
    // Update this once you know your final domain.
    siteUrl: "https://danang-association-template.pages.dev",

    // Contact details. Leave a value as "" (empty string) to hide its button.
    address: "Da Nang, Vietnam",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Da+Nang+Vietnam",
    phone: "+84 000 000 000",          // displayed + used for tel: link
    whatsapp: "+84000000000",          // digits only (no spaces) for wa.me link, or ""
    email: "contact@example.org",      // or ""
    facebookUrl: "",                   // full https URL, or "" to hide

    // Date of the last manual update of this page (YYYY-MM-DD).
    lastUpdated: "2026-06-09",

    // Open Graph / favicon assets (relative paths inside /images/).
    ogImage: "images/og-image.svg",
    favicon: "images/favicon.svg",

    // Theme accent (must match --color-primary in styles.css if you change it).
    themeColor: "#3f6f5e",

    // Photo carousel. Use neutral images (façade, empty common room, donated
    // goods, adult team with consent). DO NOT use close-up / recognizable
    // photos of children by default.
    //   src     : path to the image (relative to index.html)
    //   alt     : accessibility text, translated (en / vi). Required.
    //   caption : visible caption under the photo, translated (en / vi).
    //             Optional — if omitted, the `alt` text is shown instead.
    photos: [
      {
        src: "images/hero.svg",
        alt: { en: "Front of the community center building", vi: "Mặt tiền của trung tâm cộng đồng" },
        caption: { en: "Our building — easy to find from the street", vi: "Tòa nhà của chúng tôi — dễ tìm từ ngoài đường" }
      },
      {
        src: "images/common-room.svg",
        alt: { en: "Empty common room used for activities", vi: "Phòng sinh hoạt chung" },
        caption: { en: "The common room where activities take place", vi: "Phòng sinh hoạt chung nơi diễn ra các hoạt động" }
      },
      {
        src: "images/donations.svg",
        alt: { en: "Donated supplies: rice, milk and hygiene products", vi: "Quà tặng: gạo, sữa và đồ vệ sinh" },
        caption: { en: "Donated supplies: rice, milk and hygiene products", vi: "Quà tặng: gạo, sữa và đồ vệ sinh" }
      },
      {
        src: "images/team.svg",
        alt: { en: "Adult volunteers and staff (shared with consent)", vi: "Tình nguyện viên và nhân viên (đã được đồng ý)" },
        caption: { en: "Our small team of adult volunteers (shared with consent)", vi: "Nhóm tình nguyện viên người lớn của chúng tôi (đã được đồng ý)" }
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* 2) CONTENT — translated text (English + Vietnamese)                 */
  /* ------------------------------------------------------------------ */
  content: {
    en: {
      name: "Example Community Center Da Nang",
      subtitle: "A local support center for families and children in Da Nang",
      shortDescription:
        "A small local center supporting nearby families with food, basic supplies and a safe place for children.",
      longDescription:
        "Example Community Center is a small, locally run center in Da Nang. It offers everyday support to families facing hardship: shared meals, basic supplies, and a calm space where children can spend time after school. It is kept running by a small adult team and a few volunteers.",
      whoWeHelp:
        "Mostly local families with young children, single-parent households, and elderly neighbors who need a hand from time to time. We're a small neighborhood structure, not a large charity.",

      // Short value shown in the "At a glance" cards
      helpShort: "Food, hygiene items, school supplies",
      visitShort: "By appointment",

      // How to help — the single place for practical advice
      howToHelpIntro:
        "Before bringing donations, send a quick message so the team can confirm what is useful.",
      howToHelpSteps: [
        { title: "Check current needs", text: "See what's useful right now." },
        { title: "Bring practical items", text: "Everyday essentials, in reasonable amounts." },
        { title: "Respect privacy", text: "Be discreet around families and children." }
      ],

      // Current needs
      currentNeedsTitle: "Current needs",
      currentNeeds: [
        "Rice",
        "Milk (powdered / UHT)",
        "Diapers",
        "Hygiene products (soap, toothpaste)",
        "School supplies (notebooks, pens)"
      ],

      // Donations detail (kept compact)
      acceptedTitle: "We can usually accept",
      acceptedDonations: [
        "Non-perishable food (rice, noodles, canned food)",
        "Powdered or UHT milk",
        "Diapers and baby care items",
        "Soap, toothpaste and hygiene products",
        "New or clean school supplies"
      ],
      // Volunteer
      volunteerTitle: "Volunteering",
      volunteerInfo:
        "We occasionally welcome volunteers for specific, agreed tasks — like sorting donations or helping with simple activities.",

      // Visit & contact
      languagesLabel: "Languages spoken",
      languages: ["Vietnamese", "Basic English"],
      openingHours: "Daytime",

      // Notes — privacy & safety only (not a repeat of visit/donation advice)
      importantNotesTitle: "A few gentle notes",
      importantNotes: [
        "Please do not share children's photos without written permission.",
        "Only bring medicines if the organization specifically asks."
      ]
    },

    vi: {
      name: "Trung tâm Cộng đồng Ví dụ Đà Nẵng",
      subtitle: "Một trung tâm hỗ trợ địa phương cho các gia đình và trẻ em tại Đà Nẵng",
      shortDescription:
        "Một trung tâm nhỏ tại địa phương hỗ trợ các gia đình lân cận bằng thực phẩm, nhu yếu phẩm cơ bản và một nơi an toàn cho trẻ em.",
      longDescription:
        "Trung tâm Cộng đồng Ví dụ là một trung tâm nhỏ do người dân địa phương điều hành tại Đà Nẵng. Trung tâm hỗ trợ hằng ngày cho các gia đình gặp khó khăn: bữa ăn chung, nhu yếu phẩm cơ bản và một không gian yên tĩnh để trẻ em sinh hoạt sau giờ học. Trung tâm được duy trì bởi một nhóm nhỏ người lớn và vài tình nguyện viên.",
      whoWeHelp:
        "Chủ yếu là các gia đình địa phương có con nhỏ, hộ đơn thân và người cao tuổi cần giúp đỡ thỉnh thoảng. Chúng tôi là một cơ sở nhỏ trong khu phố, không phải tổ chức từ thiện lớn.",

      helpShort: "Thực phẩm, đồ vệ sinh, đồ dùng học tập",
      visitShort: "Theo lịch hẹn",

      howToHelpIntro:
        "Trước khi mang quà tặng, hãy nhắn một tin ngắn để đội ngũ xác nhận điều gì hữu ích.",
      howToHelpSteps: [
        { title: "Xem nhu cầu hiện tại", text: "Xem điều gì đang hữu ích nhất." },
        { title: "Mang đồ thiết thực", text: "Đồ dùng hằng ngày, với số lượng hợp lý." },
        { title: "Tôn trọng riêng tư", text: "Hãy tế nhị với các gia đình và trẻ em." }
      ],

      currentNeedsTitle: "Nhu cầu hiện tại",
      currentNeeds: [
        "Gạo",
        "Sữa (bột / tiệt trùng)",
        "Tã / bỉm",
        "Đồ vệ sinh (xà phòng, kem đánh răng)",
        "Đồ dùng học tập (vở, bút)"
      ],

      acceptedTitle: "Chúng tôi thường có thể nhận",
      acceptedDonations: [
        "Thực phẩm khô (gạo, mì, đồ hộp)",
        "Sữa bột hoặc sữa tiệt trùng",
        "Tã/bỉm và đồ chăm sóc em bé",
        "Xà phòng, kem đánh răng và đồ vệ sinh",
        "Đồ dùng học tập mới hoặc sạch sẽ"
      ],
      volunteerTitle: "Tình nguyện",
      volunteerInfo:
        "Đôi khi chúng tôi tiếp nhận tình nguyện viên cho những công việc cụ thể đã thống nhất — như phân loại quà tặng hoặc hỗ trợ các hoạt động đơn giản.",

      languagesLabel: "Ngôn ngữ sử dụng",
      languages: ["Tiếng Việt", "Tiếng Anh cơ bản"],
      openingHours: "Ban ngày",

      importantNotesTitle: "Vài lưu ý nhẹ nhàng",
      importantNotes: [
        "Vui lòng không chia sẻ ảnh trẻ em khi chưa có sự cho phép bằng văn bản.",
        "Chỉ mang thuốc nếu tổ chức yêu cầu cụ thể."
      ]
    }
  }
};
