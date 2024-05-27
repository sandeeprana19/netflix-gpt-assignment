import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import SecondaryContainer from "../../components/SecondaryContainer/SecondaryContainer";
import useNowPlayingMovies from "../../utils/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
