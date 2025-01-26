// Install Tailwind CSS in your Vite React project first.
// Then, create the following components for the layout.

import React from "react";
import Navbar from "../../../components/Navbar";

const ESPNLayout = () => {
  const leagues = [
    { name: "Football", icon: "https://path-to-football-icon.png" },
    { name: "Baseball", icon: "https://path-to-baseball-icon.png" },
    { name: "Hockey", icon: "https://path-to-hockey-icon.png" },
    {
      name: "Men's Basketball",
      icon: "https://path-to-mens-basketball-icon.png",
    },
    {
      name: "Women's Basketball",
      icon: "https://path-to-womens-basketball-icon.png",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white text-black">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <button className="bg-red-800 text-white text-xs py-1 px-3 rounded">
              TOP EVENTS
            </button>
            <div className="flex items-center text-xs gap-4">
              <span>ISL</span>
              <span>7:30 PM GOA VS EBEN</span>
              <span>Prem</span>
              <span>7:30 PM EVE VS TOT</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-xs">Watch</button>
            <button className="text-xs">Search</button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-4 py-8">
        {/* Left Sidebar */}
        <aside className="col-span-2">
          <div className="bg-white p-4 shadow rounded-xl mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-full mb-4">
              Create Account
            </button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 w-full rounded-full mb-8">
              Log In
            </button>
          </div>
          <div className="bg-white p-4 shadow rounded-xl">
            <h2 className="font-bold text-sm  text-gray-800 ">Featured</h2>
            <ul className="divide-y divide-gray-300">
              {leagues.map((league, index) => (
                <li key={index} className="flex items-center py-2">
                  <img
                    src={league.icon}
                    alt={`${league.name} icon`}
                    className="w-8 h-4 mr-3"
                  />
                  <span className="text-gray-800 text-sm ">{league.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Article Section */}
        <main className="col-span-7">
          <div className="bg-white shadow rounded-xl p-4 mb-4">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Featured"
              className="w-full h-60 object-cover rounded"
            />
            <h2 className="font-bold text-xl mt-4">
              AO Day 8: Djokovic, Alcaraz book quarterfinal date
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              Day 8 at the Australian Open was full of action with Aryna
              Sabalenka, Coco Gauff, Novak Djokovic, and Carlos Alcaraz all
              booking their places in the quarterfinals.
            </p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h3 className="font-bold text-lg">
              'Balls are heavy, courts are slow': Are the conditions to blame
              for Pegula's Australian...
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              When Pegula lost Friday, she complained of slow conditions on the
              court. Sabalenka has noted it as well --
            </p>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="col-span-3 bg-white p-4 shadow rounded-xl">
          <h2 className="font-bold text-lg mb-4">Top Headlines</h2>
          <ul className="space-y-2 text-sm">
            <li>One sub, no winner: Arteta envy at Liverpool depth</li>
            <li>Frank: Liverpool best side in world, not just Prem</li>
            <li>Kelce flips 'switch' for playoffs, explodes in KC win</li>
            <li>Draymond injures calf in return, to have MRI</li>
            <li>Besiktas appoint Solskjær as head coach</li>
            <li>Bumrah picked in India's Champions Trophy squad</li>
            <li>Alaba set for Madrid return after 13 months out</li>
            <li>Bayern beat Wolfsburg to go clear in Bundesliga</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default ESPNLayout;
