const UI = {
  typingTimer: null,

  typed(lang = portfolioData.currentLanguage) {
    const titles = portfolioData.getContent(lang).hero.typedTitles;
    const el = document.querySelector(".typed-heading");

    if (!el || !Array.isArray(titles) || !titles.length) return;

    if (this.typingTimer) {
      window.clearTimeout(this.typingTimer);
    }

    let tIdx = 0, cIdx = 0, isDel = false;

    function loop() {
      const curr = titles[tIdx];
      el.textContent = "> " + curr.slice(0, isDel ? --cIdx : ++cIdx) + (cIdx === curr.length && !isDel ? " " : "_");

      let speed = isDel ? 40 : 80;
      if (!isDel && cIdx === curr.length) { speed = 2000; isDel = true; }
      else if (isDel && cIdx === 0) { isDel = false; tIdx = (tIdx + 1) % titles.length; speed = 500; }

      UI.typingTimer = window.setTimeout(loop, speed);
    }
    loop();
  },

  menuClose() {
    const toggle = document.getElementById("menu-toggle");
    const links = document.querySelectorAll(".menu a");

    if (!toggle || !links.length) return;
    links.forEach((l) =>
      l.addEventListener("click", () => { toggle.checked = false; })
    );
  },

  languageSwitch(onChange) {
    const buttons = document.querySelectorAll(".lang-btn");
    if (!buttons.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        if (!lang) return;

        portfolioData.setLanguage(lang);
        buttons.forEach((btn) => btn.classList.toggle("active", btn === button));
        if (typeof onChange === "function") onChange(lang);
      });
    });
  },

  scrollProgress() {
    const bar = document.getElementById("scrollBar");
    if (!bar) return;

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? (scrolled / total * 100) + "%" : "0%";
    }, { passive: true });
  },

  activeNav() {
    if (typeof window.IntersectionObserver === "undefined") return;

    const sections = document.querySelectorAll("section[id], header[id]");
    const links = document.querySelectorAll(".nav-link");

    if (!sections.length || !links.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    }, { threshold: 0.4 });

    sections.forEach((s) => obs.observe(s));
  },
};