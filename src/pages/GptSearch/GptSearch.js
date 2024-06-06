import React from "react";
import GptSearchBar from "../../components/GptSearchBar/GptSearchBar";
import { BG_URL } from "../../utils/constants/constants";
import GptSearchSuggestions from "../../components/GptSearchSuggestions/GptSearchSuggestions";

const GptSearch = () => {
  return (
    <section className="py-20 pt-28 min-h-screen relative">
      <div className="w-screen h-screen flex items-center justify-center overflow-hidden fixed top-0 left-0 z-0">
        <img
          src={BG_URL}
          alt="Background image"
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="w-[75rem] 2xl:w-[100rem] mx-auto relative z-10">
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </section>
  );
};

export default GptSearch;
