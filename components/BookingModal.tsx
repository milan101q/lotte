
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
        <div className="bg-stone-50 border-b border-stone-100 p-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-serif">Quick Booking</h3>
            <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">Lotte Plaza Barber & Salon</p>
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
        
        <div className="p-8 space-y-6">
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
            onClick={onClose}
            className="text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-stone-900 transition-colors"
          >
            Close and Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;