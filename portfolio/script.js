// Variables (element selectie)
const hamburger = document.querySelector(".page-nav__hamburger");
const menuItemWork = document.querySelector(".page-nav__menu__link-work");
const menuItemAbout = document.querySelector(".page-nav__menu__link-about");
const menuItemContact = document.querySelector(".page-nav__menu__link-contact");
const menu = document.querySelector(".page-nav__menu");

// Functions
const openMenu = function () {
  menu.classList.add("page-nav__menu-opened");
};
const hideHamburger = function () {
  hamburger.classList.add("page-nav__hamburger-hidden");
};
const showHamburger = function () {
  hamburger.classList.remove("page-nav__hamburger-hidden");
};
const closeMenu = function () {
  menu.classList.remove("page-nav__menu-opened");
};

// Menu klapt uit/in bij klik op hamburger
hamburger.addEventListener("click", openMenu);
hamburger.addEventListener("click", hideHamburger);

// Menu klapt in bij klik op menu-item
menuItemWork.addEventListener("click", closeMenu);
menuItemWork.addEventListener("click", showHamburger);

menuItemAbout.addEventListener("click", closeMenu);
menuItemAbout.addEventListener("click", showHamburger);

menuItemContact.addEventListener("click", closeMenu);
menuItemContact.addEventListener("click", showHamburger);
