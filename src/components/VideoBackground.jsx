import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  useMovieTrailer(movieID);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="relative h-full w-full  overflow-hidden">
      <div className="relative w-full h-full scale-150 aspect-video">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
        <iframe
          onClick={(e) => e.preventDefault()}
          className="absolute inset-0 w-full z-0  aspect-video "
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1&controls=0&loop=1&rel=0&playlist=" +
            trailerVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
