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
  toggleCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product, size: string) => {
    setItems(currentItems => {
      // Cek apakah item dengan size sama sudah ada
      const existingItem = currentItems.find(item => item.id === product.id && item.selectedSize === size);
      
      if (existingItem) {
        return currentItems.map(item => 
          (item.id === product.id && item.selectedSize === size)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentItems, { 
        ...product, 
        cartId: `${product.id}-${size}-${Date.now()}`, 
        selectedSize: size, 
        quantity: 1 
      }];
    });
    setIsOpen(true); // Buka keranjang otomatis saat tambah item
  };

  const removeFromCart = (cartId: string) => {
    setItems(current => current.filter(item => item.cartId !== cartId));
  };

  const toggleCart = () => setIsOpen(prev => !prev);

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, addToCart, removeFromCart, toggleCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
