
import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../constants';

const BookingSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section id="booking" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-stone-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block p-3 rounded-full bg-amber-800/20 mb-6 border border-amber-800/30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Ready for a New Look?</h2>
        <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Secure your spot with our master barbers and stylists. Whether it's a quick trim or a complete transformation, we're here to make it happen.
        </p>
        
        <button 
          onClick={toggleModal}
          className="group relative inline-flex items-center justify-center px-12 py-5 font-bold tracking-[0.2em] uppercase bg-amber-800 text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-[0_0_30px_rgba(146,64,14,0.4)] hover:-translate-y-1 active:scale-95"
        >
          <span className="relative z-10">Book Your Appointment</span>
          <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </button>
      </div>

      {/* Simulated Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={toggleModal}
          ></div>
          
          <div className="relative w-full max-w-lg bg-white text-stone-900 rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
            <div className="bg-stone-50 border-b border-stone-100 p-8 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-serif">Quick Booking</h3>
                <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">Lotte Plaza Barber & Salon</p>
              </div>
              <button 
                onClick={toggleModal}
                className="text-stone-400 hover:text-stone-900 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <p className="text-stone-600 leading-relaxed italic">
                Our online booking system is currently being upgraded to serve you better. For immediate scheduling and the best availability, please call our front desk directly.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-stone-50 border border-stone-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.147-5.122-3.445-6.269-6.27l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 001.5 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Call to Schedule</p>
                      <p className="text-lg font-serif">{BUSINESS_INFO.phone}</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                    className="px-6 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-amber-800 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 flex flex-col gap-3">
                 <div className="flex justify-between text-xs font-medium">
                    <span className="text-stone-400">Monday - Friday</span>
                    <span>{BUSINESS_INFO.hours.weekdays}</span>
                 </div>
                 <div className="flex justify-between text-xs font-medium">
                    <span className="text-stone-400">Saturday - Sunday</span>
                    <span>{BUSINESS_INFO.hours.weekends}</span>
                 </div>
              </div>
            </div>
            
            <div className="bg-stone-50 p-6 text-center">
              <button 
                onClick={toggleModal}
                className="text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-stone-900 transition-colors"
              >
                Close and Return
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingSection;
