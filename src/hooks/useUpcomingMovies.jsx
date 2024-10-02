import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const list = json?.results;

    dispatch(addUpComingMovies(list));
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
