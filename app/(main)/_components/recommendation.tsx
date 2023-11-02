import Image from "next/image";

import recomImage from "../../../public/recommendation.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Recommendation = () => {
  return (
    <section className="bg-neutural-02">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center max-lg:justify-items-center gap-14 lg:gap-[72px]">
        <Image
          src={recomImage}
          alt="Image of recommendation"
          className="object-cover object-center w-full"
        />
        <div className="flex flex-col gap-6 items-start max-w-[82%] lg:max-w-[60%] max-lg:pb-14">
          <div className="flex flex-col gap-[16px] items-start">
            <span className="text-secondary-blue font-bold uppercase text-base">
              SALE UP TO 35% OFF
            </span>
            <h3 className="text-[34px] lg:text-[40px] font-medium text-neutural-07 font-poppins leading-[110%]">
              HUNDREDS of <br /> New lower prices!
            </h3>
            <p className="text-base lg:text-xl leading-relaxed text-neutural-07">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
          </div>
          <Button variant="link">
            Shop Now
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
