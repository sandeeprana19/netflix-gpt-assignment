import React, { useRef } from "react";
import lang from "../../utils/constants/languageConstants";
import { useSelector } from "react-redux";
import openai from "../../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef();

  const handleGptSearch = async (e) => {
    e.preventDefault();

    console.log(searchText.current.value);

    const getQuery =
      "As a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like example given ahead. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    console.log(getQuery);

    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!getResults) {
      // TODO: Write error handling
    }

    const getMovies = getResults.choices?.[0].message?.content.split(",");
  };

  return (
    <div>
      <form className="w-6/12 mx-auto" onSubmit={handleGptSearch}>
        <label className="input input-bordered bg-white flex items-center gap-2">
          <input
            ref={searchText}
            type="text"
            className="grow text-black"
            placeholder={lang[langKey].searchPlaceholder}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 text-red-600"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </form>
    </div>
  );
};

export default GptSearchBar;
