const button = document.getElementsByTagName("button");
const result = document.getElementById("result");

const display = (data) => {
  result.textContent = "";
  result.textContent = data;
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
  // headers: {
  //   Accept: "text/plain",
  // },
});

const surprises = [getJoke, getTweet, getPoke];
let randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];

const showSurprise = () => {
  alert("Congratulations, you clicked");
  fetch(randomSurprise)
    .then((response) => {
      console.log(response);
      if ((randomSurprise = getJoke)) {
        return response.text();
      } else if ((randomSurprise = getTweet)) {
        return response.text();
      } else if ((randomSurprise = getPoke)) {
        return response;
      }
    })
    .then((data) => display(data));
};

button[0].addEventListener("click", showSurprise);
