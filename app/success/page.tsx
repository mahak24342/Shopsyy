"use client";

import { useCartStore } from '@/store/cart-store';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const SuccessPage = () => {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-purple-50 px-6 py-12 text-center">
      <div className="max-w-xl bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-green-600">🎉 Payment Successful!</h1>
        <h2 className="text-xl sm:text-2xl text-gray-700">Thank you for your purchase!</h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Your order has been confirmed and is being processed. We appreciate your support!
        </p>
        <Link href="/products" passHref>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl text-base font-semibold">
            🛍️ Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
