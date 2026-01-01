import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import BookingSection from './components/BookingSection';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900">
      <Navbar onBookClick={openBooking} />
      <main>
        <Hero onBookClick={openBooking} />
        
        <Services onBookClick={openBooking} />
        
        {/* About Section */}
        <section id="about" className="bg-white py-24 md:py-48 overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-50 rounded-full blur-[80px] md:blur-[120px] opacity-60 z-0"></div>
          
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="flex items-center justify-center space-x-6 mb-12">
              <div className="h-[1px] w-12 bg-stone-200"></div>
              <h2 className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-amber-900/40">Our Philosophy</h2>
              <div className="h-[1px] w-12 bg-stone-200"></div>
            </div>
            
            <h3 className="text-3xl md:text-6xl font-serif italic text-stone-800 mb-16 leading-[1.3] md:leading-relaxed">
              "Located in the heart of Chantilly, we bridge the gap between traditional grooming and modern hair design. Every guest is a <span className="text-amber-800/70">masterpiece</span> in progress."
            </h3>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-[1px] bg-stone-900/10 mb-8"></div>
              <p className="font-black tracking-[0.4em] uppercase text-stone-900 text-[10px] md:text-[11px]">— The Lotte Plaza Team</p>
            </div>
          </div>
        </section>

        <BookingSection onBookClick={openBooking} />
      </main>
      <Footer />

      {isBookingOpen && <BookingModal onClose={closeBooking} />}
    </div>
  );
};

export default App;