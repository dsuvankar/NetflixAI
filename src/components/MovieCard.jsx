import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ poster_path, title }) => {
  return (
    <div className="cursor-pointer border-2 border-transparent hover:border-white mx-1 lg:mx-2 rounded-md">
      <div className="min-w-[200px]  transition-all">
        <img
          src={IMG_CDN_URL + poster_path}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default MovieCard;
