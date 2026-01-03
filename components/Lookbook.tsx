
import React from 'react';

const Lookbook: React.FC = () => {
  const images = [
    'https://picsum.photos/seed/look1/800/1000',
    'https://picsum.photos/seed/look2/800/600',
    'https://picsum.photos/seed/look3/800/600',
    'https://picsum.photos/seed/look4/800/1000',
    'https://picsum.photos/seed/look5/800/600',
    'https://picsum.photos/seed/look6/800/1000',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-20">
        <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">Aesthetic</h2>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">LOOKBOOK 2024</h3>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <div key={i} className="relative group overflow-hidden rounded-sm break-inside-avoid">
            <img 
              src={src} 
              alt={`Lookbook ${i}`} 
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
               <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Winter / Jakarta</span>
               <h4 className="text-white font-black text-2xl tracking-tighter">STREET AUTHENTICITY</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lookbook;
