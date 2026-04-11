const PortfolioApp = {
 state: {
        isTransformed: false,
        magicCount: 0
    },

    ui: {
        title: document.querySelector('.hero__title'),
        btn: document.getElementById('js-test-btn'),
        heroImg: document.querySelector('.hero__img')
    },

    // Инициализация
    init() {
        AOS.init({ duration: 1000, once: true });
        this.addEventListeners();
        console.log("App initialized successfully.");
    },

    // Обработка событий
    addEventListeners() {
        this.ui.btn.addEventListener('click', () => this.toggleMagicEffect());
    },

    // Основная логика (Циклы + Условия)
    toggleMagicEffect() {
        this.state.isTransformed = !this.state.isTransformed;
        this.state.magicCount++;

        if (this.state.isTransformed) {
            this.ui.title.textContent = "Code is Magic! ✨";
            this.ui.title.style.color = "var(--color-accent)";
            this.runConsoleDemo();
        } else {
            this.ui.title.textContent = "Junior Web Developer";
            this.ui.title.style.color = "white";
        }
    },

    runConsoleDemo() {
        console.log(`--- Magic Sequence #${this.state.magicCount} ---`);
        
        // Твой цикл for
        for (let i = 1; i <= 3; i++) {
            if (i === 2) continue; // Пропускаем цифру 2
            console.log(`Processing layer ${i}...`);
        }
        
        console.log("Status: Fully Transformed");
    }
};

// Запуск приложения
PortfolioApp.init();