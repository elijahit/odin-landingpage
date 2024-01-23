const hamburgerMenu = document.querySelector('header .header__wrapper .mobile__only');
const hamburgerMenuClose = document.querySelector('header nav.mobile img');
const navList = document.querySelector('header nav.mobile');


hamburgerMenu.addEventListener('click', openMenu);
hamburgerMenuClose.addEventListener('click', closeMenu);

function openMenu () {
  navList.classList.add('show__mobile');
  hamburgerMenu.classList.add('show__mobile');
}

function closeMenu () {
  navList.classList.remove('show__mobile');
  setTimeout(() => {
    hamburgerMenu.classList.remove('show__mobile');
  }, 600)
}