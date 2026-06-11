export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-md bg-white">
      <a href="#home" className="ml-2 sm:ml-6 md:ml-8">
        <img src="/logo.png" alt="Polarix Logo" className="h-10 sm:h-12 w-auto" />
      </a>
      <ul className="hidden md:flex gap-4 lg:gap-8 text-xs sm:text-sm lg:text-base font-semibold text-gray-800">
        <li>
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
        </li>
        <li>
          <a href="#team" className="hover:text-blue-600 transition">Team</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </li>
      </ul>
      {/* Mobile menu - simplified for now */}
      <div className="md:hidden flex gap-2">
        <a href="#services" className="text-xs sm:text-sm text-gray-800 hover:text-blue-600 transition">Services</a>
        <a href="#team" className="text-xs sm:text-sm text-gray-800 hover:text-blue-600 transition">Team</a>
        <a href="#testimonials" className="text-xs sm:text-sm text-gray-800 hover:text-blue-600 transition">Testimonials</a>
      </div>
      {/* deleted button at the right part */}
      <a
        href="#contact"
        className="bg-green-800 text-white px-3 sm:px-5 py-2 text-xs sm:text-sm rounded hover:bg-red-900 transition"
      >
        Contact Us
      </a>
    </nav>
  );
}
