
import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">Values</h2>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter">VISI & MISI KAMI</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-12 bg-zinc-900 border border-white/5 rounded-2xl hover:border-red-600/50 transition-all group">
          <div className="w-16 h-16 bg-red-600 flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Visi Kami</h4>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Menjadi katalisator global dalam dunia streetwear yang memadukan inovasi teknologi tekstil dengan ekspresi seni kontemporer, menjadikan RIFZ sebagai simbol keberanian dan keaslian.
          </p>
        </div>

        <div className="p-12 bg-zinc-900 border border-white/5 rounded-2xl hover:border-red-600/50 transition-all group">
          <div className="w-16 h-16 bg-white flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="text-3xl font-black mb-6 uppercase tracking-tight">Misi Kami</h4>
          <ul className="space-y-4 text-zinc-400 text-lg">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">—</span>
              Menghasilkan produk berkualitas tinggi dengan material premium yang tahan lama.
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">—</span>
              Mendorong kolaborasi lintas industri dengan seniman, musisi, dan ikon pop culture.
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-3">—</span>
              Membangun komunitas yang inklusif bagi para pencinta streetwear dan seni urban.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
