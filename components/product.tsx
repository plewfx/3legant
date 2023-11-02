"use client";

import Image from "next/image"

import { ProductProps } from "@/types";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function generateRatingStars(rating: number, maxRating = 5) {
  const starIcon = "★";
  const emptyStarIcon = "☆";
  let stars = "";

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars += starIcon;
    } else {
      stars += emptyStarIcon;
    }
  }

  return stars;
}

function calculateDiscountedPrice(
  originalPrice: number,
  discountPercentage: number
) {
  if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
    return "Invalid input";
  }

  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;

  return discountedPrice;
}

export const Product = ({
  description,
  discount,
  img,
  id,
  isFavorite,
  price,
  rating,
  title,
}: ProductProps) => {
  const addToFavoritesMutation = useMutation(
    api["myFunctions"].addToFavorites
  );
  const removeFromFavoritesMutation = useMutation(
    api["myFunctions"].removeFromFavorites
  );

  console.log(id);

  return (
    <div className="grid grid-rows-[3fr_1fr] gap-3 group">
      <div
        className="p-4 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(/products/${img})` }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Badge variant="secondary">NEW</Badge>
            {discount ? <Badge variant="primary">-{discount}%</Badge> : null}
          </div>
          <div className="lg:hidden lg:group-hover:block w-[32px] h-[32px] flex items-center justify-center">
            <Button size="icon" className="bg-white shadow-md rounded-full hover:bg-white">
              {isFavorite ? (
                <Image
                  src="/icons/heart-fill.svg"
                  onClick={() => addToFavoritesMutation({id: id})}
                  width={20}
                  height={20}
                  alt="Heart"
                />
              ) : (
                <Image
                  src="/icons/heart.svg"
                  onClick={() => removeFromFavoritesMutation({id: id})}
                  width={20}
                  height={20}
                  alt="Heart"
                />
              )}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p>{generateRatingStars(rating)}</p>
        <h5 className="text-base text-neutural-07 font-semibold leading-relaxed">
          {title}
        </h5>
        <div className="flex gap-3 text-sm font-semibold leading-normal">
          {discount ? (
            <>
              <p className="text-neutural-07">
                ${calculateDiscountedPrice(price, discount)}
              </p>
              <p className="text-neutural-04 line-through">${price}</p>
            </>
          ) : (
            <p className="text-sm font-semibold leading-normal text-neutural-07">
              ${price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProductSkeleton = () => {
  return (
    <div className="grid grid-rows-[3fr_1fr] gap-3 group">
      <div
        className="p-4 bg-neutural-02"
      >
      </div>
      <div className="flex flex-col gap-1">
        <p>★★★★★</p>
        <h5 className="text-base text-neutural-07 font-semibold leading-relaxed">
          Title
        </h5>
        <div className="flex gap-3 text-sm font-semibold leading-normal">
            <p className="text-sm font-semibold leading-normal text-neutural-07">
              $99.99
            </p>
        </div>
      </div>
    </div>
  );
};
