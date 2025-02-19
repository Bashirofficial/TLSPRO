import React from "react";
import { CardDemo } from "../components/Card"; // Import the new CardDemo component

const CardLayout = () => {
  const cardData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "FOOTBALL",
      description:
        "Step onto the field with this card and feel the passion, intensity, and global love for the beautiful game.",
      path: "/football",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1721963697056-e8cde3b8eb53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "CRICKET",
      description:
        "Celebrate the spirit of cricket with every boundary, wicket, and moment of suspense that brings this sport to life.",
      path: "/",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/07/02/01/07/basketball-1492261_1280.jpg",
      title: "BASKETBALL",
      description:
        "Experience the energy of the court, where every dribble, dunk, and buzzer-beater echoes with excitement.",
      path: "/",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1541983663620-7571a820610c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HOCKEY",
      description:
        "Immerse yourself in the fast-paced world of hockey, where precision and speed collide on the ice.",
      path: "/",
    },
    {
      imageUrl:
        "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "BOXING",
      description:
        "Step into the ring-3 and unleash the adrenaline of boxing, a sport defined by grit, strategy, and determination.",
      path: "/",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/4114627/pexels-photo-4114627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "CHESS",
      description:
        "Delve into the world of strategy and intellect, where every move brings you closer to ultimate victory.",
      path: "/",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1530028828-25e8270793c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "GOLF",
      description:
        "Swing into elegance and precision, where every shot is a testament to patience, skill, and strategy.",
      path: "/",
    },
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/06/21/17/38/ai-generated-8844755_1280.jpg",
      title: "MMA",
      description:
        "Feel the power and discipline of MMA, where strength and endurance define the ultimate challenge.",
      path: "/",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1480099225005-2513c8947aec?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "RUGBY",
      description:
        "Dive into the rugged world of rugby, a sport where teamwork, resilience, and the pursuit of victory reign.",
      path: "/",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1529768167801-9173d94c2a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3...",
      title: "RACING",
      description:
        "Accelerate into the thrilling world of racing, where speed, skill, and precision lead the charge for glory.",
      path: "/",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 ">
      {cardData.map((card, index) => (
        <CardDemo
          key={index}
          defaultBackground={card.imageUrl} // Pass as defaultBackground
          hoverBackground={card.imageUrl} // Replace with hover-specific URL if available
          title={card.title}
          description={card.description}
          path={card.path}
        />
      ))}
    </div>
  );
};

export default CardLayout;
