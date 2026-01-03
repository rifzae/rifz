
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">Voice</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter">APA KATA MEREKA?</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item) => (
          <div key={item.id} className="bg-zinc-900/50 p-10 border border-white/5 rounded-sm flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-lg italic leading-relaxed mb-10">
                "{item.content}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full grayscale" />
              <div>
                <h5 className="text-white font-bold text-sm uppercase tracking-widest">{item.name}</h5>
                <p className="text-zinc-500 text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
