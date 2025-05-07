import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  product: Stripe.Product;
}

export const List = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-xl transition duration-300 h-full flex flex-col border border-purple-200 bg-white rounded-xl overflow-hidden">
        {product.images?.[0] && (
          <div className="relative h-48 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-semibold text-purple-800">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          {product.description && (
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          )}
          {price?.unit_amount && (
            <p className="text-md font-bold text-purple-700">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white transition">
            View Details
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};
