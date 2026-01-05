import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Import Context Keranjang

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Mengambil fungsi toggleCart dan jumlah barang (cartCount) dari Context
  const { toggleCart, cartCount } = useCart();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Tentang' },
    { id: 'products', label: 'Koleksi' },
    { id: 'collab', label: 'Kolaborasi' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleShopNowClick = () => {
    const productSection = document.getElementById('products');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-black tracking-tighter text-white">RIFZ<span className="text-red-600">.</span></h1>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link text-sm font-bold uppercase tracking-widest transition-colors ${
                    activeSection === item.id ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Right Actions (Shop Now & Cart) */}
          <div className="hidden md:flex items-center space-x-6">
             <button 
               onClick={handleShopNowClick}
               className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors"
             >
               Shop Now
             </button>

             {/* Tombol Cart Desktop */}
             <button onClick={toggleCart} className="relative group text-zinc-400 hover:text-white transition-colors p-1">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               {cartCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black animate-in zoom-in duration-300">
                   {cartCount}
                 </span>
               )}
             </button>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center gap-5">
            {/* Tombol Cart Mobile (Selalu terlihat) */}
            <button onClick={toggleCart} className="relative text-zinc-400 hover:text-white p-1">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               {cartCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-in zoom-in">
                   {cartCount}
                 </span>
               )}
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-zinc-400 hover:text-white uppercase tracking-widest border-b border-white/5 last:border-0"
              >
                {item.label}
              </a>
            ))}
            {/* Tambahan Link Shop Now di Menu Mobile */}
            <button 
               onClick={() => { handleShopNowClick(); setIsOpen(false); }}
               className="w-full text-left px-3 py-4 text-base font-bold text-red-600 hover:text-white uppercase tracking-widest"
             >
               Shop Now
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
