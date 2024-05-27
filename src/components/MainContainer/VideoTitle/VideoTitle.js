import { faCaretRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[75rem] absolute left-1/2 -translate-x-1/2 ml-3 h-full z-10">
      <div className="absolute top-1/2 left-3 -translate-y-1/2 w-6/12 text-white">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="text-sm my-3">{overview}</p>
        <div className="flex items-center gap-x-3">
          <button className="w-32 rounded bg-white flex items-center justify-center h-10 gap-x-2 text-sm font-bold text-black">
            <FontAwesomeIcon icon={faCaretRight} /> Play
          </button>
          <button className="w-32 rounded bg-gray-500 bg-opacity-60 flex items-center justify-center h-10 gap-x-2 text-sm font-bold">
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;