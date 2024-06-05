import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies?.nowPlayingMovies && (
      <section className="bg-black py-20">
        <div className="w-[75rem] 2xl:w-[100rem] mx-auto">
          <div className="flex flex-col gap-y-10 relative -mt-52 w-full">
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
            <MovieList title="Popular Movies" movies={movies?.popularMovies} />
            <MovieList
              title="Top Rated Movies"
              movies={movies?.topRatedMovies}
            />
            <MovieList
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
