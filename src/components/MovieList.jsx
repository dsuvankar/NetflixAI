import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative h-auto mb-[2.5vw]">
      <h1 className="m-2 p-2 text-white font-bold text-sm sm:text-sm md:text-md lg:text-lg xl:text-2xl">
        {title}
      </h1>

      <BsFillArrowLeftCircleFill
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2  text-gray-400 p-2 rounded-full z-20 text-5xl opacity-40 hover:opacity-100 transition-opacity duration-300"
      />

      <div className=" flex overflow-x-scroll scrollbar-none" ref={scrollRef}>
        <div className="flex space-x-4 ">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>

      <BsFillArrowRightCircleFill
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  text-gray-400 p-2 rounded-full z-20 text-5xl opacity-40 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default MovieList;
