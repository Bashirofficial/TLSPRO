"use client";
import { cn } from "./lib/utils";

export function CardDemo({
  defaultBackground,
  hoverBackground,
  title,
  description,
}) {
  return (
    <div className="max-w-xs w-full">
      <div
        className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 transition-all duration-500"
        style={{
          backgroundImage: `url(${defaultBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${hoverBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "-1",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/*
import React from "react";
import { Card, CardHeader } from "@material-tailwind/react";

export const BackgroundBlogCard = ({
  imageUrl, // Dynamic image URL for the background
  text, // Simple text to display on the card
  backgroundPosition = "center", // Default to center if no position is provided
}) => {
  
  const defaultImageUrl = "https://via.placeholder.com/600"; // Placeholder image

  return (
    <Card
      shadow={false}
      className="relative grid h-[20rem] w-full max-w-[20rem] items-center justify-center overflow-hidden text-center rounded-lg"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none"
        style={{
          backgroundImage: `url('${imageUrl || defaultImageUrl}')`, // Dynamically set the background image
          backgroundSize: "cover", // Ensure the image covers the card
          backgroundPosition: backgroundPosition, // Dynamically set the background position
        }}
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>

     
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl px-4 py-4">
        {text}
      </div>
    </Card>
  );
};

*/
