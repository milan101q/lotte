
import React from 'react';

interface BookingSectionProps {
  onBookClick: () => void;
}

const BookingSection: React.FC<BookingSectionProps> = ({ onBookClick }) => {
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
          onClick={onBookClick}
          className="group relative inline-flex items-center justify-center px-12 py-5 font-bold tracking-[0.2em] uppercase bg-amber-800 text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-[0_0_30px_rgba(146,64,14,0.4)] hover:-translate-y-1 active:scale-95"
        >
          <span className="relative z-10">Book Your Appointment</span>
          <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </button>
      </div>
    </section>
  );
};

export default BookingSection;