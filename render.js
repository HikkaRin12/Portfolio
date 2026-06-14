const Render = {
  nav() {
    const { logo, links } = portfolioData.nav;
    document.querySelector(".logo a").href = logo.href;
    document.querySelector(".logo img").src = logo.src;
    document.querySelector(".logo img").alt = logo.alt;
    document.querySelector(".menu").innerHTML = links
      .map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
  },

  hero() {
    const { photo, subtitle, cta } = portfolioData.hero;
    document.querySelector(".profile-img").src = photo.src;
    document.querySelector(".subtitle").textContent = subtitle;
    const btn = document.querySelector(".btn-primary");
    btn.textContent = cta.label;
    btn.href = cta.href;
  },

  skills() {
    const { sectionTitle, items } = portfolioData.skills;
    document.querySelector("#skills .section-title").textContent = sectionTitle;
    document.querySelector(".skills-grid").innerHTML = items
      .map(s => `<div class="skill-components ${s.learning ? 'learning' : ''}">${s.label}</div>`).join("");
  },

  projects(items) {
    document.querySelector("#projects .section-title").textContent = portfolioData.projects.sectionTitle;
    document.querySelector(".project-grid").innerHTML = items
      .map(p => `
        <div class="project-components" data-aos="fade-up">
          <h3>repo: ${p.name || p.title}</h3>
          <p>${p.description || "Experimental digital architecture. Inspect for deployment matrix."}</p>
          <a href="${p.html_url || p.link.href}" target="_blank" class="project-link">view_source() →</a>
        </div>
      `).join("");
  },

  projectsSkeleton() {
    document.querySelector(".project-grid").innerHTML = Array(3)
      .fill(`<div class="project-components skeleton" style="height:180px; opacity:0.1; background:#fff;"></div>`)
      .join("");
  },

  footer() {
    const { heading, tagline, email, copyright } = portfolioData.footer;
    document.querySelector(".footer-content").innerHTML = `
      <h2>${heading}</h2>
      <p>${tagline}</p>
      <p><a href="mailto:${email}">${email}</a></p>
      <div style="margin-top:30px; opacity:0.5; font-size:0.8rem; font-family: 'JetBrains Mono'">${copyright}</div>
    `;
  }
};