// Toggle Mobile Menu

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".btn-open");
  const closeBtn = document.querySelector(".btn-close");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navbar = document.querySelector(".navbar");

  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle("is-open");
  };

  openBtn.addEventListener("click", toggleMobileMenu);
  closeBtn.addEventListener("click", toggleMobileMenu);

  window.addEventListener('scroll', () => {
    const navbarHeight = navbar.clientHeight; 
    if (window.scrollY > navbarHeight * 4) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled')
    }
  })
});
