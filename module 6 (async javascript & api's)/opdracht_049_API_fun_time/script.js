const button = document.getElementsByTagName("button");
const surpriseHeading = document.getElementById("surpriseHeading");
const surpriseContent = document.getElementById("surpriseContent");

// const displaySurpriseHeading = () => {
//   if (randomSurprise == getJoke) {
//     surpriseHeading.textContent = "A dad joke! :";
//   } else if (randomSurprise == getTweet) {
//     surpriseHeading.textContent = "A Trump tweet! :";
//   } else if (randomSurprise == getPoke) {
//     surpriseHeading.textContent = "A Pokemon! :";
//   }
// };

const displaySurpriseContent = (content) => {
  // result.textContent = "";
  surpriseContent.textContent = content;
};

const getJoke = new Request("https://icanhazdadjoke.com/", {
  method: "GET",
  headers: {
    Accept: "text/plain",
  },
});
const getTweet = new Request("https://tronalddump.io/random/quote", {
  method: "GET",
  headers: {
    Accept: "*/*",
  },
});
const getPoke = new Request("https://pokeapi.co/api/v2/pokemon/1", {
  method: "GET",
  headers: {
    Accept: "text/plain",
  },
});

const showSurprise = () => {
  const surprises = [getJoke, getTweet, getPoke];
  const randomSurprise =
    surprises[Math.floor(Math.random() * surprises.length)];
  console.log(randomSurprise);
  fetch(randomSurprise)
    .then((response) => {
      console.log(response);
      if (randomSurprise == getJoke) {
        let data = response.text();
        return data;
      } else if (randomSurprise == getTweet) {
        let data = response.json();
        return data;
      } else if (randomSurprise == getPoke) {
        let data = response.json();
        return data;
      }
    })
    .then((data) => {
      const displaySurpriseHeading = () => {
        if (randomSurprise == getJoke) {
          surpriseHeading.textContent = "A dad joke! :";
        } else if (randomSurprise == getTweet) {
          surpriseHeading.textContent = "A Trump tweet! :";
        } else if (randomSurprise == getPoke) {
          surpriseHeading.textContent = "A Pokemon! :";
        }
      };
      displaySurpriseHeading();
      if (randomSurprise == getJoke) {
        displaySurpriseContent(data);
        console.log(data);
      } else if (randomSurprise == getTweet) {
        displaySurpriseContent(data.value);
        console.log(data.value);
      } else if (randomSurprise == getPoke) {
        displaySurpriseContent(data);
        console.log(data);
      }
    });
};

button[0].addEventListener("click", showSurprise);

// const isSquare = (n) => {
//   console.log(Number.isInteger(Math.sqrt(n)));
//   return Number.isInteger(Math.sqrt(n));
// };
// isSquare(6);

// const replaceWUBbySpace = (song) =>{
//   song.replaceAll("WUB", " ");
// };

// function songDecoder(song) {
//   replaceWUBbySpace(song);
//   };
// }
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");
