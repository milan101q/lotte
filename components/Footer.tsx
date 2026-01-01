
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl font-serif mb-8 text-white">Visit Us</h2>
            <div className="space-y-12">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-stone-400 mb-2">Location</h4>
                  <p className="text-xl text-stone-100 mb-1">{BUSINESS_INFO.address}</p>
                  <p className="text-stone-400 mb-4">{BUSINESS_INFO.location}</p>
                  <a 
                    href={BUSINESS_INFO.mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-amber-800 hover:bg-amber-700 text-white font-bold tracking-widest text-xs uppercase transition-all rounded-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.147-5.122-3.445-6.269-6.27l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 001.5 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-stone-400 mb-2">Call Us</h4>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-3xl font-serif text-white hover:text-amber-400 transition-colors block">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-4 border-t border-stone-800">
                <div className="w-full">
                  <h4 className="font-bold uppercase tracking-widest text-xs text-stone-400 mb-6">Facilities & Accessibility</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {BUSINESS_INFO.facilities.map((f, i) => (
                      <div key={i} className="flex items-center space-x-3 text-stone-300">
                        <span className="w-6 h-6 flex items-center justify-center bg-stone-800 rounded-full text-[10px] text-amber-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <span className="text-sm">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] bg-stone-800 relative group overflow-hidden">
             {/* Map Placeholder with realistic imagery */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512690196152-722749dd4745?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale opacity-30 group-hover:grayscale-0 transition-all duration-1000"></div>
             <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 bg-stone-900/40">
               <div className="bg-white text-stone-900 p-8 shadow-2xl rounded-sm max-w-sm border-t-4 border-amber-800">
                  <h3 className="text-2xl font-serif mb-4">Hours</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between border-b border-stone-100 pb-2">
                      <span className="text-stone-500 uppercase text-xs font-bold tracking-widest">Mon — Fri</span>
                      <span className="text-stone-900 font-medium">{BUSINESS_INFO.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-100 pb-2">
                      <span className="text-stone-500 uppercase text-xs font-bold tracking-widest">Sat — Sun</span>
                      <span className="text-stone-900 font-medium">{BUSINESS_INFO.hours.weekends}</span>
                    </div>
                  </div>
                  <p className="text-stone-500 text-sm mb-6 italic">* Note: Holidays might affect these hours.</p>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="block w-full py-4 bg-stone-900 text-white text-center font-bold tracking-widest uppercase hover:bg-stone-700 transition-all shadow-lg">
                    Call for Availability
                  </a>
               </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Lotte Plaza Barber & Salon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;