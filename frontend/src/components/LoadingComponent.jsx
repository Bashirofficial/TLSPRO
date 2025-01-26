import React from "react";
import loadingGif from "../assets/loader.gif"; // Path to your loading gif

const LoadingComponent = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-80 h-screen">
      <img src={loadingGif} alt="Loading..." className="w-88 h-88" />
    </div>
  );
};

export default LoadingComponent;
