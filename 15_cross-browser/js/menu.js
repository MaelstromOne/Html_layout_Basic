const navButton = document.querySelector('.header__mobile-navbutton');
const navBar = document.querySelector('.header__mobile-navbar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('header__mobile-navbutton_show');
  navBar.classList.toggle('header__mobile-navbar_show');
})
