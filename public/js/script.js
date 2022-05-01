// Toggle Mobile Menu

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".btn-open");
  const closeBtn = document.querySelector(".btn-close");
  const mobileMenu = document.querySelector(".mobile-menu");

  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle("is-open");
  };

  openBtn.addEventListener("click", toggleMobileMenu);
  closeBtn.addEventListener("click", toggleMobileMenu);
});
