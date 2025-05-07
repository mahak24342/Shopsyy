"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-yellow-100 text-purple-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <Link href="/">ShopSY</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="/" className="hover:text-gray-100">Home</Link>
            <Link href="/products" className="hover:text-gray-100">Products</Link>
            <Link href="/checkout" className="hover:text-gray-100">Checkout</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg">
          <Link href="/" className="block hover:text-gray-100">Home</Link>
          <Link href="/product" className="block hover:text-gray-100">Products</Link>
          <Link href="/checkout" className="block hover:text-gray-100">Checkout</Link>
        </div>
      )}
    </div>
  );
};
