
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">The Story</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-white">
            LAHIR DARI JALANAN, <br/>UNTUK MASA DEPAN.
          </h3>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            RIFZ bukan sekadar merek pakaian; ini adalah pernyataan gerakan budaya. Dimulai dari sketsa di sudut Pedesaan, kami tumbuh dengan misi untuk menciptakan pakaian yang tahan banting secara kualitas namun tetap progresif secara gaya.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Kami percaya bahwa pakaian adalah perisai sekaligus cermin diri. Itulah mengapa setiap benang, potongan, dan sablonan pada pakaian kami diproses melalui kurasi ketat.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div>
              <h4 className="text-4xl font-black text-white mb-2">100+</h4>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Design Eksklusif</p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-white mb-2">50k+</h4>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Global Community</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 border border-red-600/30 rounded-lg"></div>
          <img 
            src="/images/thestory.png" 
            alt="About RIFZ" 
            className="rounded-lg relative z-10 w-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
