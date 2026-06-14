const portfolioData = {
  nav: {
    logo: {
      src: "logo.jpg", // Твой геометрический аватар
      alt: "Hikka",
      href: "https://github.com/HikkaRin12",
    },
    links: [
      { label: "Overview", href: "#home" },
      { label: "Repositories", href: "#projects" },
      { label: "Tech Stack", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    photo: { src: "Adil-photo.jpg", alt: "Adil Baizhanov" }, // Твое фото в поле
    typedTitles: [
      "Full-stack Dreamer.",
      "JavaScript Ninja in training.",
      "Vue.js Enthusiast.",
      "Building the future, one commit at a time.",
    ],
    subtitle: "Junior Developer / UI Designer / Anime fan. Focused on clean code and interactive web experiences. Available for internships.",
    cta: { label: "Follow Me", href: "#contact" },
  },

  skills: {
    sectionTitle: "Language Stats & Tools",
    items: [
      { label: "JavaScript (ES6+)", learning: false },
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
    fallback: [
      {
        title: "Control-Nexus-Firebase",
        description: "A real-time management dashboard. High performance, secure data sync.",
        link: { label: "Main", href: "https://my-control-dashboard.web.app" },
      },
      {
        title: "Hikka-Genesis-Portfolio",
        description: "My personal anime-styled hub. Modular JS architecture.",
        link: { label: "Source", href: "https://github.com/HikkaRin12" },
      },
      {
        title: "Future-Core-App",
        description: "Secret project involving Python and AI-integration. Loading...",
        link: { label: "Private", href: "#" },
      },
    ],
  },

  footer: {
    heading: "Initialize Connection, Senpai!",
    tagline: "Currently open to strategic partnerships, collaborations, and internship roles.",
    email: "operas444@gmail.com",
    copyright: "© 2026 Hikka. Crafted with ❤️ and JS.",
  },
};