'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaCartPlus } from 'react-icons/fa';
import { useCartStore } from '@/store/cart-store';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-gradient-to-r from-purple-100 via-pink-50 to-white text-purple-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">ShopSY</Link>
          </div>

          {/* Mobile: Menu + Cart */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link href="/checkout" className="relative">
              <FaCartPlus className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-lg items-center">
            <Link href="/" className="hover:text-pink-600">Home</Link>
            <Link href="/products" className="hover:text-pink-600">Products</Link>
            <Link href="/checkout" className="hover:text-pink-600">Checkout</Link>
            <Link href="/checkout" className="relative hover:text-pink-600">
              <FaCartPlus />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg">
          <Link href="/" className="block hover:text-pink-600">Home</Link>
          <Link href="/products" className="block hover:text-pink-600">Products</Link>
          <Link href="/checkout" className="block hover:text-pink-600">Checkout</Link>
        </div>
      )}
    </div>
  );
};
