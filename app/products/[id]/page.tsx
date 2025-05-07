import Details from '@/app/components/Details'
import { stripe } from '@/lib/stripe';
import React from 'react'
//import stripe from 'stripe';

const page = async(
    {params,}:{
        params:{id:string};
    }
) => {
    const product=await stripe.products.retrieve(params.id,{
        expand:["default_price"]
    });

    const plainProduct=JSON.parse(JSON.stringify(product));
  return (
   <Details product={plainProduct}/>
  )
}

export default page
