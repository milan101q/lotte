
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
          className="w-full h-full object-cover grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <span className="block text-amber-800 font-semibold tracking-[0.3em] uppercase text-sm mb-4">Crafting Confidence Daily</span>
          <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[1.1] mb-6">
            Elevate Your <br />
            <span className="italic font-light">Signature Style.</span>
          </h1>
          <p className="text-stone-700 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Experience the art of grooming and hair design at Chantilly's premier Barber & Salon destination. Modern techniques, classic values.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-10 py-4 bg-stone-900 text-white text-center font-medium tracking-wider uppercase hover:bg-stone-800 transition-all shadow-xl"
            >
              Our Services
            </button>
            <button 
              onClick={onBookClick}
              className="px-10 py-4 border-2 border-stone-900 text-stone-900 text-center font-medium tracking-wider uppercase hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Book Now
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('services')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;