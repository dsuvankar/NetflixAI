import React, { useRef } from "react";
import MovieCard from "./MovieCard";

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

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10">
        &#8249;
      </button>

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

      <button
        onClick={() => scroll("right")}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10">
        &#8250;
      </button>
    </div>
  );
};

export default MovieList;
