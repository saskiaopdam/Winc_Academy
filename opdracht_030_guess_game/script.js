// //Guess the number

// let askForNumber = function () {
//   let number = prompt(
//     "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
//   );
// };

// let askForName = function () {
//   let name = prompt("Welkom! Wat is je naam?");
//   document.write("Hey " + name);
//   askForNumber();
// };

// askForName();

// let askForNumber = function () {
//   let number = prompt(
//     "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
//   );
// };

// askForNumber();

let name = prompt("Welkom! Wat is je naam?");
alert("Hey " + name);
let number = prompt(
  "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
);
if (number != Math.random) {
  alert("Dat is niet correct");
  let number = prompt("Voer opnieuw een nummer in");
}
if (number == Math.random) {
  alert("Gefeliciteerd");
}

alert("Dag " + name + ". Tot de volgende keer.");
