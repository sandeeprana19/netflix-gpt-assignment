import React from "react";
import { IMG_CDN_URL } from "../../../utils/constants/constants";

const VideoCard = ({ posterPath, title }) => {
  return (
    <div className="w-full h-60 overflow-hidden rounded">
      <img
        src={IMG_CDN_URL + posterPath}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoCard;
