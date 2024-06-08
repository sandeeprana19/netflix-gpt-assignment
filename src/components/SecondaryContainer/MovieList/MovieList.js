import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import MovieCard from "../MovieCard/MovieCard";

register();

const MovieList = ({ title, movies }) => {
  const swiperElRef = useRef(null);

  console.log(swiperElRef);

  useEffect(() => {
    if (swiperElRef.current) {
      const swiperEl = swiperElRef.current;

      swiperEl.setAttribute("slides-per-view", "5");
      swiperEl.setAttribute("space-between", "10");
      swiperEl.setAttribute("mousewheel", "true");
      swiperEl.setAttribute("free-mode", "true");
      swiperEl.setAttribute("loop", "true");

      swiperEl.breakpoints = {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      };
    }
  }, []);

  return (
    <div>
      <h1 className="text-xl xl:text-2xl font-medium text-white mb-3">
        {title}
      </h1>
      <swiper-container ref={swiperElRef}>
        {movies?.map((movie) => {
          if (!movie.poster_path) return null;

          return (
            <swiper-slide key={movie?.id}>
              <MovieCard posterPath={movie?.poster_path} title={movie?.title} />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
};

export default MovieList;
