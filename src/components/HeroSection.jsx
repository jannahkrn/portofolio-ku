
import React from 'react';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-16">
        {/* Photo on the left */}
        <div className="flex-1 flex justify-center md:justify-start mb-10 md:mb-0">
          <div className="group relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500/30 to-purple-600/30">
            <img
              src={profileImg}
              alt="Profile"
              className="object-cover w-full h-full rounded-3xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_0_40px_10px_rgba(99,102,241,0.4)]"
            />
            {/* Dazzling card effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-tr from-white/30 via-blue-400/20 to-purple-400/20 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
        {/* Text on the right */}
        <div className="flex-1 text-right md:pl-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Halo, Saya</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Fullstack Developer
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl ml-auto">
            Mahasiswa passionate dalam IT, Desain Grafis, dan Digital Marketing. 
            Menciptakan solusi digital yang inovatif dan user-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-end items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Lihat Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full font-semibold bg-gray-900 text-white border-2 border-transparent bg-clip-padding relative overflow-hidden transition-all shadow-lg
                before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 before:opacity-60 before:-z-10
                hover:before:opacity-100 hover:text-white hover:scale-105"
              style={{ zIndex: 1 }}
            >
              Hubungi Saya
            </button>
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