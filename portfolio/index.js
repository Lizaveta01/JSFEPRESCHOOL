const hamburger = document.querySelector('.hamburger');
const header__nav = document.querySelector('.header__nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  header__nav.classList.toggle('open');
  
  
}
hamburger.addEventListener('click', toggleMenu);
header__nav.addEventListener('click', toggleMenu);

