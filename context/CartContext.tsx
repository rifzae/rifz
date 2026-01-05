import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

export interface CartItem extends Product {
  cartId: string; // ID unik untuk keranjang (karena 1 produk bisa dibeli beda size)
  selectedSize: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (cartId: string) => void;
  clearCart: () => void; // <--- FUNGSI BARU DITAMBAHKAN
  toggleCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi Tambah Barang
  const addToCart = (product: Product, size: string) => {
    setItems(currentItems => {
      // Cek apakah item dengan size sama sudah ada
      const existingItem = currentItems.find(item => item.id === product.id && item.selectedSize === size);
      
      if (existingItem) {
        // Jika ada, tambahkan quantity-nya saja
        return currentItems.map(item => 
          (item.id === product.id && item.selectedSize === size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // Jika belum ada, buat item baru
      return [...currentItems, { 
        ...product, 
        cartId: `${product.id}-${size}-${Date.now()}`, 
        selectedSize: size, 
        quantity: 1 
      }];
    });
    setIsOpen(true); // Buka keranjang otomatis saat tambah item
  };

  // Fungsi Hapus Barang Spesifik
  const removeFromCart = (cartId: string) => {
    setItems(current => current.filter(item => item.cartId !== cartId));
  };

  // Fungsi Kosongkan Keranjang (Untuk Checkout)
  const clearCart = () => {
    setItems([]);
  };

  // Fungsi Buka/Tutup Drawer
  const toggleCart = () => setIsOpen(prev => !prev);

  // Kalkulasi Total
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, addToCart, removeFromCart, clearCart, toggleCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook kustom agar mudah dipanggil
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
