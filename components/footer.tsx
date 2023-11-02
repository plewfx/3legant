import Link from "next/link";
import { Separator } from "./ui/separator";
import { navlinks } from "@/constants";
import { Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 lg:pt-20 lg:pb-8 bg-neutural-07">
      <div className="container">
        <nav className="flex flex-col gap-10 lg:gap-12 items-center">
          <div className="flex max-lg:flex-col gap-10 items-center lg:justify-between w-full">
            <div className="flex max-lg:flex-col items-center gap-4">
              <Link className="font-poppins text-2xl font-medium text-background" href="/">3legant<span className="text-neutural-04">.</span></Link>
              <Separator className="w-1/2 mx-auto bg-neutural-04 lg:hidden" />
              <Separator className="h-4 bg-neutural-04 hidden lg:block" orientation="vertical" />
              <p className="text-sm leading-normal text-neutural-03">Gift & Decoration Store</p>
            </div>
            <ul className="flex max-lg:flex-col items-center gap-8">
                {navlinks.map((link, index) => (
                    <li key={index} className="text-neutural-01 text-sm leading-normal">
                      <Link href={link.link}>
                        {link.text}
                      </Link>
                    </li>
                ))}
            </ul>
          </div>
          <Separator className="bg-neutural-04" />
          <div className="py-6 lg:py-4 flex flex-col lg:flex-row-reverse items-center gap-8 lg:justify-between w-full">
            <ul className="flex items-center gap-6">
                <li>
                    <Instagram color="#FEFEFE" width={24} height={24} />
                </li>
                <li>
                    <Facebook color="#FEFEFE" width={24} height={24} />
                </li>
                <li>
                    <Youtube color="#FEFEFE" width={24} height={24} />
                </li>
            </ul>
            <div className="flex items-center flex-col gap-7 lg:flex-row-reverse text-neutural-01">
                <div className="flex gap-7">
                    <div className="text-xs font-semibold leading-relaxed font-poppins">Privacy Policy</div>
                    <div className="text-xs font-semibold leading-relaxed font-poppins">Terms of Use</div>
                </div>
                <p className="text-xs leading-relaxed font-poppins text-neutural-03">Copyright © 2023 3legant. All rights reserved</p>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};
