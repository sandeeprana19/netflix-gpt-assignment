import React from "react";
import useMovieTrailer from "../../../utils/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-full h-full relative before:bg-black before:bg-opacity-30 before:absolute before:w-full before:h-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
