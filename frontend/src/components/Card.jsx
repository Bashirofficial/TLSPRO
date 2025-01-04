import React from "react";
import { Card, CardHeader } from "@material-tailwind/react";

export function BackgroundBlogCard({
  imageUrl, // Dynamic image URL for the background
  text, // Simple text to display on the card
  backgroundPosition = "center", // Default to center if no position is provided
}) {
  // Default image URL if none is provided
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

      {/* Simple Text Display at the Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl px-4 py-4">
        {text}
      </div>
    </Card>
  );
}
