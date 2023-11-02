import { cn } from "@/lib/utils";

import { rooms } from "@/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Categories = () => {
  return (
    <section>
      <div className="container grid lg:grid-cols-2 lg:grid-rows-[664px] grid-rows-[377px] gap-4 lg::gap-6">
        <div
          style={{ backgroundImage: `url(${rooms[0].image})` }}
          className="max-lg:bg-top md:bg-center bg-top bg-no-repeat bg-cover"
        >
          <div className="flex flex-col items-start gap-2 lg:gap-3 p-8 lg:p-12">
            <h3 className="text-2xl lg:text-[34px] font-medium text-neutural-07 font-poppins">
              {rooms[0].title}
            </h3>
            <Button variant="link">
              Shop Now
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <div
            style={{ backgroundImage: `url(${rooms[1].image})` }}
            className="bg-right bg-no-repeat bg-cover flex-auto"
          >
            <div className="flex flex-col items-start gap-2 lg:gap-3 p-8 lg:p-12">
              <h3 className="text-2xl lg:text-[34px] font-medium text-neutural-07 font-poppins">
                {rooms[1].title}
              </h3>
              <Button variant="link">
                Shop Now
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${rooms[2].image})` }}
            className="bg-right bg-no-repeat bg-cover flex-auto"
          >
            <div className="flex flex-col items-start gap-2 lg:gap-3 p-8 lg:p-12">
              <h3 className="text-2xl lg:text-[34px] font-medium text-neutural-07 font-poppins">
                {rooms[2].title}
              </h3>
              <Button variant="link">
                Shop Now
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
