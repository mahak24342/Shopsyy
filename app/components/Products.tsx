"use client"
import React, { useState } from 'react';
import Stripe from 'stripe';
import { List } from './List';

interface Props {
  products: Stripe.Product[];
}

const Products = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-purple-50 min-h-screen py-6">
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <input
          type="text"
          placeholder="Search your products..."
          className="w-full p-3 rounded-xl border border-purple-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {filtered.map((product, key) => (
          <li key={key}>
            <List product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
