import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";

(function () {
  const burger = document?.querySelectorAll("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");

  burger.forEach((btn) => {
    btn?.addEventListener("click", (e) => {
      btn?.classList.toggle("burger--active");
      menu?.classList.toggle("menu--active");

      if (menu?.classList.contains("menu--active")) {
        btn?.setAttribute("aria-expanded", "true");
        btn?.setAttribute("aria-label", "Закрыть меню");
        disableScroll();
      } else {
        btn?.setAttribute("aria-expanded", "false");
        btn?.setAttribute("aria-label", "Открыть меню");
        enableScroll();
      }
    });
  });

  overlay?.addEventListener("click", () => {
    burger.forEach((btn) => {
      btn?.setAttribute("aria-expanded", "false");
      btn?.setAttribute("aria-label", "Открыть меню");
      btn.classList.remove("burger--active");
    });

    menu.classList.remove("menu--active");
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger.forEach((btn) => {
        btn?.setAttribute("aria-expanded", "false");
        btn?.setAttribute("aria-label", "Открыть меню");
        btn.classList.remove("burger--active");
      });
      menu.classList.remove("menu--active");
      enableScroll();
    });
  });
})();
