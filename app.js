const App = {
  async init() {
    this.renderApp();
    UI.languageSwitch((lang) => this.renderApp(lang));

    if (window.AOS) {
      AOS.init({ duration: 800, once: true, offset: 60 });
    }
  },

  async renderApp(lang = portfolioData.currentLanguage) {
    Render.nav(lang);
    Render.hero(lang);
    Render.skills(lang);
    Render.footer(lang);

    UI.typed(lang);
    UI.menuClose();
    UI.scrollProgress();
    UI.activeNav();

    Render.projectsSkeleton();

    try {
      const repos = await GitHub.getRepos();
      Render.projects(repos, lang);
    } catch (error) {
      console.error("Projects rendering failed.", error);
      Render.projects(portfolioData.getContent(lang).projects.fallback, lang);
    }

    if (window.AOS) {
      AOS.refresh();
    }
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());