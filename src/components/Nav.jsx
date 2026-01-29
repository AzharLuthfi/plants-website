import { useEffect, useState } from "react";
import { PiFlowerLotusFill } from "react-icons/pi";
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-15">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <PiFlowerLotusFill size={24} className="text-gray-900" />
          <a href="#home" className="text-gray-900 font-bold text-lg">
            PLANTS
          </a>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a
            href="#"
            className="text-gray-900 font-semibold text-sm hover:text-green-600 transition-colors py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-900 font-semibold text-sm hover:text-green-600 transition-colors py-2"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-900 font-semibold text-sm hover:text-green-600 transition-colors py-2"
          >
            Plants
          </a>
          <a
            href="#"
            className="text-gray-900 font-semibold text-sm hover:text-green-600 transition-colors py-2"
          >
            Benefits
          </a>
          <a
            href="#"
            className="text-gray-900 font-semibold text-sm hover:text-green-600 transition-colors py-2"
          >
            Contact
          </a>
          {/* Button */}
          <a
            href="#"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm  transition-colors px-4 py-2 rounded-sm"
          >
            Shop Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
