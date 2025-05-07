'use client'

import React from 'react'
import Stripe from 'stripe'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'

interface Props {
  product: Stripe.Product
}

const Details = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore()

  const price = product.default_price as Stripe.Price
  const cartItem = items.find((item) => item.id === product.id)
  const quantityInCart = cartItem ? cartItem.quantity : 0

  const handleAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images?.[0] || null,
      quantity: 1,
    })
  }

  const handleRemoveItem = () => {
    removeItem(product.id)
  }

  return (
    <section className="min-h-screen bg-purple-50 px-4 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Product Image */}
        {product.images?.[0] && (
          <div className="relative h-96 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-l-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}

        {/* Product Info */}
        <div className="p-6 md:p-10 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold text-purple-800">{product.name}</h1>

          {product.description && (
            <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
          )}

          {price?.unit_amount && (
            <p className="text-2xl font-semibold text-pink-500">
              ${(price.unit_amount / 100).toFixed(2)}{' '}
              <span className="text-sm text-gray-500">{price.currency?.toUpperCase()}</span>
            </p>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-4">
            <Button variant="outline" onClick={handleRemoveItem}>-</Button>
            <span className="text-xl font-semibold">{quantityInCart}</span>
            <Button variant="outline" onClick={handleAddItem}>+</Button>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <Button
              onClick={handleAddItem}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
