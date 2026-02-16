import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Ektasevabhavi</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="/about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="/contact" className="hover:text-blue-600 transition">
            Contact
          </a>
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
          <a href="/" className="block">
            Home
          </a>
          <a href="/about" className="block">
            About
          </a>
          <a href="/contact" className="block">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
