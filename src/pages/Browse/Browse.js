import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import SecondaryContainer from "../../components/SecondaryContainer/SecondaryContainer";
import useNowPlayingMovies from "../../utils/customHooks/useNowPlayingMovies";
import usePopularMovies from "../../utils/customHooks/usePopularMovies";
import useTopRatedMovies from "../../utils/customHooks/useTopRatedMovies";
import useUpcomingMovies from "../../utils/customHooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
