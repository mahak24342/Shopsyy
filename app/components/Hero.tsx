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
    <section className="min-h-screen w-full bg-purple-50 flex flex-col items-center px-6 py-12">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-purple-800">Welcome To ShopSY</h2>
          <p className="text-lg text-gray-700">Discover our top trending products</p>
          <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
        <div className="w-full max-w-sm">
          <Image
            alt="Product"
            width={450}
            height={450}
            src={productImage}
            className="rounded-xl shadow-lg object-contain"
            priority
          />
        </div>
      </div>
      <div className="mt-12 w-full max-w-2xl">
        <Carousel products={products.data} />
      </div>
    </section>
  )
}

export default Hero