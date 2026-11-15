document.addEventListener("DOMContentLoaded", () => {
  // 1. Etkileşim: Karanlık Mod (Dark Mode) ve LocalStorage Kalıcılığı
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    });
  }

  // 2. Etkileşim: Mobil Gezinti Menüsü (Hamburger Menü)
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 3 & 4. Etkileşim: Proje Kategori Filtreleme ve Canlı Arama
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("project-search");
  const projectCards = document.querySelectorAll(".project-card");

  function filterProjects() {
    const activeBtn = document.querySelector(".filter-btn.active");
    const category = activeBtn ? activeBtn.dataset.filter : "all";
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    projectCards.forEach((card) => {
      const cardCat = card.dataset.category;
      const cardText = card.textContent.toLowerCase();
      const matchesCat = category === "all" || cardCat === category;
      const matchesSearch = cardText.includes(query);
      card.style.display = matchesCat && matchesSearch ? "block" : "none";
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", filterProjects);
  }

  // 5. Etkileşim: İletişim Formu Doğrulama ve Canlı Geri Bildirim Mesajı
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");
      const feedback = document.getElementById("form-feedback");

      document.getElementById("name-error").textContent = "";
      document.getElementById("email-error").textContent = "";
      document.getElementById("subject-error").textContent = "";
      document.getElementById("message-error").textContent = "";
      feedback.textContent = "";

      if (name.value.trim().length < 3) {
        document.getElementById("name-error").textContent = "Lütfen en az 3 karakterlik ad-soyad giriniz.";
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        document.getElementById("email-error").textContent = "Lütfen geçerli bir e-posta adresi giriniz.";
        isValid = false;
      }

      if (!subject.value) {
        document.getElementById("subject-error").textContent = "Lütfen bir konu seçiniz.";
        isValid = false;
      }

      if (message.value.trim().length < 15) {
        document.getElementById("message-error").textContent = "Mesajınız en az 15 karakter olmalıdır.";
        isValid = false;
      }

      if (isValid) {
        feedback.textContent = `Teşekkürler ${name.value.trim()}, mesajınız başarıyla doğrulandı ve alındı!`;
        contactForm.reset();
      }
    });
  }
});