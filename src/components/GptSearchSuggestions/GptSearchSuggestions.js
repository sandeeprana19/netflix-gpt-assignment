import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList/MovieList";

const GptSearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <section className="bg-black bg-opacity-90 p-10 rounded mt-10">
      <div className="flex flex-col gap-y-10 relative w-full">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default GptSearchSuggestions;
