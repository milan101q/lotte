import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="visit" className="bg-[#11100f] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-24">
          
          {/* Visit Information */}
          <div className="space-y-12">
            <div>
              <span className="text-amber-500 text-[10px] font-black tracking-[0.7em] uppercase block mb-6">Concierge</span>
              <h2 className="text-5xl md:text-8xl font-serif italic mb-10 tracking-tighter">Visit Us</h2>
              <p className="text-stone-400 text-lg md:text-2xl font-light leading-relaxed max-w-md">
                Experience precision in person at the <span className="text-stone-100 font-serif italic">Sully Place Shopping Center</span>. A premier destination in Chantilly.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <div className="mt-2 w-6 h-6 flex-shrink-0 text-amber-500 group-hover:scale-110 transition-transform">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl text-stone-100 font-serif leading-tight mb-2 italic">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-stone-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">{BUSINESS_INFO.location}</p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={BUSINESS_INFO.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-12 py-5 bg-white text-stone-900 font-black tracking-[0.3em] uppercase hover:bg-amber-600 hover:text-white transition-all text-[11px] shadow-2xl active:scale-95"
                >
                  Get Directions
                  <svg className="ml-4 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Professional Hours Card */}
          <div className="relative w-full">
            <div className="bg-stone-900/50 backdrop-blur-xl p-10 md:p-16 border border-stone-800 shadow-2xl relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-amber-600"></div>
              <h3 className="text-3xl font-serif mb-12 italic text-amber-500">Service Hours</h3>
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-stone-800 pb-5 group">
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-500 group-hover:text-amber-500 transition-colors mb-2 md:mb-0">Monday — Friday</span>
                  <span className="text-lg font-medium text-stone-100">{BUSINESS_INFO.hours.weekdays}</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-stone-800 pb-5 group">
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-500 group-hover:text-amber-500 transition-colors mb-2 md:mb-0">Saturday — Sunday</span>
                  <span className="text-lg font-medium text-stone-100">{BUSINESS_INFO.hours.weekends}</span>
                </div>
              </div>
              <div className="mt-14">
                 <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="flex items-center justify-center w-full py-5 border border-stone-800 text-center text-[11px] font-black tracking-[0.5em] uppercase hover:bg-white hover:text-stone-900 transition-all group">
                   <svg className="w-4 h-4 mr-4 text-amber-600 group-hover:text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                   {BUSINESS_INFO.phone}
                 </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Bar */}
        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase text-stone-600">
          <div className="flex items-center space-x-4">
             <span className="text-stone-400">© {new Date().getFullYear()}</span>
             <span className="h-1 w-1 bg-stone-800 rounded-full"></span>
             <span>Lotte Plaza Barber & Salon</span>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;