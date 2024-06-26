import React from "react";
import VideoTitle from "./VideoTitle/VideoTitle";
import VideoBackground from "./VideoBackground/VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[11];

  const { title, overview, id } = mainMovie;

  return (
    <div className="w-screen h-[30.375rem] md:h-[36rem] xl:h-screen overflow-x-hidden">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
