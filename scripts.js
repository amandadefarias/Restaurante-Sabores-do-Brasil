document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (!btn || !menu || !iconMenu || !iconClose) return;

  function openMenu() {
    menu.classList.remove("hidden");
    iconMenu.classList.add("hidden");
    iconClose.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menu.classList.add("hidden");
    iconMenu.classList.remove("hidden");
    iconClose.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", function () {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // fecha o menu ao clicar em qualquer link interno do menu mobile
  const links = menu.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });
});
