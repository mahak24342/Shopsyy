'use client'

import { Card } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import Stripe from 'stripe'
import Image from 'next/image'

interface Props {
  products: Stripe.Product[]
}

const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [products.length])

  const currentP = products[current]
  const price = currentP.default_price as Stripe.Price

  return (
    <Card className="w-full max-w-md mx-auto p-4">
      {currentP.images && currentP.images[0] && (
        <div className="relative w-full h-64 rounded overflow-hidden">
          <Image
            alt={currentP.name}
            src={currentP.images[0]}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold">{currentP.name}</h3>
        {price?.unit_amount && (
          <p className="text-lg text-gray-600">
            ${price.unit_amount / 100} {price.currency?.toUpperCase()}
          </p>
        )}
      </div>
    </Card>
  )
}

export default Carousel
