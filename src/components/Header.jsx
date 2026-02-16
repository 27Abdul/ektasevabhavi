import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-14 object-contain flex-shrink-0"
          />
          <h1 className="text-lg md:text-xl font-bold text-blue-600 leading-tight">
            Ekata Bahuudeshiya Seva Bhavi Sanstha
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 px-6 py-4 space-y-4 shadow">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
