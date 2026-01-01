import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
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
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2000" 
          alt="Barbershop Atmosphere" 
          className="w-full h-full object-cover grayscale-[0.3] md:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-stone-50/95 via-stone-50/70 md:via-stone-50/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <span className="block text-amber-800 font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm mb-4 md:mb-6">Crafting Confidence Daily</span>
          <h1 className="hero-title text-5xl md:text-8xl lg:text-9xl font-serif text-stone-900 leading-[1.1] mb-6 md:mb-10 tracking-tight">
            Elevate Your <br />
            <span className="italic font-light text-stone-400">Signature Style.</span>
          </h1>
          <p className="text-stone-600 text-base md:text-xl mb-10 md:mb-14 max-w-lg leading-relaxed font-light">
            Experience the art of grooming and hair design at Chantilly's premier Barber & Salon destination. Modern techniques, classic values.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-12 py-5 bg-stone-900 text-white text-center font-bold tracking-[0.2em] uppercase hover:bg-stone-800 transition-all shadow-2xl"
            >
              Services
            </button>
            <button 
              onClick={onBookClick}
              className="px-12 py-5 border-[1.5px] border-stone-900 text-stone-900 text-center font-bold tracking-[0.2em] uppercase hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('services')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;