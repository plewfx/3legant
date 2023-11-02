"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { Product, ProductSkeleton } from "@/components/product";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const NewArrivals = () => {
  const products = useQuery(api.products.get);
  return (
    <section className="pt-8 lg:pt-12">
      <div className="container flex flex-col gap-10 lg:gap-12">
        <div className="flex items-end justify-between">
          <h2 className="text-[40px] font-medium font-poppins">New Arrivals</h2>
          <Button variant="link" className="hidden lg:flex">
            More Products
            <ArrowRight width={20} height={20} />
          </Button>
        </div>
        <div className="grid grid-cols-[repeat(5,262px)] gap-6 overflow-x-scroll pb-10">
          {products ? products?.map((product) => {
            return (
              <Product
                key={product._id}
                id={product._id}
                title={product.title}
                price={product.price}
                img={product.img}
                isFavorite={product.isFavorite}
                discount={product.discount}
                rating={product.rating}
                description={product.description}
              />
            );
          }) : (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          )}
        </div>
        <Button variant="link" className="lg:hidden flex">
          More Products
          <ArrowRight width={20} height={20} />
        </Button>
      </div>
    </section>
  );
};
