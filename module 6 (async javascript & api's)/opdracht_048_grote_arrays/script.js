const btnLandenlijst = document.getElementById("btnLandenlijst");
const btnSteenbokvrouwen = document.getElementById("btnSteenbokvrouwen");
console.log(btnSteenbokvrouwen);

const toonLandenlijst = function () {
  let regions = randomPersonData.map(function (element) {
    return element.region;
  });

  let sortedRegions = regions.sort();
  // console.log(sortedRegions);

  sortedRegions.forEach((element) => {
    // console.log(element);
    let newLi = document.createElement("li");
    // console.log(newLi);
    document.querySelector("#result").appendChild(newLi);
    newLi.textContent = element;
  });
};

const toonSteenbokvrouwen = function () {
  let steenbokvrouwen = randomPersonData.filter((element) => {
    let month = element.birthday.dmy.slice(3, 5);
    let day = element.birthday.dmy.slice(0, 2);
    if (month === "12" || month === "01") {
      return (
        element.gender === "female" &&
        element.age > 30 &&
        day >= 19 &&
        day <= 22
      );
    }
  });
  console.log(steenbokvrouwen);
  // Je krijgt nu 0 items terug, want geen enkel item voldoet aan de criteria. Maar als je in de randomPersonData.js bij neem Lelia Firulescu de datum wijzigt in 22/01/1989 dan wordt zij wel gevonden.

  let persons = steenbokvrouwen.map(function (element) {
    // return `${element.name} ${element.surname}`;
    return element.name + " " + element.surname + " " + element.photo;
  });
  console.log(persons);

  let sortedPersons = persons.sort();
  console.log(sortedPersons);

  sortedPersons.forEach((element) => {
    // console.log(element);
    let newLi = document.createElement("li");
    // console.log(newLi);
    document.querySelector("#result").appendChild(newLi);
    newLi.textContent = element;
  });
};

btnLandenlijst.addEventListener("click", toonLandenlijst);
btnSteenbokvrouwen.addEventListener("click", toonSteenbokvrouwen);

// element.birthday.dmy.slice(3, 5) === "12") ||
// element.birthday.dmy.slice(3, 5) === "01"
