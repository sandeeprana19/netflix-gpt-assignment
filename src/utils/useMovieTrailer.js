import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addTrailerVideo } from "./moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();

    const movieVideos = json.results;

    const filterData = movieVideos.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : movieVideos[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
