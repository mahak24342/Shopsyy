// app/products/page.tsx

import { stripe } from "@/lib/stripe";
import Products from "../components/Products";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <section className="bg-purple-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">All Products</h1>
        <p className="text-pink-600 mb-8 text-lg">
          Browse our latest collection and discover your favorites!
        </p>
        <Products products={products.data} />
      </div>
    </section>
  );
}
