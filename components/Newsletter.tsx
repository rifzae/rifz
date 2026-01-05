import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman refresh otomatis
    
    if (!email.trim()) {
      alert("Mohon masukkan alamat email yang valid.");
      return;
    }

    // Simulasi pengiriman data ke server
    alert(`Welcome to the Elite! Email ${email} telah berhasil didaftarkan.`);
    setEmail(''); // Reset kolom input setelah sukses
  };

  return (
    <div className="bg-red-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">JOIN THE ELITE LIST</h3>
            <p className="text-red-100 text-lg">Dapatkan info drop eksklusif, diskon awal, dan kabar kolaborasi terbaru langsung di inbox Anda.</p>
          </div>
          <div className="w-full max-w-md">
            <form onSubmit={handleJoin} className="flex gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                className="flex-1 bg-white/20 border-2 border-white/30 rounded-full px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all"
                required
              />
              <button type="submit" className="bg-white text-red-600 font-black px-8 py-4 rounded-full uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
                Join
              </button>
            </form>
            <p className="text-red-200 text-[10px] mt-4 uppercase tracking-widest text-center lg:text-left">No spam. Only high-quality fashion updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
