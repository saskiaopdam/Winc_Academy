// 1

// const testNum = (number) => {
//   // return a promise that tests if the value is less than or greater than 10
//   // log the result to the console

//   return new Promise((resolve, reject) => {
//     // The producing code

//     if (number < 10) {
//       resolve(number + " is less than 10");
//     } else {
//       reject(number + " is greater than 10");
//     }
//   });
// };

// testNum(3)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// testNum(12)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// HELP!!!

// 2
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = () => {
  arrayOfWords.forEach((word) => word.toUpperCase);
};
const sortWords = () => {
  // sort words in alp
};

makeAllCaps();
console.log(arrayOfWords);

// HELP HELP HELP!!!
// Begrijp hier even helemaal niets van
// Later met fris hoofd opnieuw naar kijken

// const sinterklaasIsGul = true;

// // Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
// const krijgIkEenNieuweiPhone = new Promise((resolve, reject) => {
//   if (sinterklaasIsGul) {
//     const smartphone = {
//       merk: "Apple",
//       type: "iPhone 11",
//     };
//     resolve(smartphone);
//   } else {
//     const metWelkeReden = new Error(
//       "Je bent stout geweest, geen cadeaus voor jou"
//     );
//     reject(metWelkeReden);
//   }
// });

// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const vraagAanSinterklaas = () => {
//   krijgIkEenNieuweiPhone
//     .then(function (resolved) {
//       // yay, je hebt een nieuwe smartphone
//       console.log(resolved);
//     })
//     .catch(function (error) {
//       // oeps, geen Sinterklaas cadeau dit jaar
//       console.log(error.message);
//     });
// };

// vraagAanSinterklaas();
