
import React from 'react';

const Hero: React.FC = () => {
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
      {/* Background Image */}
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
            <a 
              href="tel:7032631778" 
              className="px-10 py-4 border-2 border-stone-900 text-stone-900 text-center font-medium tracking-wider uppercase hover:bg-stone-900 hover:text-white transition-all flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.147-5.122-3.445-6.269-6.27l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 001.5 4.5v2.25z" />
              </svg>
              Book Now
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('services')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
