import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTrailerVideo } from "../slices/moviesSlice";
import { useEffect } from "react";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
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
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieVideos;
