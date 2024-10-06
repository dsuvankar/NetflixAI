import { API_OPTIONS } from "../utils/Constants";

const searchMovie = async (movieName) => {
  const encodedMovieName = movieName.trim().replace(/\s+/g, "%20");

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodedMovieName}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const data = await response.json();
  return data.results || [];
};

export default searchMovie;
