import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleMobileBookClick = () => {
    onBookClick();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div 
            className="flex items-center group cursor-pointer" 
            onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false); }}
          >
            <div className="relative w-10 h-10 md:w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <div className="absolute inset-0 bg-stone-900 rounded-lg transform rotate-45 group-hover:bg-amber-800 transition-colors"></div>
              <span className="relative text-white font-serif text-xl md:text-2xl font-bold italic">L</span>
            </div>
            <div className="ml-3 md:ml-4 flex flex-col">
              <span className={`text-lg md:text-xl font-serif font-black tracking-tight leading-none text-stone-900`}>
                LOTTE PLAZA
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-amber-800">
                Barber & Salon
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center text-xs font-bold tracking-[0.2em] uppercase">
            <a 
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-800 transition-colors border-b-2 border-transparent hover:border-amber-800 pb-1 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 mr-1.5 mb-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Get Directions
            </a>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:text-amber-800 transition-colors border-b-2 border-transparent hover:border-amber-800 pb-1"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-amber-800 transition-colors border-b-2 border-transparent hover:border-amber-800 pb-1"
            >
              About
            </button>
            <button 
              onClick={onBookClick}
              className="px-6 py-2.5 bg-stone-900 text-white hover:bg-amber-800 hover:shadow-2xl transition-all rounded-sm flex items-center font-bold tracking-[0.2em] uppercase"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Book Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-stone-900 focus:outline-none relative z-[70]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-stone-900/98 backdrop-blur-xl transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-12 px-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-4xl font-serif italic text-white hover:text-amber-500 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-4xl font-serif italic text-white hover:text-amber-500 transition-colors"
          >
            Heritage
          </button>
          <a 
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-serif italic text-white hover:text-amber-500 transition-colors"
          >
            Visit Us
          </a>
          <div className="w-16 h-px bg-stone-700"></div>
          <button 
            onClick={handleMobileBookClick}
            className="w-full py-5 bg-amber-800 text-white font-bold tracking-[0.4em] uppercase shadow-2xl active:scale-95 transition-transform"
          >
            Book Now
          </button>
          <div className="flex flex-col items-center text-stone-400 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest">Questions?</span>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-serif text-stone-200">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;