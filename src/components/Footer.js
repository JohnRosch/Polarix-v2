export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Polarix Solutions</h3>
          <p className="text-xs sm:text-sm leading-relaxed">
            Providing trusted tax, accounting, and business consulting services. We're here to simplify your financial journey with confidence and care.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Quick Links</h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Contact Us</h3>
          <p className="text-xs sm:text-sm leading-relaxed">Unit 1609C Regalia Park Tower C 150 P Tuazon Boulevard<br />Quezon City, 1109, Philippines</p>
          <p className="text-xs sm:text-sm mt-2">Email: info@polarixsolutions.com</p>
          <p className="text-xs sm:text-sm">Phone: (02) 8-355-1374</p>
        </div>

      </div>

      <div className="mt-8 sm:mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Polarix Solutions. All rights reserved.
      </div>
    </footer>
  );
}
