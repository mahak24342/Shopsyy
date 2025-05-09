import Details from '@/app/components/Details';
import { stripe } from '@/lib/stripe';
import React from 'react';
export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
    const product = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });
  
    const plainProduct = JSON.parse(JSON.stringify(product));
    return <Details product={plainProduct} />;
  }
  