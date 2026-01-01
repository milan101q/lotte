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

  return (
    <section id="services" className="section-padding py-24 md:py-40 bg-[#fdfdfc] text-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-28">
          <span className="text-[10px] md:text-xs font-black tracking-[0.8em] uppercase text-amber-900/50 block mb-6">Master Craftsmanship</span>
          <h2 className="text-5xl md:text-8xl font-serif mb-12 text-stone-900 tracking-tight leading-none">
            Signature <span className="italic font-light text-stone-400">Style</span>
          </h2>
          
          {/* Professional Tab System */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative px-6 py-3 text-[11px] font-bold tracking-[0.3em] uppercase transition-all ${
                  activeCategory === cat 
                    ? 'text-stone-900' 
                    : 'text-stone-400 hover:text-stone-700'
                }`}
              >
                {cat}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-stone-900 transition-transform duration-500 origin-left ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-x-12 lg:gap-x-20 lg:gap-y-32">
          {filteredServices.map((service) => (
            <div key={service.id} className="group flex flex-col items-center">
              {/* Refined Mirror Card - Responsive Sizes */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full flex items-center justify-center transition-all duration-700 group-hover:scale-[1.03]">
                
                {/* Frame */}
                <div className="absolute inset-0 rounded-full bg-stone-100 border border-stone-200/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] group-hover:shadow-[0_40px_80px_-20px_rgba(146,64,14,0.15)] transition-all"></div>
                
                {/* Content Container */}
                <div className="absolute inset-4 sm:inset-5 rounded-full bg-white flex flex-col items-center justify-center p-10 md:p-14 z-10 text-center overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-stone-50 group-hover:bg-amber-900/10 transition-colors"></div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-900 mb-4 leading-tight">
                    {service.name}
                  </h3>
                  
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-[10px] font-black tracking-widest text-amber-900">{service.price}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-200"></span>
                    <span className="text-[10px] font-bold text-stone-400 tracking-widest">{service.duration}</span>
                  </div>

                  <p className="text-[11px] md:text-xs text-stone-500 leading-relaxed font-light tracking-wide italic max-w-[240px]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <button 
                onClick={onBookClick}
                className="mt-12 text-[10px] font-black tracking-[0.5em] uppercase text-stone-300 hover:text-stone-900 transition-all border-b border-transparent hover:border-amber-800 pb-1"
              >
                Select Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;