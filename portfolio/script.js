// Variables (element selectie)
const hamburger = document.querySelector(".navbar__hamburger");
const menu = document.querySelector(".navbar__menu");

// Functions
const showHamburger = () => {
  hamburger.classList.remove("navbar__hamburger--hidden");
};
const hideHamburger = () => {
  hamburger.classList.add("navbar__hamburger--hidden");
};
const showMenu = () => {
  menu.classList.add("navbar__menu--visible");
};
const hideMenu = () => {
  menu.classList.remove("navbar__menu--visible");
};

// Menu klapt uit/in bij klik op hamburger
hamburger.addEventListener("click", showMenu);
hamburger.addEventListener("click", hideHamburger);

// Menu klapt in bij klik op menu-item
menu.addEventListener("click", hideMenu);
menu.addEventListener("click", showHamburger);
