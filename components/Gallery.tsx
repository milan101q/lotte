import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1621605815841-aa897af066c4?auto=format&fit=crop&q=80&w=800", title: "Modern Fade" },
    { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", title: "Classic Salon Blowout" },
    { url: "https://images.unsplash.com/photo-1593702295094-ada74bc19dc9?auto=format&fit=crop&q=80&w=800", title: "Beard Sculpture" },
    { url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800", title: "Premium Color Work" },
    { url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800", title: "Precision Lining" },
    { url: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&q=80&w=800", title: "Styling Perfection" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900">Our Portfolio</h2>
            <p className="text-stone-500 text-lg">
              A glimpse into the craftsmanship we deliver every day at Lotte Plaza Barber & Salon.
            </p>
          </div>
          <a href="#" className="inline-block text-stone-900 font-bold tracking-widest uppercase border-b-2 border-amber-800 pb-1 hover:text-amber-800 transition-all">
            Follow Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/5] bg-stone-200">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white text-2xl font-serif mb-2">{img.title}</h4>
                  <p className="text-white/80 text-sm tracking-widest uppercase">Lotte Plaza Style</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;