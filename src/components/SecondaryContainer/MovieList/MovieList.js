import React, { useRef } from "react";
import { register } from "swiper/element/bundle";
import MovieCard from "../MovieCard/MovieCard";

register();

const MovieList = ({ title, movies }) => {
  const swiperElRef = useRef(null);

  return (
    <div>
      <h1 className="text-2xl font-medium text-white mb-3">{title}</h1>
      <div>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="6"
          space-between="10"
          mousewheel="true"
          free-mode="true"
          loop="true"
        >
          {movies?.map((movie) => {
            if (!movie.poster_path) return null;

            return (
              <swiper-slide key={movie?.id}>
                <MovieCard
                  posterPath={movie?.poster_path}
                  title={movie?.title}
                />
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
};

export default MovieList;
