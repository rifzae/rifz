
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductCatalogProps {
  filter: string;
  setFilter: (filter: string) => void;
  onViewDetail: (product: Product) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ filter, setFilter, onViewDetail }) => {
  const categories = ['All', 'T-Shirt', 'Jacket', 'Hoodie', 'Collaboration'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4">Store</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter">KOLEKSI TERBARU</h3>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                filter === cat 
                  ? 'bg-white text-black border-white' 
                  : 'text-zinc-500 border-white/10 hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer" onClick={() => onViewDetail(product)}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900 mb-6">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-black px-8 py-3 font-black text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Detail
                </button>
              </div>
              {product.category === 'Collaboration' && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  Limited Collab
                </div>
              )}
            </div>
            <h4 className="text-white font-bold text-lg mb-1 group-hover:text-red-600 transition-colors">{product.name}</h4>
            <p className="text-zinc-500 text-sm mb-3">{product.category}</p>
            <p className="text-white font-black">Rp {product.price.toLocaleString('id-ID')}</p>
          </div>
        ))}
      </div>
      
      {filter !== 'All' && (
        <div className="mt-20 text-center">
          <button 
            onClick={() => setFilter('All')}
            className="px-12 py-5 border-2 border-white/10 text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
            Lihat Semua Produk
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
