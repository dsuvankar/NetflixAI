import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getMovieRecommendations } from "../utils/openaiUtils";
import searchMovie from "../hooks/useSearchMovie";
import { addMovieResults, setSearchError } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const inputText = searchText.current.value.trim();

    dispatch(setSearchError(null));

    if (!inputText) {
      dispatch(setSearchError("Please enter a valid search term."));
      return;
    }

    try {
      const recommendedMovies = await getMovieRecommendations(inputText);

      if (recommendedMovies.length === 0) {
        dispatch(
          setSearchError("I am sorry, can't find any movie related to that.")
        );
        return;
      }

      const searchResults = await Promise.all(
        recommendedMovies.map((movie) => searchMovie(movie))
      );

      const validResults = searchResults.filter((result) => result.length > 0);

      if (validResults.length === 0) {
        dispatch(
          setSearchError("I am sorry, can't find any movie related to that.")
        );
        return;
      }

      dispatch(
        addMovieResults({
          movieNames: recommendedMovies,
          movieResults: searchResults,
        })
      );
    } catch (err) {
      console.error("Error during GPT or TMDB fetch:", err);
      dispatch(setSearchError("Something went wrong. Please try again."));
    }
  };

  return (
    <div className="pt-10  flex justify-center">
      <form
        className="w-full md:w-1/2 bg-gray-900  rounded-md grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-md col-span-9"
          placeholder="What's in your mind?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
