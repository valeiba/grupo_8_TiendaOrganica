// Toggle Mobile Menu

document.addEventListener("DOMContentLoaded", () => {
  
  const btnOpen = document.querySelector(".btn-open");
  const btnClose = document.querySelector(".btn-close");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navbar = document.querySelector(".navbar");

  const toggleMobileMenu = () => {
    mobileMenu.classList.toggle("is-open");
  };

  btnOpen.addEventListener("click", toggleMobileMenu);
  btnClose.addEventListener("click", toggleMobileMenu);

  window.addEventListener('scroll', () => {
    const navbarHeight = navbar.clientHeight; 
    if (window.scrollY > navbarHeight * 2) {
      navbar.classList.add('is-scrolled');
      document.body.style.paddingTop = `${navbarHeight}px`;
    } else {
      navbar.classList.remove('is-scrolled')
      document.body.style.paddingTop = 0;
    }
  })
});
