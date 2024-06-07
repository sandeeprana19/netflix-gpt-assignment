import React from "react";
import { IMG_CDN_URL } from "../../../utils/constants/constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-full h-56 lg:h-60 overflow-hidden rounded">
      <img
        src={IMG_CDN_URL + posterPath}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
