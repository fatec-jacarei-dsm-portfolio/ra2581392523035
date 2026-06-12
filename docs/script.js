document.addEventListener("DOMContentLoaded", () => {
  // Lógica de alternância de Tema
  const themeBtn = document.getElementById("theme-btn");
  const appShell = document.getElementById("app-shell");

  themeBtn.addEventListener("click", () => {
    const isDark = appShell.classList.contains("dark");
    if (isDark) {
      appShell.classList.remove("dark");
      appShell.classList.add("light");
      document.body.classList.add("light-mode");
      themeBtn.textContent = "🌙";
    } else {
      appShell.classList.remove("light");
      appShell.classList.add("dark");
      document.body.classList.remove("light-mode");
      themeBtn.textContent = "☀️";
    }
  });

  // Lógica do Modal de Projetos
  const modalOverlay = document.getElementById("modal");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".project-link").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      document.getElementById("m-title").textContent = card.dataset.title;
      document.getElementById("m-desc").textContent = card.dataset.desc;
      document.getElementById("m-cont").textContent = card.dataset.contrib;
      document.getElementById("m-img").src = card.dataset.img;
      document.getElementById("m-link").href = card.dataset.link;
      
      const tags = card.dataset.tags ? card.dataset.tags.split(",") : [];
      document.getElementById("m-tech-list").innerHTML = tags.map(tag => `<span class="modal-tech-item">${tag.trim()}</span>`).join('');
      
      modalOverlay.style.display = "flex";
      document.body.style.overflow = "hidden"; // Impede a rolagem da página por trás do modal
    });
  });

  const closeModal = () => {
    modalOverlay.style.display = "none";
    document.body.style.overflow = ""; // Restaura a rolagem da página
  };

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
});