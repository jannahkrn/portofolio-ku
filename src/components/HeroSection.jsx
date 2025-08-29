import React from 'react';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-200 to-lavender-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-peach-200 to-cream-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-mint-200 to-sage-200 rounded-full opacity-35 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-lavender-300 to-purple-300 rounded-full opacity-40 animate-bounce"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-16">
        {/* Text on the left */}
        <div className="flex-1 text-left md:pr-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-rose-300">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-pulse font-script">
              Jannah Kurniawati
            </span>
          </h1>
          <p className="text-xl sm:text-1xl text-slate-600 mb-8 max-w-3xl mr-auto leading-relaxed">
            I am a dedicated student with a strong commitment to both education and work. I have a great passion for integrating technology, design, and marketing to support the growth of a creative and intelligent young IT generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-violet-200 to-purple-200 text-violet-700 rounded-full font-semibold hover:from-violet-300 hover:to-purple-300 transition-all transform hover:scale-105 shadow-lg hover:shadow-violet-100"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full font-semibold bg-white text-rose-400 border-2 border-rose-200 transition-all shadow-lg hover:shadow-rose-100 hover:bg-rose-50 hover:scale-105 hover:border-rose-300"
            >
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Photo on the right */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-64 h-80 md:w-72 md:h-96 flex items-center justify-center">
            {/* Decorative frame with soft gradient */}
            <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-r from-purple-200 via-lavender-300 to-peach-200 flex items-center justify-center overflow-hidden shadow-xl">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="object-cover w-full h-full rounded-2xl filter sepia-[0.2] saturate-[0.8] brightness-[1.1] contrast-[0.9]"
                  style={{ zIndex: 2 }}
                />
              </div>
            </div>
            
            {/* Floating hearts/stars decoration */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-lavender-300 to-purple-300 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-peach-300 to-cream-300 rounded-full opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  );
};

export default HeroSection;