import React from 'react';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-16">
        {/* Text on the left */}
        <div className="flex-1 text-left md:pr-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Jannah Kurniawati
            </span>
          </h1>
          <p className="text-xl sm:text-1xl text-gray-300 mb-8 max-w-3xl mr-auto">
            I am a dedicated student with a strong commitment to both education and work. I have a great passion for integrating technology, design, and marketing to support the growth of a creative and intelligent young IT generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full font-semibold bg-gray-900 text-white border-2 border-transparent bg-clip-padding relative overflow-hidden transition-all shadow-lg
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 before:opacity-60 before:-z-10
                hover:before:opacity-100 hover:text-white hover:scale-105"
              style={{ zIndex: 1 }}
            >
              Contact Me
            </button>
          </div>
        </div>
        {/* Photo on the right */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-64 h-80 md:w-72 md:h-96 flex items-center justify-center">
            <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center overflow-hidden">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="object-cover w-full h-full rounded-2xl filter grayscale"
                  style={{ zIndex: 2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;