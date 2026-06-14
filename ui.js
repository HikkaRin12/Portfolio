const UI = {
  typed() {
    const titles = portfolioData.hero.typedTitles;
    const el = document.querySelector(".typed-heading");
    let tIdx = 0, cIdx = 0, isDel = false;

    function loop() {
      const curr = titles[tIdx];
      el.textContent = "> " + curr.slice(0, isDel ? --cIdx : ++cIdx) + (cIdx === curr.length && !isDel ? " " : "_");
      
      let speed = isDel ? 40 : 80;
      if (!isDel && cIdx === curr.length) { speed = 2000; isDel = true; }
      else if (isDel && cIdx === 0) { isDel = false; tIdx = (tIdx + 1) % titles.length; speed = 500; }
      
      setTimeout(loop, speed);
    }
    loop();
  },

  menuClose() {
    const toggle = document.getElementById("menu-toggle");
    document.querySelectorAll(".menu a").forEach(l => l.addEventListener("click", () => toggle.checked = false));
  }
};