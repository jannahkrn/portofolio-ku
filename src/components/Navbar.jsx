import React, { useState } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors outline-none shadow-none focus:outline-none focus:ring-0 active:outline-none active:ring-0
                    text-slate-600 hover:text-violet-400 hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:-bottom-1 hover:after:h-0.5 hover:after:bg-violet-300 hover:after:rounded-full hover:after:content-[""] active:text-violet-400 active:after:absolute active:after:left-0 active:after:right-0 active:after:-bottom-1 active:after:h-0.5 active:after:bg-violet-300 active:after:rounded-full active:after:content-[""]
                  `}
                  style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-violet-400 hover:bg-violet-50"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-current transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-rose-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:text-violet-400 hover:bg-violet-50 w-full text-left transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;