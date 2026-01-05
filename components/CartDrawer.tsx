import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { items, isOpen, toggleCart, removeFromCart, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={toggleCart}></div>
      
      {/* Panel Keranjang */}
      <div className="relative w-full max-w-md bg-zinc-950 border-l border-white/10 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-black text-white uppercase tracking-wider">Your Cart ({items.length})</h2>
          <button onClick={toggleCart} className="text-zinc-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500">
              <p className="text-lg">Keranjang Anda kosong.</p>
              <button onClick={toggleCart} className="mt-4 text-red-600 font-bold hover:underline">Belanja Sekarang</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartId} className="flex gap-4">
                <div className="w-20 h-24 bg-zinc-900 rounded overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white font-bold">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.cartId)} className="text-zinc-500 hover:text-red-500 text-sm">Remove</button>
                  </div>
                  <p className="text-zinc-400 text-sm mt-1">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                  <p className="text-red-500 font-bold mt-2">Rp {item.price.toLocaleString('id-ID')}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-zinc-900/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400 uppercase tracking-widest text-sm">Subtotal</span>
              <span className="text-white font-black text-xl">Rp {cartTotal.toLocaleString('id-ID')}</span>
            </div>
            <button 
              onClick={() => alert("Redirecting to Payment Gateway (Midtrans/Stripe)...")}
              className="w-full bg-red-600 text-white font-black uppercase tracking-widest py-4 hover:bg-red-700 transition-colors"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
