const PortfolioApp = {
  // ─── Рендер: Навигация
  renderNav() {
    const { logo, links } = portfolioData.nav;

    document.querySelector(".logo a").href = logo.href;
    document.querySelector(".logo img").src  = logo.src;
    document.querySelector(".logo img").alt  = logo.alt;

    const menu = document.querySelector(".menu");
    menu.innerHTML = links
      .map(({ label, href }) => `<li><a href="${href}">${label}</a></li>`)
      .join("");
  },

  // ─── Рендер: Hero 
  renderHero() {
    const { photo, title, subtitle, cta } = portfolioData.hero;

    const img = document.querySelector(".profile-img");
    img.src = photo.src;
    img.alt = photo.alt;

    document.querySelector("#home h1").textContent = title;
    document.querySelector("#home p").textContent  = subtitle;

    const btn = document.querySelector("#home .btn");
    btn.textContent = cta.label;
    btn.href        = cta.href;
  },

  // ─── Рендер: Skills
  renderSkills() {
    const { sectionTitle, items } = portfolioData.skills;

    document.querySelector("#skills .section-title").textContent = sectionTitle;

    const grid = document.querySelector(".skills-grid");
    grid.innerHTML = items
      .map(
        ({ label, learning }, i) => `
        <div
          class="skill-components${learning ? " learning" : ""}"
          data-aos="zoom-in"
          data-aos-delay="${(i + 1) * 100}"
        >${label}</div>`
      )
      .join("");
  },

  // ─── Рендер: Projects
  renderProjects() {
    const { sectionTitle, items } = portfolioData.projects;

    document.querySelector("#projects .section-title").textContent = sectionTitle;

    const grid = document.querySelector(".project-grid");
    grid.innerHTML = items
      .map(
        ({ title, description, link }, i) => `
        <div class="project-components" data-aos="fade-up" data-aos-delay="${(i + 1) * 100}">
          <h3>${title}</h3>
          <p>${description}</p>
          <a href="${link.href}" target="_blank" class="project-link">${link.label}</a>
        </div>`
      )
      .join("");
  },

  // ─── Рендер: Footer
  renderFooter() {
    const { heading, tagline, email, copyright } = portfolioData.footer;

    const footer = document.querySelector("footer .container");
    footer.innerHTML = `
      <h2 data-aos="fade-up">${heading}</h2>
      <p>${tagline}</p>
      <p>Email: <a href="mailto:${email}">${email}</a></p>
      <div class="copyright"><p>${copyright}</p></div>
    `;
  },

  //  Закрытие мобильного меню при клике на пункт 
  initMenuClose() {
    const toggle = document.getElementById("menu-toggle");
    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.checked = false;
      });
    });
  },

  // ─── Инициализация 
  init() {
    this.renderNav();
    this.renderHero();
    this.renderSkills();
    this.renderProjects();
    this.renderFooter();
    this.initMenuClose();

    AOS.init({ duration: 800, once: true });
    console.log("Portfolio initialized.");
  },
};

document.addEventListener("DOMContentLoaded", () => PortfolioApp.init());