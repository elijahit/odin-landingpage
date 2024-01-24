const hamburgerMenu = document.querySelector('header .header__wrapper .mobile__only');
const hamburgerMenuClose = document.querySelector('header nav.mobile .close__menu');
const navList = document.querySelector('header nav.mobile');


hamburgerMenu.addEventListener('click', openMenu);
hamburgerMenuClose.addEventListener('click', closeMenu);

function openMenu () {
  navList.style.display = "block";
  hamburgerMenu.ariaPressed = "true";
  setTimeout(() => {
    navList.classList.add('show__mobile');
    hamburgerMenu.classList.add('show__mobile');
    hamburgerMenuClose.focus();
  }, 100);
}

function closeMenu () {
  navList.classList.remove('show__mobile');
  hamburgerMenu.ariaPressed = "false";
  setTimeout(() => {
    hamburgerMenu.classList.remove('show__mobile');
    navList.style.display = "none";
    hamburgerMenu.focus();
  }, 600)
}
