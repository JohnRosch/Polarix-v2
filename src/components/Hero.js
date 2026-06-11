import { useState, useEffect } from "react";
import backpic from "../assets/image1.jpg";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backpic;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-[75vh] text-white flex flex-col justify-center items-center text-center px-4 bg-gray-800">
      {/* Background Image with Blur Effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
          imageLoaded ? "blur-none" : "blur-sm"
        }`}
        style={{
          backgroundImage: `url(${backpic})`,
        }}
      />
      
      {/* Loading Placeholder - Shows while image loads */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
          Trust, Expertise, & Results
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
          Your Partner for Quality and Success
        </p>
        <p className="mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-gray-200">
          Polarix Solutions empowers individuals and businesses to achieve financial clarity and confidence with premier CPA services delivered by experienced professionals
        </p>

        {/* BUTTON REMOVED */}
        {/* <button className="bg-white text-blue-700 px-8 py-3 text-lg font-semibold rounded-full hover:bg-gray-200 transition">
          Schedule a Consultation
        </button> */}
      
      </div>
    </section>
  );
}
