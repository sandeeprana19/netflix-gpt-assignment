import { faCaretRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full xl:w-[75rem] 2xl:w-[100rem] absolute left-1/2 -translate-x-1/2 h-[36rem] xl:h-full z-10 px-5 md:px-8 xl:px-0">
      <div className="absolute top-1/2 md:left-10 xl:left-3 -translate-y-1/2 w-[calc(100vw-2.5rem)] md:w-6/12 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl xl:text-7xl font-medium">
          {title}
        </h1>
        <p className="text-sm my-4 md:my-6 xl:my-8">{overview}</p>
        <div className="flex items-center gap-x-3 flex-col md:flex-row gap-y-5 md:gap-y-0">
          <button className="w-full md:w-32 rounded bg-white flex items-center justify-center h-12 md:h-10 gap-x-2 text-sm font-bold text-black">
            <FontAwesomeIcon icon={faCaretRight} /> Play
          </button>
          <button className="w-full md:w-32 rounded bg-gray-500 bg-opacity-60 flex items-center justify-center h-12 md:h-10 gap-x-2 text-sm font-bold">
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
