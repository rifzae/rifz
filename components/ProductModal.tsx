
import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative bg-zinc-950 border border-white/10 w-full max-w-4xl rounded-sm overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-1/2 aspect-[3/4]">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">{product.category}</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">{product.name}</h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            {product.description} Built for the urban terrain with premium materials and signature RIFZ aesthetics.
          </p>
          
          <div className="mb-10">
            <h4 className="text-white font-black text-2xl mb-2">Rp {product.price.toLocaleString('id-ID')}</h4>
            <p className="text-zinc-500 text-xs uppercase tracking-widest">Tersedia dalam berbagai ukuran (S-XXL)</p>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-white text-black font-black uppercase tracking-widest py-5 hover:bg-red-600 hover:text-white transition-all">
              Tambah ke Keranjang
            </button>
            <button className="w-full border border-white/10 text-white font-black uppercase tracking-widest py-5 hover:bg-white hover:text-black transition-all">
              Cek Stok di Toko
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
