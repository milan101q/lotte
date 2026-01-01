import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6 md:py-10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-1000 group-hover:rotate-[360deg]">
              <div className="absolute inset-0 bg-stone-900 rounded-lg transform rotate-45 group-hover:bg-amber-900 transition-colors"></div>
              <span className="relative text-white font-serif text-xl md:text-2xl font-bold italic">L</span>
            </div>
            <div className="ml-5 flex flex-col">
              <span className="text-lg md:text-xl font-serif font-black tracking-tighter leading-none text-stone-900">
                LOTTE PLAZA
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-amber-800">
                Barber & Salon
              </span>
            </div>
          </div>
          
          {/* Desktop Tabs */}
          <div className="hidden lg:flex space-x-12 items-center">
            <div className="flex space-x-10 text-[11px] font-black tracking-[0.3em] uppercase text-stone-500">
              <button onClick={() => scrollToSection('services')} className="nav-link hover:text-stone-900 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="nav-link hover:text-stone-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('visit')} className="nav-link hover:text-stone-900 transition-colors">Visit</button>
            </div>
            <button 
              onClick={onBookClick}
              className="btn-shimmer px-10 py-4 bg-stone-900 text-white hover:bg-amber-900 hover:shadow-2xl transition-all rounded-sm font-bold text-[11px] tracking-[0.4em] uppercase"
            >
              Book Now
            </button>
          </div>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-stone-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span className={`block h-0.5 bg-stone-900 transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-stone-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`block h-0.5 bg-stone-900 transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-[95] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col p-10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mt-20 flex flex-col space-y-8">
            <button onClick={() => scrollToSection('services')} className="text-4xl font-serif italic text-stone-800 text-left">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-4xl font-serif italic text-stone-800 text-left">About</button>
            <button onClick={() => scrollToSection('visit')} className="text-4xl font-serif italic text-stone-800 text-left">Visit</button>
          </div>
          <div className="mt-auto">
            <button 
              onClick={onBookClick}
              className="w-full py-5 bg-stone-900 text-white font-black tracking-[0.4em] uppercase rounded-sm shadow-xl active:scale-95 transition-transform"
            >
              Book Appointment
            </button>
            <p className="mt-8 text-[10px] font-bold text-stone-400 uppercase tracking-widest text-center">Chantilly, VA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;