"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCartStore } from '@/store/cart-store';
import React from 'react';
import { checkoutAction } from './checout-action';

const CheckoutPage = () => {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (total === 0 || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-500 text-center">
          🛒 Your Cart is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-50 to-white py-10 px-4 sm:px-8">
      <h1 className="text-4xl font-extrabold text-purple-800 mb-8 text-center">🛍️ Checkout</h1>

      <Card className="max-w-4xl mx-auto shadow-2xl rounded-2xl border-none bg-white">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-700 font-semibold">🧾 Order Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <ul className="space-y-4">
            {items.map((item, key) => (
              <li
                key={key}
                className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                <div className="w-full sm:w-2/3">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    ${(item.price * item.quantity / 100).toFixed(2)} ({item.quantity} × ${(item.price / 100).toFixed(2)})
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-lg font-bold"
                    onClick={() => removeItem(item.id)}
                  >
                    -
                  </Button>
                  <span className="px-3 text-md font-semibold text-gray-700">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-lg font-bold"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center text-lg font-bold text-purple-800 border-t pt-4">
            <span>Total:</span>
            <span>${(total / 100).toFixed(2)}</span>
          </div>

          <form action={checkoutAction} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <input type="hidden" name="items" value={JSON.stringify(items)} />
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2"
            >
              Proceed to Payment
            </Button>
            <Button
              type="button"
              onClick={clearCart}
              variant="outline"
              className="border-red-400 text-red-600 hover:bg-red-50 font-semibold py-2"
            >
              Clear Cart
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
