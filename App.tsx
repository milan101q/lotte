
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
    <div className="min-h-screen">
      <Navbar onBookClick={openBooking} />
      <main>
        <Hero onBookClick={openBooking} />
        
        {/* Subtle Brand Strip */}
        <div className="bg-stone-900 py-10 overflow-hidden border-y border-stone-800">
          <div className="animate-scroll whitespace-nowrap">
            {[1, 2].map(i => (
              <span key={i} className="text-stone-500 text-3xl font-serif tracking-[0.2em] uppercase opacity-40 inline-block px-12">
                Premium Cuts • Expert Coloring • Master Barbering • Salon Luxury • Family Friendly • Walk-ins Welcome
              </span>
            ))}
          </div>
        </div>

        <Services />
        
        {/* About & Testimonial Feature */}
        <section id="about" className="bg-stone-50 py-24 overflow-hidden relative border-b border-stone-200">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-60 z-0"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-amber-800 mb-8">Our Heritage</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16 text-stone-200 mx-auto mb-8">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" />
            </svg>
            <h3 className="text-3xl md:text-4xl font-serif italic text-stone-800 mb-12 leading-snug">
              Located in the heart of Chantilly, we bridge the gap between traditional grooming and modern hair design. Our mission is to provide an inclusive space where every client leaves feeling their absolute best.
            </h3>
            <p className="font-bold tracking-widest uppercase text-stone-900 text-sm">— The Lotte Plaza Team</p>
          </div>
        </section>

        <BookingSection onBookClick={openBooking} />
      </main>
      <Footer />

      {/* Global Quick Booking Modal */}
      {isBookingOpen && <BookingModal onClose={closeBooking} />}
    </div>
  );
};

export default App;
