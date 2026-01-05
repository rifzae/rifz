
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder / Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Streetwear Hero" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h3 className="text-red-600 font-bold uppercase tracking-[0.5em] mb-4 animate-bounce">New Collection Available</h3>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
          DEFY THE <br/><span className="text-gradient">ORDINARY</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          Mendefinisikan ulang batas antara fashion urban dan kenyamanan premium. Temukan identitasmu bersama RIFZ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-sm hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            Explore Collection
          </a>
          <a href="#collab" className="px-10 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all duration-300">
            Collab Series
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <p className="text-xs font-mono text-zinc-600 rotate-90 origin-left">EST. 2024 / JAKARTA CITY</p>
      </div>
    </div>
  );
};

export default Hero;
