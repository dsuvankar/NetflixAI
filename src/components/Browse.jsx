import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/Constants";

const Browse = () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing?&page=1";

  const getDataFromAPI = async () => {
    const data = await fetch(url, API_OPTIONS);

    const res = await data.json();
    console.log(res);
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
