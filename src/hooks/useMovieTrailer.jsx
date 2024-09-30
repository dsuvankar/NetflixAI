import React, { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  // Fetch trailer
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      API_OPTIONS
    );
    const res = await data.json();

    const filterData = res.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : res.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
