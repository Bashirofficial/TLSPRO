import React from "react";
import Logo from "../assets/Logo_TLS.png";
import { FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // List of links for the navbar
  const navLinks = [
    /*
    { label: "News", href: "#" },
    { label: "Match", href: "#" },
    { label: "Follow", href: "#" },
    { label: "Stats", href: "#" },
     */
  ];

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
        <div className="flex items-center gap-4 justify-center w-full">
          {/* Map over navLinks to create the anchor tags */}
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-red-400">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
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
            <FaUser
              className="text-white hover:text-red-400"
              onClick={handleProfileClick}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
