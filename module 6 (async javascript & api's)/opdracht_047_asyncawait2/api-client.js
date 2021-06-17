const API_KEY = "051b27dc05868eb525f436c221904fd5";

async function getData() {
  try {
    const apiUrl =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=051b27dc05868eb525f436c221904fd5";
    const response = await fetch(apiUrl, { method: "GET" });
    // console.log(response);
    const processedResponse = await response.json();
    console.log(processedResponse); // is object, met daarin array "genres"

    return processedResponse;
  } catch (error) {
    alert(error);
  }
}

async function getMyTopMovie() {
  try {
    const apiUrl =
      "https://api.themoviedb.org/3/find/tt6105098?api_key=051b27dc05868eb525f436c221904fd5&language=en-US&external_source=imdb_id";
    const response = await fetch(apiUrl, { method: "GET" });
    // console.log(response);
    const processedResponse = await response.json();
    console.log(processedResponse); // is object, met daarin o.a. array "movie_results"

    return processedResponse;
  } catch (error) {
    alert(error);
  }
}
