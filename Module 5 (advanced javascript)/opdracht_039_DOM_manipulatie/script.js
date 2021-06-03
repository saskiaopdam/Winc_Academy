// Deel 1 - elementen toevoegen aan de DOM

const bigFiveButtons = document.getElementsByClassName("big-five-button");
// console.log(bigFiveButtons);

for (let i = 0; i < bigFiveButtons.length; i++) {
  const addAnimalToList = function () {
    bigFiveAnimal = bigFiveButtons[i].innerHTML;
    // console.log(bigFiveAnimal);
    const newLi = document.createElement("li");
    newLi.classList.add("spotted-animals-list-item");
    newLi.innerHTML = bigFiveAnimal;
    // console.log(newLi);
    const SpottedAnimals = document.getElementById("spotted-animals-list");
    // console.log(SpottedAnimals);
    SpottedAnimals.appendChild(newLi);
  };
  bigFiveButtons[i].addEventListener("click", addAnimalToList);
  //   console.log(addAnimalToList);
}

// Deel 2 - 1 element verwijderen uit de DOM

// const removeFirstItemButton = document.getElementById(
//   "remove-first-item-button"
// );
// // console.log(removeFirstItemButton);

// const removeFirstItem = function () {
//   //   console.log("You clicked the button");
//   const SpottedAnimals = document.getElementById("spotted-animals-list");
//   const firstItem = SpottedAnimals.getElementsByClassName(
//     "spotted-animals-list-item"
//   )[0];
//   //   console.log(firstItem);
//   SpottedAnimals.removeChild(firstItem);
// };

// removeFirstItemButton.addEventListener("click", removeFirstItem);
// console.log(removeFirstItem);

// Deel 3 - Meerdere elementen verwijderen uit de DOM

const removeAllButton = document.getElementById("remove-all-button");
// console.log(removeAllButton);

const removeAllItems = function () {
  //   console.log("You clicked the button");
  const SpottedAnimals = document.getElementById("spotted-animals-list");
  const allSpottedAnimals = SpottedAnimals.getElementsByClassName(
    "spotted-animals-list-item"
  );
  //   console.log(allSpottedAnimals);
  // allSpottedAnimals verwijderen simpel: in een keer
  //   SpottedAnimals.innerHTML = "";

  // allSpottedAnimals verwijderen chique: een voor een
  for (let i = 0; i < allSpottedAnimals.length; i++) {
    allSpottedAnimals[i].remove();
  }
};

// Met de loop gaan de elementen niet een voor een weg:
// 2 elementen: 1 verwijderd
// 3 elementen: 2 verwijderd
// 7 elementen: 4 verwijderd

removeAllButton.addEventListener("click", removeAllItems);
// console.log(removeAllItems);
