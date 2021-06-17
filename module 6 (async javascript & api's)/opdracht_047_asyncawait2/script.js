// DIT PARKEER IK MAAR EVEN VOOR EEN LATER MOMENT
// OVER EEN WEEK OF TWEE LUKT HET HOPELIJK WEL

async function awaitGetData() {
  try {
    const fetchedData = await getData();
    console.log(fetchedData); // is object, met daarin array "genres"

    const getMovieGenres = () => {
      const movieGenres = fetchedData.genres;
      console.log(movieGenres); // is array "genres"

      movieGenres.forEach((movieGenre) => {
        const movieGenresList = document.getElementById("movieGenres");
        // console.log(movieGenresList);
        const newLi = document.createElement("li");
        // console.log(newLi);
        movieGenresList.appendChild(newLi);
        newLi.innerHTML =
          "genre naam: " + movieGenre.name + ", " + "id: " + movieGenre.id;
        // document.write(
        //   "genre naam: " + movieGenre.name + ", " + "id: " + movieGenre.id
        // );
      });
    };
    getMovieGenres();
  } catch (error) {
    alert(error);
  }
}

awaitGetData();
// .then(console.log);

alert("Succes");

async function awaitGetMyTopMovie() {
  try {
    const fetchedData = await getMyTopMovie();
    console.log(fetchedData); // is object, met daarin o.a. array "movie_results"

    const getMovieResults = () => {
      const movieResults = fetchedData.movie_results;
      console.log(movieResults); // is array "movie_results"

      movieResults.forEach((movieResult) => {
        const myTopMovieList = document.getElementById("myTopMovie");
        // console.log(myTopMovieList);
        const newLi = document.createElement("li");
        // console.log(newLi);
        myTopMovieList.appendChild(newLi);
        newLi.innerHTML = movieResult.title;
        // document.write(
        //   "genre naam: " + movieGenre.name + ", " + "id: " + movieGenre.id
        // );
      });
    };
    getMovieResults();
  } catch (error) {
    alert(error);
  }
}

awaitGetMyTopMovie();

// getTopRatedMovies();
// getTopRatedActionMovies();
