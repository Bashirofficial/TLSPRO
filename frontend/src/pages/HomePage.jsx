import React from "react";
import CardLayout from "../components/CardUI.jsx";
import HomeNavbar from "../components/HomeNavbar.jsx";
import Hero from "./Hero.jsx";

function HomePage() {
  return (
    <main className="relative ">
      <HomeNavbar />
      <section className="  padding-b">
        <Hero />
      </section>
      <section className="padding-x">
        <CardLayout />
      </section>
    </main>
  );
}

export default HomePage;
