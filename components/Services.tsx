import React, { useState } from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onBookClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Barber' | 'Salon' | 'Treatment'>('All');

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const categories: ('All' | 'Barber' | 'Salon' | 'Treatment')[] = ['All', 'Barber', 'Salon', 'Treatment'];

  const getIcon = (category: string) => {
    switch(category) {
      case 'Barber':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M6 3L20 12L6 21V3Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L15 12L6 16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Salon':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M19 4v16M5 4v16M19 12H5M12 4v16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-32 bg-[#faf9f6] text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="text-center mb-28">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="h-px w-16 bg-stone-300"></div>
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-amber-900/60">Master Technicians</span>
            <div className="h-px w-16 bg-stone-300"></div>
          </div>
          <h2 className="text-6xl md:text-9xl font-serif mb-10 text-stone-900 tracking-tighter leading-none">
            Signature <span className="italic font-light text-stone-400">Services</span>
          </h2>
          
          {/* Refined Navigation */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-500 ${
                  activeCategory === cat 
                    ? 'text-stone-900' 
                    : 'text-stone-300 hover:text-stone-500'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Circular Mirror Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-32">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col items-center text-center"
            >
              {/* The "Station Mirror" Card */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center transition-all duration-1000 group-hover:scale-105">
                
                {/* Outer Metallic Frame (Gradient) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_40px_80px_-20px_rgba(146,64,14,0.2)] transition-all"></div>
                
                {/* Burnished Bronze Inner Ring */}
                <div className="absolute inset-3 rounded-full border-[1px] border-amber-900/10 group-hover:border-amber-900/30 transition-colors duration-700"></div>
                <div className="absolute inset-4 rounded-full border-[1px] border-stone-200"></div>
                
                {/* Mirror Surface */}
                <div className="absolute inset-[18px] rounded-full bg-white overflow-hidden shadow-inner">
                  {/* Sheen Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-stone-50/0 via-stone-100/20 to-white/80 opacity-60 pointer-events-none group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out"></div>
                  
                  {/* Service Content Container */}
                  <div className="relative h-full w-full flex flex-col items-center justify-center p-12 z-10">
                    <div className="mb-6 text-stone-200 group-hover:text-amber-900 transition-colors duration-700">
                      {getIcon(service.category)}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight group-hover:text-amber-950 transition-colors">
                      {service.name}
                    </h3>
                    <div className="w-10 h-px bg-stone-100 mb-6 group-hover:w-16 transition-all group-hover:bg-amber-800/20"></div>
                    <p className="text-xs md:text-sm text-stone-400 leading-relaxed font-light tracking-wide max-w-[220px] group-hover:text-stone-600 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Floating Category Tag */}
                <div className="absolute -bottom-2 bg-stone-950 text-stone-100 px-6 py-2 rounded-full text-[8px] font-black tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 shadow-2xl z-20">
                  {service.category}
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={onBookClick}
                className="mt-14 inline-flex items-center text-[10px] font-black tracking-[0.5em] uppercase text-stone-300 hover:text-stone-900 transition-all group-hover:tracking-[0.6em] group-hover:text-stone-600"
              >
                Book This Look
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-4 w-3 h-3 translate-x-0 group-hover:translate-x-2 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        
        {/* Signature Statement */}
        <div className="mt-48 flex flex-col items-center">
          <div className="text-amber-900/20 mb-12 scale-150">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 0L24.5 15.5H40L27.5 25L32 40L20 30.5L8 40L12.5 25L0 15.5H15.5L20 0Z" />
            </svg>
          </div>
          <p className="text-stone-400 text-[11px] tracking-[0.7em] uppercase font-black text-center max-w-2xl leading-[2.8]">
            Tradition redefined. Every cut a masterpiece. Every guest a priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;