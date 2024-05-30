import React from "react";
import useMovieVideos from "../../../utils/customHooks/useMovieVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieVideos(movieId);

  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-full h-full relative before:bg-black before:bg-opacity-20 before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-black overflow-hidden">
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
