import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames, searchError } = useSelector(
    (store) => store.gpt
  );

  if (searchError) {
    return (
      <div>
        <h1 className="text-white text-xs md:text-xl xl:text-4xl font-bold text-center mt-10 xl:mt-20">
          {searchError} <br />
          Please try again !!
        </h1>
      </div>
    );
  }

  if (!movieResults) return null;

  return (
    <div className="mt-12 sm:mt-14 md:mt-20 xl:mt-32 ml-4 sm:ml-8 pb-3">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={index}
          category={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
