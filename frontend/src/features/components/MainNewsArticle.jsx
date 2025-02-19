import React from "react";

const MainNewsArticle = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl p-4 mb-4">
      <img
        src={imageSrc}
        alt="Featured"
        className="w-full h-60 object-cover rounded-sm"
      />
      <h2 className="font-bold text-xl mt-4">{title}</h2>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default MainNewsArticle;
