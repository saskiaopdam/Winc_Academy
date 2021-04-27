// Variables (element selectie)
const hamburger = document.querySelector(".hamburger");
const menuItemGrey = document.querySelector(".menuItem-grey");
const menuItemRed = document.querySelector(".menuItem-red");
const menuItemOrange = document.querySelector(".menuItem-orange");
const menuItemPurple = document.querySelector(".menuItem-purple");
const menuItemGreen = document.querySelector(".menuItem-green");

const colorNameGrey = document.querySelector(".colorNameGrey");
const colorNameRed = document.querySelector(".colorNameRed");
const colorNameOrange = document.querySelector(".colorNameOrange");
const colorNamePurple = document.querySelector(".colorNamePurple");
const colorNameGreen = document.querySelector(".colorNameGreen");

const body = document.querySelector("body");
const menu = document.querySelector(".menu");

// Functions
const toggleMenu = function () {
  menu.classList.toggle("menu-opened");
};
const openMenu = function () {
  menu.classList.add("menu-opened");
};
const closeMenu = function () {
  menu.classList.remove("menu-opened");
};
const makeBodyBackgroundGrey = function () {
  body.classList.remove("body-red", "body-orange", "body-purple", "body-green");
  body.classList.add("body-grey");
};
const makeBodyBackgroundRed = function () {
  body.classList.remove(
    "body-grey",
    "body-orange",
    "body-purple",
    "body-green"
  );
  body.classList.add("body-red");
};
const makeBodyBackgroundOrange = function () {
  body.classList.remove("body-grey", "body-red", "body-purple", "body-green");
  body.classList.add("body-orange");
};
const makeBodyBackgroundPurple = function () {
  body.classList.remove("body-grey", "body-red", "body-orange", "body-green");
  body.classList.add("body-purple");
};
const makeBodyBackgroundGreen = function () {
  body.classList.remove("body-grey", "body-red", "body-orange", "body-purple");
  body.classList.add("body-green");
};

// Ergens een denkfout in de "displayColorName" functions, want bij aanklikken van een volgende kleur in het menu blijft de kleurnaam van de vorige kleur op de body background staan //
// Kom er niet uit, maar heeft denk ik te maken met de naamgeving -hidden en -visible
const displayColorNameGrey = function () {
  colorNameGrey.classList.add("colorNameGrey-visible");
  colorNameGrey.classList.remove(
    "colorNameRed-visible",
    "colorNameOrange-visible",
    "colorNamePurple-visible",
    "colorNameGreen-visible"
  );
};
const displayColorNameRed = function () {
  colorNameRed.classList.add("colorNameRed-visible");
  colorNameRed.classList.remove(
    "colorNameGrey-visible",
    "colorNameOrange-visible",
    "colorNamePurple-visible",
    "colorNameGreen-visible"
  );
};
const displayColorNameOrange = function () {
  colorNameOrange.classList.add("colorNameOrange-visible");
  colorNameOrange.classList.remove(
    "colorNameGrey-visible",
    "colorNameRed-visible",
    "colorNamePurple-visible",
    "colorNameGreen-visible"
  );
};
const displayColorNamePurple = function () {
  colorNamePurple.classList.add("colorNamePurple-visible");
  colorNamePurple.classList.remove(
    "colorNameGrey-visible",
    "colorNameRed-visible",
    "colorNameOrange-visible",
    "colorNameGreen-visible"
  );
};
const displayColorNameGreen = function () {
  colorNameGreen.classList.add("colorNameGreen-visible");
  colorNameGreen.classList.remove(
    "colorNameGrey-visible",
    "colorNameRed-visible",
    "colorNameOrange-visible",
    "colorNamePurple-visible"
  );
};

// Event-listeners hamburger
hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("mouseover", openMenu);
// hamburger.addEventListener("mouseout", closeMenu); // Als menu sluit bij mouseout dan kan de gebruiker niet in het menu klikken //

// Event-listeners menu
menuItemGrey.addEventListener("click", makeBodyBackgroundGrey);
menuItemGrey.addEventListener("click", displayColorNameGrey);
menuItemGrey.addEventListener("click", closeMenu);

menuItemRed.addEventListener("click", makeBodyBackgroundRed);
menuItemRed.addEventListener("click", displayColorNameRed);
menuItemRed.addEventListener("click", closeMenu);

menuItemOrange.addEventListener("click", makeBodyBackgroundOrange);
menuItemOrange.addEventListener("click", displayColorNameOrange);
menuItemOrange.addEventListener("click", closeMenu);

menuItemPurple.addEventListener("click", makeBodyBackgroundPurple);
menuItemPurple.addEventListener("click", displayColorNamePurple);
menuItemPurple.addEventListener("click", closeMenu);

menuItemGreen.addEventListener("click", makeBodyBackgroundGreen);
menuItemGreen.addEventListener("click", displayColorNameGreen);
menuItemGreen.addEventListener("click", closeMenu);
