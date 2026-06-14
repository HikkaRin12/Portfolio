const App = {
  async init() {
    Render.nav();
    Render.hero();
    Render.skills();
    Render.footer();

    UI.typed();
    UI.menuClose();

    Render.projectsSkeleton();
    const repos = await GitHub.getRepos();
    Render.projects(repos);

    AOS.init({ duration: 800, once: true });
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());