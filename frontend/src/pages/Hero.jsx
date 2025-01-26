import React, { useState, useEffect } from "react";

const Hero = () => {
  const backgroundImages = [
    "url('https://images.unsplash.com/photo-1631495635116-d20e260184e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1525571296628-8c2ee4e47321?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1616500156885-e51d834cab8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1593352217519-80849eae5564?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1616353352910-15d970ac020b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1599982917650-21da4d09c437?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  ];

  const [currentBackground, setCurrentBackground] = useState(
    backgroundImages[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) => {
        const currentIndex = backgroundImages.indexOf(prevBackground);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <section
      id="home"
      className="h-[49rem] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 30%), ${currentBackground}`,
        filter: "grayscale(20%) sepia(10%) contrast(1) brightness(1)",
      }}
    ></section>
  );
};
export default Hero;
