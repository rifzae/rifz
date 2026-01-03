
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Visual reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">Connect</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">HUBUNGI KAMI</h3>
          <p className="text-zinc-400 text-lg mb-12">
            Punya pertanyaan tentang pesanan, kolaborasi, atau sekadar ingin menyapa? Tim kami siap membantu Anda 24/7.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-lg border border-white/10">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Email Support</h5>
                <p className="text-zinc-400">hello@rifz.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-lg border border-white/10">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-1">HQ Address</h5>
                <p className="text-zinc-400">Jl. Senopati No. 88, Kebayoran Baru<br/>Jakarta Selatan, 12110</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-10 rounded-2xl border border-white/5 relative">
          {submitted ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-zinc-900 rounded-2xl z-10 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">PESAN TERKIRIM!</h4>
              <p className="text-zinc-400">Terima kasih telah menghubungi RIFZ. Tim kami akan segera merespons dalam 24 jam.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-red-600 hover:text-white transition-colors"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Nama Lengkap</label>
                  <input required type="text" className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                  <input required type="email" className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Subjek</label>
                <select className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-red-600 transition-colors">
                  <option>Pertanyaan Umum</option>
                  <option>Layanan Pelanggan</option>
                  <option>Kolaborasi Brand</option>
                  <option>Keluhan & Saran</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Pesan Anda</label>
                <textarea required rows={4} className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Tuliskan pesan Anda di sini..."></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-red-600 hover:text-white transition-all">
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
