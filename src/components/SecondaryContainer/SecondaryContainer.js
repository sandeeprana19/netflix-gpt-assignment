import React from "react";
import VideoList from "./VideoList/VideoList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies?.nowPlayingMovies && (
      <section className="bg-black py-20">
        <div className="w-[75rem] mx-auto">
          <div className="flex flex-col gap-y-10 relative -mt-52 w-full">
            <VideoList title="Now Playing" movies={movies?.nowPlayingMovies} />
            <VideoList title="Popular Movies" movies={movies?.popularMovies} />
            <VideoList
              title="Top Rated Movies"
              movies={movies?.topRatedMovies}
            />
            <VideoList
              title="Upcoming Movies"
              movies={movies?.upcomingMovies}
            />
          </div>
        </div>
      </section>
    )
  );
};

export default SecondaryContainer;
