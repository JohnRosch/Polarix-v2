import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md overflow-x-hidden">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <img src="/logo.png" alt="Polarix Logo" className="h-10 sm:h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 lg:gap-8 text-sm lg:text-base font-semibold text-gray-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-600 transition duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-green-800 text-white px-5 py-2 text-sm rounded hover:bg-green-900 transition duration-300 font-semibold"
        >
          Contact Us
        </a>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-4 sm:px-6 text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition duration-300 font-medium border-b border-gray-100"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block w-full bg-green-800 text-white px-4 sm:px-6 py-3 text-center hover:bg-green-900 transition duration-300 font-semibold"
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
