import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo_TLS.png";
import HamburgerMenu from "../assets/menu.png";

const HomeNavbar = () => {
  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <div
          className="sticky top-0 left-0 z-50 bg-black"
          style={{
            position: "fixed",
            width: "100%",
            top: 0,
            zIndex: 100,
            padding: "0.5rem 0",
          }}
        >
          <div className="flex items-center  relative w-full">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-12" />
            </div>
            {/* Logo Section */}
            <div className="flex items-center justify-center flex-1 pr-28 ">
              <div className="flex items-center justify-center px-6 relative mx-auto">
                <div className="hidden md:flex space-x-6">
                  <a
                    href="#"
                    className="text-white font-medium hover:text-blue-600"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-white font-medium hover:text-blue-600"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="text-white font-medium hover:text-blue-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="pr-6">
              <img
                src={HamburgerMenu}
                alt="Hamburger Menu"
                className="h-8 w-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;

{
  /*
  
  import React, { useState, useEffect } from "react";
import { FloatingDockDemo } from "../layouts/floatingDock";
import Logo from "../assets/LOGO_TSL.png";

const Navbar = () => {
  // Array of background images
  const backgroundImages = [
    "url('https://images.unsplash.com/photo-1631495635116-d20e260184e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1525571296628-8c2ee4e47321?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1616500156885-e51d834cab8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1593352217519-80849eae5564?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1616353352910-15d970ac020b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1599982917650-21da4d09c437?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  ];

  // State to store the current background image
  const [currentBackground, setCurrentBackground] = useState(
    backgroundImages[0]
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Change the background image every 5 seconds (5000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) => {
        const currentIndex = backgroundImages.indexOf(prevBackground);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`sticky top-0 z-50 ${
          isScrolled ? "bg-transparent" : "bg-white"
        } transition-all duration-300 ease-in-out`}
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <div
          className={`flex pl-10 pr-60 ${
            isScrolled ? "  " : ""
          } transition-all duration-300 ease-in-out`}
        >
          <div
            className={`flex items-center justify-center px-6 ${
              isScrolled ? "border-none" : "border-gray-600"
            } relative`}
          >
          
            {!isScrolled && (
              <>
                <div className="absolute top-0 left-12 right-0 h-full border-t-4 border-r-4 rounded-r-full border-gray-600"></div>
                <div className="absolute bottom-0 left-12 right-0 h-full border-b-4 border-r-4 rounded-r-full border-gray-600"></div>
              </>
            )}

            
            {!isScrolled && (
              <>
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-20 w-full border-4 rounded-full border-blue-800"
                />
                <h1 className="text-2xl font-bold italic text-blue-800">TLS</h1>
                <h1 className="text-4xl font-extrabold italic text-orange-500">
                  Pro
                </h1>
              </>
            )}

          
            {isScrolled && (
              <>
                <h1 className="text-2xl font-bold italic text-blue-800">TLS</h1>
                <h1 className="text-4xl font-extrabold italic text-orange-500">
                  Pro
                </h1>
              </>
            )}
          </div>

          <FloatingDockDemo />
        </div>
      </div>

      <div
        className=" h-[49rem] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 30%), ${currentBackground}`,
          filter: "grayscale(20%) sepia(10%) contrast(1) brightness(1)",
        }}
      ></div>

      <div className="p-20">
        <h1 className="text-3xl font-semibold">
          Main Content Below the Navbar
        </h1>
        <p>This content will be visible beneath the sticky navbar.</p>
      </div>
    </div>
  );
};

export default Navbar;


  
  
  */
}
