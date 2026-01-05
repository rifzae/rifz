import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext'; // Pastikan path ini sesuai

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart(); // Mengambil fungsi dari Context
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(''); // State untuk ukuran
  const [error, setError] = useState<string>(''); // State untuk pesan error (jika lupa pilih size)

  // Fungsi: Tambah ke Keranjang
  const handleAddToCart = () => {
    // 1. Validasi: Cek apakah user sudah pilih ukuran
    if (!selectedSize) {
      setError('Mohon pilih ukuran terlebih dahulu.');
      return;
    }

    setIsAdding(true);
    setError('');
    
    // 2. Simulasi delay server (biar terasa processing)
    setTimeout(() => {
      // 3. Masukkan ke Cart Context global
      addToCart(product, selectedSize);
      
      setIsAdding(false);
      onClose(); // Tutup modal agar user bisa lihat Cart Drawer terbuka
    }, 800);
  };

  // Fungsi: Cek Stok Acak
  const handleCheckStock = () => {
    if (!selectedSize) {
      alert("Pilih ukuran dulu untuk cek ketersediaan spesifik.");
      return;
    }
    // Random stock logic
    const stock = Math.floor(Math.random() * 15) + 1;
    alert(`Stok untuk ukuran ${selectedSize} tersedia: ${stock} unit di gudang Jakarta.`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-zinc-950 border border-white/10 w-full max-w-4xl rounded-sm overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300 shadow-2xl">
        
        {/* Tombol Close */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors backdrop-blur-md"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Gambar Produk */}
        <div className="w-full md:w-1/2 aspect-[3/4] bg-zinc-900">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Detail Produk */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto max-h-[90vh] md:max-h-full">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">{product.category}</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">{product.name}</h2>
          
          <h4 className="text-white font-black text-2xl mb-6">Rp {product.price.toLocaleString('id-ID')}</h4>
          
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 border-b border-white/10 pb-8">
            {product.description} Constructed with high-density fabric for durability and comfort using RIFZ signature cutting.
          </p>
          
          {/* Pilihan Ukuran (Size Selector) */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-white">Select Size</span>
              {error && <span className="text-xs text-red-500 font-bold animate-pulse">{error}</span>}
            </div>
            <div className="flex flex-wrap gap-3">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setError(''); // Hilangkan error saat user memilih
                  }}
                  className={`w-12 h-12 flex items-center justify-center font-bold text-sm border transition-all ${
                    selectedSize === size 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-zinc-500 border-zinc-700 hover:border-white hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mt-auto">
            {/* Tombol Tambah ke Keranjang */}
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full font-black uppercase tracking-widest py-5 transition-all flex justify-center items-center gap-2 ${
                isAdding 
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-red-600 hover:text-white'
              }`}
            >
              {isAdding ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Tambah ke Keranjang"
              )}
            </button>
            
            {/* Tombol Cek Stok */}
            <button 
              onClick={handleCheckStock}
              className="w-full border border-white/10 text-zinc-400 font-bold uppercase tracking-widest py-4 text-xs hover:bg-zinc-900 hover:text-white transition-all"
            >
              Cek Ketersediaan di Toko
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
