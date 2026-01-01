import React from 'react';
import { BUSINESS_INFO } from '../constants';

interface BookingModalProps {
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-lg bg-white text-stone-900 rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        <div className="bg-stone-50 border-b border-stone-100 p-8 flex justify-between items-center text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-serif">Quick Booking</h3>
            <p className="text-stone-500 text-[10px] uppercase tracking-widest mt-1">Lotte Plaza Barber & Salon</p>
          </div>
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <div className="p-4 sm:p-6 bg-stone-50 border border-stone-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center text-center md:text-left">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0 hidden md:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.147-5.122-3.445-6.269-6.27l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.75A2.25 2.25 0 001.5 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Priority Booking</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-serif whitespace-nowrap leading-none text-stone-900">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="w-full md:w-auto px-8 py-3 bg-stone-900 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-amber-800 transition-all text-center rounded shadow-lg"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-100 flex flex-col gap-6">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Weekday</p>
                 <p className="text-lg font-serif text-stone-900">{BUSINESS_INFO.hours.weekday}</p>
               </div>
               <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Weekend</p>
                 <p className="text-lg font-serif text-stone-900">{BUSINESS_INFO.hours.weekend}</p>
               </div>
             </div>
          </div>
        </div>
        
        <div className="bg-stone-50 p-6 text-center border-t border-stone-100">
          <p className="text-[10px] text-stone-400 uppercase tracking-widest italic">Holidays may affect the working hours</p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;