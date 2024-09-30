import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/now_playing?&page=2";

  const getDataFromAPI = async () => {
    try {
      const response = await axios.get(url, API_OPTIONS);

      const { results } = response.data;

      dispatch(addNowPlayingMovies(results));
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);
};

export default useNowPlayingMovies;
