const Render = {
  nav(lang = portfolioData.currentLanguage) {
    const content = portfolioData.getContent(lang);
    const { logo, links } = content.nav;
    const logoLink = document.querySelector(".logo a");
    const logoImg = document.querySelector(".logo img");
    const menu = document.querySelector(".menu");

    if (logoLink) logoLink.href = logo.href;
    if (logoImg) {
      logoImg.src = logo.src;
      logoImg.alt = logo.alt;
    }
    if (menu) {
      menu.innerHTML = links
        .map((l) => `<li><a href="${l.href}" class="nav-link">${l.label}</a></li>`)
        .join("");
    }
  },

  hero(lang = portfolioData.currentLanguage) {
    const content = portfolioData.getContent(lang);
    const { photo, subtitle, cta, badge } = content.hero;
    const img = document.querySelector(".profile-img");
    const badgeLabel = document.querySelector(".badge-label");
    const subtitleEl = document.querySelector(".subtitle");
    const btn = document.querySelector(".btn-primary");

    if (img) {
      img.src = photo.src;
      img.alt = photo.alt;
    }
    if (badgeLabel) badgeLabel.textContent = badge;
    if (subtitleEl) subtitleEl.textContent = subtitle;
    if (btn) {
      btn.textContent = cta.label;
      btn.href = cta.href;
    }
  },

  skills(lang = portfolioData.currentLanguage) {
    const content = portfolioData.getContent(lang);
    const { sectionTitle, items } = content.skills;
    const title = document.querySelector("#skills .section-title");
    const grid = document.querySelector(".skills-grid");

    if (title) title.textContent = sectionTitle;
    if (!grid) return;

    grid.innerHTML = items
      .map((s, i) => `
        <div
          class="skill-tag ${s.learning ? "learning" : ""}"
          data-aos="zoom-in"
          data-aos-delay="${(i + 1) * 70}"
        >${s.label}</div>
      `).join("");
  },

  projects(items, lang = portfolioData.currentLanguage) {
    const content = portfolioData.getContent(lang);
    const title = document.querySelector("#projects .section-title");
    const grid = document.querySelector(".project-grid");

    if (title) title.textContent = content.projects.sectionTitle;
    if (!grid) return;

    const langColors = {
      JavaScript: "#f1e05a",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      Vue: "#41b883",
    };

    grid.innerHTML = items
      .map((p, i) => {
        const lang = p.language || null;
        const langDot = lang
          ? `<span class="lang-dot" style="background:${langColors[lang] || "#8b949e"}"></span><span class="lang-name">${lang}</span>`
          : "";
        return `
          <div class="project-card" data-aos="fade-up" data-aos-delay="${(i + 1) * 100}">
            <div class="card-top">
              <svg class="repo-icon" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
              </svg>
              <h3 class="card-title">${p.name || p.title}</h3>
            </div>
            <p class="card-desc">${p.description || "Experimental digital architecture. Inspect for deployment matrix."}</p>
            <div class="card-footer">
              <div class="card-lang">${langDot}</div>
              <a href="${p.html_url || p.link?.href || "#"}" target="_blank" class="card-link">
                view_source() <span class="arrow">→</span>
              </a>
            </div>
          </div>
        `;
      }).join("");
  },

  projectsSkeleton() {
    const grid = document.querySelector(".project-grid");
    if (!grid) return;
    grid.innerHTML = Array(3)
      .fill(`<div class="project-card skeleton"></div>`)
      .join("");
  },

  footer(lang = portfolioData.currentLanguage) {
    const content = portfolioData.getContent(lang);
    const { heading, tagline, email, copyright } = content.footer;
    const footerContent = document.querySelector(".footer-content");
    if (!footerContent) return;
    footerContent.innerHTML = `
      <h2 data-aos="fade-up">${heading}</h2>
      <p>${tagline}</p>
      <a href="mailto:${email}" class="footer-email">${email}</a>
      <div class="copyright">${copyright}</div>
    `;
  }
};