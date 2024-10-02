import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const list = json?.results;

    dispatch(addPopularMovies(list));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
