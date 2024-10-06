import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ poster_path, title }) => {
  return (
    <div className="cursor-pointer border-2 border-transparent hover:border-white mx-1 lg:mx-2 rounded-md">
      <div className="min-w-[200px] transition-all relative">
        {poster_path ? (
          <img
            src={IMG_CDN_URL + poster_path}
            alt={title}
            className="w-full h-auto object-cover"
          />
        ) : (
          <div className="relative">
            <img
              src="/no-poster-netflixGPT.png"
              alt="No Poster Available"
              className="w-[200px] h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex ">
              <p className="text-gray-300 font-bold text-center text-sm p-1">
                {title}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
