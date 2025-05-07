// Remove "use client" – this is a Server Component

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { stripe } from '@/lib/stripe'
import Image from 'next/image'
import Carousel from './Carousel'

const Hero = async () => {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 3,
  })

  const productImage = products.data[0]?.images?.[0] || '/placeholder.jpg'

  return (
    <section className="min-h-screen w-full bg-yellow-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        
        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-purple-700">Welcome To My App</h2>
          <p className="text-lg text-gray-700">Discover</p>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>

        {/* Image Content */}
        <div className="w-full max-w-sm">
          <Image
            alt="Product"
            width={450}
            height={450}
            src={productImage}
            className="rounded-xl shadow-md object-contain"
            priority
          />
        </div>
      </div>

      <div className="mt-8 w-full">
        <Carousel products={products.data} />
      </div>
    </section>
  )
}

export default Hero
