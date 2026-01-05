import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  // Ambil data dan fungsi dari Context (termasuk clearCart)
  const { items, isOpen, toggleCart, removeFromCart, clearCart, cartTotal } = useCart();
  
  // State lokal untuk animasi checkout
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fungsi Logika Checkout
  const handleCheckout = () => {
    setIsCheckingOut(true);

    // 1. Simulasi proses pembayaran ke Gateway (3 detik)
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsSuccess(true);
      clearCart(); // Kosongkan keranjang belanja
      
      // 2. Tutup drawer otomatis setelah menampilkan pesan sukses selama 3 detik
      setTimeout(() => {
        setIsSuccess(false);
        toggleCart();
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Overlay Gelap (Klik untuk tutup) */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleCart}></div>
      
      {/* Panel Keranjang (Drawer) */}
      <div className="relative w-full max-w-md bg-zinc-950 border-l border-white/10 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* === HEADER === */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-zinc-900/50">
          <h2 className="text-xl font-black text-white uppercase tracking-wider">
            {isSuccess ? 'Order Status' : `Your Cart (${items.length})`}
          </h2>
          <button onClick={toggleCart} className="text-zinc-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* === CONTENT AREA === */}
        <div className="flex-1 overflow-y-auto p-6 relative">
          
          {/* KONDISI 1: PEMBAYARAN SUKSES */}
          {isSuccess ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">PAYMENT SUCCESS!</h3>
              <p className="text-zinc-400 mb-6">Terima kasih. Pesanan Anda sedang diproses dan akan segera dikirim.</p>
              <div className="text-xs font-mono text-zinc-600 bg-zinc-900 px-4 py-2 rounded border border-white/5">
                ORDER ID: #RIFZ-{Math.floor(Math.random() * 10000)}
              </div>
            </div>
          ) : (
            // KONDISI 2: TAMPILAN KERANJANG NORMAL
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-500">
                  <svg className="w-16 h-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-lg font-medium">Keranjang Anda kosong.</p>
                  <button onClick={toggleCart} className="mt-4 text-red-600 font-bold hover:underline uppercase tracking-widest text-sm">
                    Mulai Belanja
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.cartId} className="flex gap-4 group">
                      {/* Gambar Produk */}
                      <div className="w-20 h-24 bg-zinc-900 rounded overflow-hidden flex-shrink-0 border border-white/5">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      
                      {/* Info Produk */}
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-white font-bold text-sm uppercase tracking-wide line-clamp-1">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.cartId)} 
                              className="text-zinc-600 hover:text-red-500 transition-colors p-1"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-zinc-500 text-xs mt-1">Size: {item.selectedSize}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <p className="text-zinc-400 text-xs">Qty: {item.quantity}</p>
                          <p className="text-white font-bold text-sm">Rp {item.price.toLocaleString('id-ID')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* === FOOTER ACTIONS === */}
        {/* Hanya tampil jika tidak sedang sukses & keranjang ada isinya */}
        {!isSuccess && items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-zinc-900 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-zinc-400 uppercase tracking-widest text-xs font-bold">Subtotal</span>
              <span className="text-white font-black text-xl">Rp {cartTotal.toLocaleString('id-ID')}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-white text-black font-black uppercase tracking-widest py-4 hover:bg-red-600 hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3 group"
            >
              {isCheckingOut ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Checkout Securely
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-zinc-600 mt-4 uppercase tracking-wider">
              Secure Encrypted Payment by Midtrans
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
