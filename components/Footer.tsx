
import React from 'react';

interface FooterProps {
  onFilterChange: (category: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onFilterChange }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <h1 className="text-4xl font-black tracking-tighter text-white mb-8">RIFZ<span className="text-red-600">.</span></h1>
            <p className="text-zinc-500 max-w-xs mb-8">
              Mendefinisikan ulang fashion urban dengan standar premium. Berbasis di Jakarta, menyebar ke seluruh dunia.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all">IG</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all">TW</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all">TK</a>
            </div>
          </div>
          
          <div>
            <h6 className="text-white font-black uppercase tracking-widest text-xs mb-6">Shop</h6>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><button onClick={() => onFilterChange('T-Shirt')} className="hover:text-white text-left w-full">T-Shirts</button></li>
              <li><button onClick={() => onFilterChange('Hoodie')} className="hover:text-white text-left w-full">Hoodies</button></li>
              <li><button onClick={() => onFilterChange('Jacket')} className="hover:text-white text-left w-full">Jackets</button></li>
              <li><button onClick={() => onFilterChange('Collaboration')} className="hover:text-white text-left w-full">Limited Edition</button></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-black uppercase tracking-widest text-xs mb-6">Info</h6>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><button onClick={() => scrollTo('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => scrollTo('faq')} className="hover:text-white">Shipping & Size Guide</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-white">Contact</button></li>
              <li><button onClick={() => scrollTo('lookbook')} className="hover:text-white">Lookbook</button></li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-black uppercase tracking-widest text-xs mb-6">Legal</h6>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">© 2024 RIFZ OFFICIAL. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 opacity-30" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 opacity-30" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-6 opacity-30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
