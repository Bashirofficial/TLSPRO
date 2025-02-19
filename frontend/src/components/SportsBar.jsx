import React from "react";
import { NavLink } from "react-router-dom";

const SportsBar = () => {
  return (
    <nav className="flex items-center gap-x-6 p-4 border-b shadow-xl bg-white">
      <div className="flex items-center gap-x-2 font-bold text-lg">
        <img src="/football-logo.png" alt="Football Logo" className="w-6 h-6" />
        <span>Football</span>
      </div>
      <div className="w-px h-8 bg-gray-200">{/* Vertical line */}</div>
      <ul className="flex items-center gap-x-4 text-gray-700 font-medium">
        {["News", "Match", "Follows", "Stats", "Teams"].map((item) => (
          <li key={item}>
            <NavLink
              to={`/football/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `cursor-pointer ${
                  isActive
                    ? "text-red-500 border-b-2 border-red-500"
                    : "hover:text-red-500"
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SportsBar;
