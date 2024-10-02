import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies.nowPlayingMovies) return;
  return (
    <div className="bg-black h-full w-full ">
      <div className="-mt-0 md:-mt-36 pl-1 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
