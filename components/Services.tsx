
import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Barber' | 'Salon' | 'Treatment'>('All');

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const categories: ('All' | 'Barber' | 'Salon' | 'Treatment')[] = ['All', 'Barber', 'Salon', 'Treatment'];

  const getIcon = (category: string) => {
    switch(category) {
      case 'Barber':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M6 3L20 12L6 21V3Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L15 12L6 16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Salon':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M19 4v16M5 4v16M19 12H5M12 4v16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-32 bg-[#faf9f6] text-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="h-px w-12 bg-stone-300"></div>
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-amber-900/60">Master Technicians</span>
            <div className="h-px w-12 bg-stone-300"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif mb-10 text-stone-900 tracking-tight leading-none">
            Signature <span className="italic font-light text-stone-400">Services</span>
          </h2>
          
          {/* Refined Navigation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-[11px] font-black tracking-[0.4em] uppercase transition-all duration-700 rounded-full border ${
                  activeCategory === cat 
                    ? 'bg-stone-900 text-white border-stone-900 shadow-lg' 
                    : 'bg-transparent text-stone-400 border-stone-200 hover:border-stone-400 hover:text-stone-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Circular Mirror Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col items-center text-center cursor-default"
            >
              {/* The "Station Mirror" Card */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center transition-all duration-1000 group-hover:scale-105">
                
                {/* Outer Frame */}
                <div className="absolute inset-0 rounded-full border-[12px] border-stone-100 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_60px_-10px_rgba(146,64,14,0.15)] transition-all"></div>
                
                {/* Burnished Inner Ring */}
                <div className="absolute inset-2 rounded-full border border-stone-200 group-hover:border-amber-800/40 transition-colors duration-700"></div>
                
                {/* Mirror Surface */}
                <div className="absolute inset-[13px] rounded-full bg-white overflow-hidden">
                  {/* Sheen Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-stone-50/0 via-stone-100/30 to-white/60 opacity-50 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out"></div>
                  
                  {/* Service Content Container */}
                  <div className="relative h-full w-full flex flex-col items-center justify-center p-10 z-10">
                    <div className="mb-4 text-stone-300 group-hover:text-amber-900 transition-colors duration-500">
                      {getIcon(service.category)}
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-stone-900 mb-4 leading-tight group-hover:text-amber-950 transition-colors">
                      {service.name}
                    </h3>
                    <div className="w-8 h-px bg-stone-200 mb-4 group-hover:w-12 transition-all group-hover:bg-amber-800/30"></div>
                    <p className="text-[11px] md:text-xs text-stone-400 leading-relaxed font-light tracking-wide max-w-[180px] group-hover:text-stone-600 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Label (Floating outside the circle) */}
                <div className="absolute -bottom-4 bg-stone-900 text-white px-5 py-1.5 rounded-full text-[9px] font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                  {service.category}
                </div>
              </div>

              {/* Action Link beneath circle */}
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="mt-12 inline-flex items-center text-[10px] font-black tracking-[0.5em] uppercase text-stone-400 hover:text-stone-900 transition-all group-hover:tracking-[0.6em]"
              >
                Inquire
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-3 w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        {/* Footer Statement */}
        <div className="mt-40 flex flex-col items-center">
          <div className="text-stone-200 mb-8 scale-150">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <p className="text-stone-400 text-[10px] tracking-[0.6em] uppercase font-black text-center max-w-2xl leading-[2.5]">
            The standards we set are the styles you carry. Excellence in every reflection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
