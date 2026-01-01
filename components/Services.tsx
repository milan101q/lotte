
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
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M6 3L20 12L6 21V3Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8L15 12L6 16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Salon':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M19 4v16M5 4v16M19 12H5M12 4v16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-32 bg-[#faf9f6] text-stone-900 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="h-px w-8 bg-stone-300"></div>
            <span className="text-[11px] font-bold tracking-[0.6em] uppercase text-amber-900/60">Professional Grooming</span>
            <div className="h-px w-8 bg-stone-300"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-stone-900 tracking-tight leading-tight">
            Exceptional <span className="italic font-light text-stone-600">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-stone-500 font-light leading-relaxed mb-16 text-lg">
            Where tradition meets modern artistry. Explore our curated menu of hair and grooming treatments designed for the discerning individual.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-3 text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-700 relative ${
                  activeCategory === cat 
                    ? 'text-stone-900' 
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-900"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredServices.map((service) => (
            <a 
              key={service.id} 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="group relative flex flex-col bg-white border border-stone-200/60 p-10 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:border-stone-300 hover:-translate-y-2 no-underline"
            >
              {/* Category & Icon Strip */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-3 text-stone-400 group-hover:text-amber-900 transition-colors duration-700">
                  {getIcon(service.category)}
                  <span className="text-[9px] font-black tracking-[0.4em] uppercase">
                    {service.category}
                  </span>
                </div>
                <span className="text-stone-300 font-serif italic text-sm group-hover:text-stone-500 transition-colors">
                  {service.duration}
                </span>
              </div>

              {/* Service Details */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight group-hover:text-amber-950 transition-colors duration-700">
                    {service.name}
                  </h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed font-light mb-12 italic opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>

              {/* Footer: Price & Action */}
              <div className="mt-auto pt-8 border-t border-stone-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Starting from</span>
                  <span className="text-xl font-serif text-stone-900 group-hover:text-amber-900 transition-colors">
                    {service.price}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>

              {/* Sophisticated Background Accent (Hidden, reveal on hover) */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-40 transition-all duration-1000 scale-0 group-hover:scale-100"></div>
            </a>
          ))}
        </div>
        
        {/* Quality Seal */}
        <div className="mt-32 flex flex-col items-center">
          <div className="flex items-center space-x-6 mb-10 opacity-30">
            <div className="h-px w-24 bg-stone-900"></div>
            <div className="text-2xl font-serif italic text-stone-900">Est. 1998</div>
            <div className="h-px w-24 bg-stone-900"></div>
          </div>
          <p className="text-stone-400 text-sm tracking-[0.3em] uppercase font-bold text-center max-w-lg leading-loose">
            Premium Products • Master Craftsmanship • Inclusive Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
