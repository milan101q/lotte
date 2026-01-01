import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Sticky navbar height adjustment
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Dynamic & Catchy Professional Logo */}
        <div 
          className="flex items-center group cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
            <div className="absolute inset-0 bg-stone-900 rounded-lg transform rotate-45 group-hover:bg-amber-800 transition-colors"></div>
            <span className="relative text-white font-serif text-2xl font-bold italic">L</span>
          </div>
          <div className="ml-4 flex flex-col">
            <span className={`text-xl font-serif font-black tracking-tight leading-none ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
              LOTTE PLAZA
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-800">
              Barber & Salon
            </span>
          </div>
        </div>
        
        {/* Navigation Tabs - Using JS for reliable smooth scroll */}
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
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
            className="px-6 py-2.5 bg-stone-900 text-white hover:bg-amber-800 hover:shadow-2xl transition-all rounded-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.147-5.122-3.445-6.269-6.27l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 001.5 4.5v2.25z" />
            </svg>
            Book Now
          </a>
        </div>
        
        <button className="md:hidden p-2 text-stone-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;