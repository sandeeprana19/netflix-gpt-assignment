import React from "react";
import lang from "../../utils/constants/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);

  const handleGptSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="w-6/12 mx-auto" onSubmit={handleGptSearch}>
        <label className="input input-bordered bg-white flex items-center gap-2">
          <input
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
