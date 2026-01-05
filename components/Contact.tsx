import React, { useState } from 'react';

const Contact: React.FC = () => {
  // State untuk logika formulir
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Pertanyaan Umum',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle submit dengan simulasi loading
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi kirim data ke server (delay 1.5 detik)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Pertanyaan Umum', message: '' }); // Reset form
      
      // Reset notifikasi sukses setelah 5 detik
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    // Tambahkan ID="contact" agar navbar bisa scroll ke sini
    <div id="contact" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Bagian Kiri: Informasi Kontak */}
          <div>
            <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">Connect</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase text-white">HUBUNGI KAMI</h3>
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

          {/* Bagian Kanan: Form */}
          <div className="bg-zinc-900 p-10 rounded-2xl border border-white/5 relative overflow-hidden">
            {submitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-zinc-900 z-10 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
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
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder-zinc-700" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder-zinc-700" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Subjek</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-red-600 transition-colors appearance-none"
                  >
                    <option>Pertanyaan Umum</option>
                    <option>Layanan Pelanggan</option>
                    <option>Kolaborasi Brand</option>
                    <option>Keluhan & Saran</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Pesan Anda</label>
                  <textarea 
                    required 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-red-600 transition-colors placeholder-zinc-700" 
                    placeholder="Tuliskan pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-5 rounded-sm hover:bg-red-600 hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Kirim Pesan"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
