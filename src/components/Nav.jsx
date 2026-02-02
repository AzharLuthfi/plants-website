import { useEffect, useState } from "react";
import { PiFlowerLotusFill } from "react-icons/pi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Plants", href: "#plants" },
    { label: "Benefits", href: "#benefits" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6 md:px-16">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <PiFlowerLotusFill size={24} className="text-gray-900" />
          <a href="#home" className="text-gray-900">
            PLANTS
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-600 items-center">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#plants"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-sm transition-colors"
          >
            Shop Now
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-900 font-semibold hover:text-green-600 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#plants"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-sm transition-colors"
          >
            Shop Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Nav;
