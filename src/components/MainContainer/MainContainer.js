import React from "react";
import VideoTitle from "./VideoTitle/VideoTitle";
import VideoBackground from "./VideoBackground/VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[16];

  const { title, overview, id } = mainMovie;

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
