
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Bagaimana cara menentukan ukuran yang pas?",
      a: "Kami menyediakan 'Size Chart' di setiap halaman produk. Produk RIFZ umumnya memiliki fitting 'Oversized', jadi jika Anda menginginkan fitting yang lebih pas (true to size), kami sarankan turun satu ukuran."
    },
    {
      q: "Apakah RIFZ melakukan pengiriman internasional?",
      a: "Ya, kami mengirim ke seluruh dunia. Biaya pengiriman akan otomatis terhitung saat checkout berdasarkan lokasi Anda."
    },
    {
      q: "Bagaimana kebijakan pengembalian barang?",
      a: "Kami menerima pengembalian atau penukaran dalam waktu 7 hari setelah barang diterima, dengan syarat hangtag masih terpasang dan produk belum dicuci/digunakan."
    },
    {
      q: "Kapan koleksi kolaborasi berikutnya rilis?",
      a: "Pastikan Anda berlangganan newsletter kami atau ikuti Instagram @RIFZ.OFFICIAL untuk mendapatkan akses awal ke setiap drop kolaborasi."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">Support</h2>
        <h3 className="text-4xl font-black tracking-tighter uppercase">FAQ</h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-white/10 bg-black overflow-hidden rounded-lg">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900 transition-colors"
            >
              <span className="font-bold text-lg text-white">{faq.q}</span>
              <svg 
                className={`w-5 h-5 text-red-600 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="p-6 pt-0 text-zinc-400 border-t border-white/5 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
