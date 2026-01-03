
import React from 'react';
import { COLLABORATIONS } from '../constants';

interface CollaborationSectionProps {
  onFilterChange: (category: string) => void;
}

const CollaborationSection: React.FC<CollaborationSectionProps> = ({ onFilterChange }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">Exclusive</h2>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">KOLABORASI MAHAKARYA</h3>
        <p className="text-zinc-500 max-w-2xl mx-auto mt-6">
          Kami menyatukan visi dengan para kreator terbaik dunia untuk menciptakan koleksi yang tak terlupakan.
        </p>
      </div>

      <div className="space-y-24">
        {COLLABORATIONS.map((collab, index) => (
          <div 
            key={collab.id} 
            className={`flex flex-col lg:items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            <div className="flex-1 relative group overflow-hidden rounded-xl">
              <img 
                src={collab.image} 
                alt={collab.partner}
                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                {collab.type} Edition
              </span>
              <h4 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                RIFZ <br/>× {collab.partner}
              </h4>
              <p className="text-zinc-400 text-xl leading-relaxed">
                {collab.description}
              </p>
              <button 
                onClick={() => onFilterChange('Collaboration')}
                className="group flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm pt-4"
              >
                View Collection
                <span className="w-12 h-[2px] bg-red-600 group-hover:w-20 transition-all"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationSection;
