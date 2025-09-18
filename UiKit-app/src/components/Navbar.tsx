import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 p-6 fixed z-50 ${scrolled}`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-2xl text-gray-100 transition-transform duration-300 hover:scale-105 mr-5">
            Soriani<span className="text-blue-500">UI</span>
          </h1>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className="text-gray-100 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-gray-100 hover:text-blue-500 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span
            className={`bg-blue-500 block absolute w-6 h-0.5 transition-all duration-300 ${
              open ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          />
          <span
            className={`bg-blue-500 block absolute w-6 h-0.5 transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`bg-blue-500 block absolute w-6 h-0.5 transition-all duration-300 ${
              open ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          />
        </button>

        {/* Menu Mobile */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/components"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Components
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
