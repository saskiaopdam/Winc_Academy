// Variables (element selectie)
const hamburger = document.querySelector(".navbar__hamburger");
const menu = document.querySelector(".navbar__menu");

// Functions
const hideHamburger = () => {
  hamburger.classList.add("navbar__hamburger--hidden");
};
const showHamburger = () => {
  hamburger.classList.remove("navbar__hamburger--hidden");
};
const hideMenu = () => {
  menu.classList.remove("navbar__menu--visible");
};
const showMenu = () => {
  menu.classList.add("navbar__menu--visible");
};

const onHamburgerClick = function () {
  hideHamburger();
  showMenu();
};
const onMenuClick = function () {
  hideMenu();
  showHamburger();
};

//Event listeners
hamburger.addEventListener("click", onHamburgerClick);

menu.addEventListener("click", onMenuClick);
