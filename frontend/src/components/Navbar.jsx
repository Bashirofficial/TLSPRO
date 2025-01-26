import React from "react";
import Logo from "../assets/Logo_TLS.png";
import { FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        <div className="flex items-center space-x-4 justify-center w-full">
          <a href="#" className="hover:text-red-400">
            News
          </a>
          <a href="#" className="hover:text-red-400">
            Match
          </a>
          <a href="#" className="hover:text-red-400">
            Follow
          </a>
          <a href="#" className="hover:text-red-400">
            Stats
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-red-400">
            Watch
          </a>
          <button
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#222",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow
            }}
          >
            <FaSearch className="text-white hover:text-red-400" />
          </button>
          <button
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#222",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow
            }}
          >
            <FaUser className="text-white hover:text-red-400" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
