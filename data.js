const portfolioData = {
  currentLanguage: "en",
  languages: {
    en: {
      nav: {
        logo: { src: "logo.jpg", alt: "Adil", href: "https://github.com/HikkaRin12" },
        links: [
          { label: "Overview", href: "#home" },
          { label: "Repositories", href: "#projects" },
          { label: "Tech Stack", href: "#skills" },
          { label: "Contact", href: "#contact" },
        ],
      },
      hero: {
        photo: { src: "Adil-photo.jpg", alt: "Adil Baizhanov" },
        badge: "Available for internships",
        typedTitles: [
          "Full-stack developer.",
          "JavaScript & SPA developer.",
          "Background in database security.",
          "Building clean, minimalist web experiences.",
        ],
        subtitle: "Junior Developer / UI Designer / Focused on clean code and interactive web experiences.",
        cta: { label: "Follow Me", href: "https://github.com/HikkaRin12" },
      },
      skills: {
        sectionTitle: "Language Stats & Tools",
        items: [
          { label: "JavaScript (ES6+)", learning: true },
          { label: "Vue.js", learning: true },
          { label: "HTML5 / CSS3", learning: false },
          { label: "Python", learning: true },
          { label: "Git / GitHub", learning: false },
          { label: "Figma", learning: false },
          { label: "Firebase", learning: false },
          { label: "Node.js", learning: true },
        ],
      },
      projects: {
        sectionTitle: "Pinned Repositories",
        username: "HikkaRin12",
        viewSourceLabel: "view_source()",
        fallback: [
          {
            title: "Dota2_FinalProject",
            language: "JavaScript",
            description: "Dota 2 Heroes Dashboard — 120+ heroes via OpenDota API. Filter by attribute, search, and explore full hero details.",
            link: { label: "Live Demo", href: "https://dota2-final-project.vercel.app/" },
          },
          {
            title: "Control-Nexus",
            language: "JavaScript",
            description: "Personal finance dashboard for tracking debts, daily expenses and weekly reports. Google Auth + Firebase sync.",
            link: { label: "Live App", href: "https://my-control-dashboard.web.app" },
          },
          {
            title: "Portfolio",
            language: "HTML",
            description: "This site. Modular vanilla JS architecture, GitHub API integration, AOS animations and dynamic rendering.",
            link: { label: "Source", href: "https://github.com/HikkaRin12/Portfolio" },
          },
        ],
      },
      footer: {
        heading: "Let's Connect!",
        tagline: "I'm ready to bring my passion for coding and design to a dynamic team. Whether you have an opportunity or just want to say hi, feel free to reach out!",
        email: "operas444@gmail.com",
        copyright: "© 2026 Adil Baizhanov.",
      },
    },
    ru: {
      nav: {
        logo: { src: "logo.jpg", alt: "Адиль", href: "https://github.com/HikkaRin12" },
        links: [
          { label: "Обзор", href: "#home" },
          { label: "Репозитории", href: "#projects" },
          { label: "Технологии", href: "#skills" },
          { label: "Контакты", href: "#contact" },
        ],
      },
      hero: {
        photo: { src: "Adil-photo.jpg", alt: "Адиль Баизханов" },
        badge: "Доступен для стажировок",
        typedTitles: [
          "Full-stack разработчик.",
          "JavaScript и SPA разработчик.",
          "Опыт в безопасности баз данных.",
          "Создаю чистые и минималистичные веб-решения.",
        ],
        subtitle: "Junior Developer / UI Designer / Создаю чистый код и интерактивные веб-интерфейсы.",
        cta: { label: "Подписаться", href: "https://github.com/HikkaRin12" },
      },
      skills: {
        sectionTitle: "Языки, инструменты и навыки",
        items: [
          { label: "JavaScript (ES6+)", learning: true },
          { label: "Vue.js", learning: true },
          { label: "HTML5 / CSS3", learning: false },
          { label: "Python", learning: true },
          { label: "Git / GitHub", learning: false },
          { label: "Figma", learning: false },
          { label: "Firebase", learning: false },
          { label: "Node.js", learning: true },
        ],
      },
      projects: {
        sectionTitle: "Закреплённые репозитории",
        username: "HikkaRin12",
        viewSourceLabel: "посмотреть_код()",
        fallback: [
          {
            title: "Dota2_FinalProject",
            language: "JavaScript",
            description: "Панель героев Dota 2 — более 120 героев через OpenDota API. Фильтрация по атрибутам, поиск и подробную информацию.",
            link: { label: "Демо", href: "https://dota2-final-project.vercel.app/" },
          },
          {
            title: "Control-Nexus",
            language: "JavaScript",
            description: "Личный дашборд расходов, долгов и еженедельных отчётов. Авторизация через Google и синхронизация Firebase.",
            link: { label: "Приложение", href: "https://my-control-dashboard.web.app" },
          },
          {
            title: "Portfolio",
            language: "HTML",
            description: "Этот сайт. Модульная архитектура на vanilla JS, интеграция GitHub API, анимации AOS и динамический рендеринг.",
            link: { label: "Исходник", href: "https://github.com/HikkaRin12/Portfolio" },
          },
        ],
      },
      footer: {
        heading: "Давайте свяжемся!",
        tagline: "Я готов принести свою страсть к коду и дизайну в динамичную команду. Если у вас есть возможность или просто хочется поздороваться — пишите.",
        email: "operas444@gmail.com",
        copyright: "© 2026 Адиль Баизханов.",
      },
    },
    cs: {
      nav: {
        logo: { src: "logo.jpg", alt: "Adil", href: "https://github.com/HikkaRin12" },
        links: [
          { label: "Přehled", href: "#home" },
          { label: "Repozitáře", href: "#projects" },
          { label: "Technologie", href: "#skills" },
          { label: "Kontakt", href: "#contact" },
        ],
      },
      hero: {
        photo: { src: "Adil-photo.jpg", alt: "Adil Baizhanov" },
        badge: "K dispozici pro stáže",
        typedTitles: [
          "Full-stack vývojář.",
          "JavaScript a SPA vývojář.",
          "Zkušenosti v bezpečnosti databází.",
          "Tvořím clean a minimalistická webová řešení.",
        ],
        subtitle: "Junior Developer / UI Designer / Zaměřuji se na čistý kód a interaktivní webové zážitky.",
        cta: { label: "Sledovat", href: "https://github.com/HikkaRin12" },
      },
      skills: {
        sectionTitle: "Jazyky, nástroje a dovednosti",
        items: [
          { label: "JavaScript (ES6+)", learning: true },
          { label: "Vue.js", learning: true },
          { label: "HTML5 / CSS3", learning: false },
          { label: "Python", learning: true },
          { label: "Git / GitHub", learning: false },
          { label: "Figma", learning: false },
          { label: "Firebase", learning: false },
          { label: "Node.js", learning: true },
        ],
      },
      projects: {
        sectionTitle: "Připnuté repozitáře",
        username: "HikkaRin12",
        viewSourceLabel: "zobrazit_kód()",
        fallback: [
          {
            title: "Dota2_FinalProject",
            language: "JavaScript",
            description: "Dashboard hrdinů Dota 2 — více než 120 hrdinů přes OpenDota API. Filtrování podle atributů, vyhledávání a podrobnosti.",
            link: { label: "Demo", href: "https://dota2-final-project.vercel.app/" },
          },
          {
            title: "Control-Nexus",
            language: "JavaScript",
            description: "Osobní dashboard financí, dluhů a týdenních reportů. Google autentizace a synchronizace Firebase.",
            link: { label: "Aplikace", href: "https://my-control-dashboard.web.app" },
          },
          {
            title: "Portfolio",
            language: "HTML",
            description: "Tato stránka. Modulární architektura vanilla JS, integrace GitHub API, animace AOS a dynamické vykreslování.",
            link: { label: "Zdroj", href: "https://github.com/HikkaRin12/Portfolio" },
          },
        ],
      },
      footer: {
        heading: "Spojme se!",
        tagline: "Jsem připravený přinést svou vášeň pro kódování a design do dynamického týmu. Pokud máte příležitost nebo jen chcete říct ahoj, napište mi.",
        email: "operas444@gmail.com",
        copyright: "© 2026 Adil Baizhanov.",
      },
    },
  },
  setLanguage(lang) {
    this.currentLanguage = this.languages[lang] ? lang : "en";
  },
  getContent(lang = this.currentLanguage) {
    return this.languages[lang] || this.languages.en;
  },
};
