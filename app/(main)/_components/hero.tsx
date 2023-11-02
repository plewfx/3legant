import Image from "next/image";

import hero from "../../../public/hero.png";

export const Hero = () => {
  return (
    <section className="pb-10">
      <div className="container flex flex-col gap-8">
        <div className="w-full relative">
          <Image
            src={hero}
            alt="Hero image"
            className="w-full max-md:h-[304px] object-cover object-center"
          />
        </div>
        <div className="flex max-lg:flex-col lg:items-center gap-6">
          <h1 className="font-poppins font-medium text-[40px] md:text-7xl text-neutural-07 -tracking-[2px] break-words">
            Simply Unique
            <span className="text-neutural-04">/</span>
            <br />
            Simply Better
            <span className="text-neutural-04">.</span>
          </h1>
          <p className="text-neutural-04 text-sm md:text-base leading-6 pr-[29px]">
            <span className="text-neutural-05 font-semibold">3legant</span> is a
            gift & decorations store based in HCMC, Vietnam. Est since 2019.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
