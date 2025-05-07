import React from 'react'
import { stripe } from '@/lib/stripe'
import Products from '@/components/Products'

const Page = async () => {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <Products products={products.data} />
    </div>
  )
}

export default Page
