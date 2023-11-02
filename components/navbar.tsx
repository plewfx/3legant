"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navlinks, cart } from "@/constants";

import { cn } from "@/lib/utils";

import { UserButton } from "@clerk/nextjs";

import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const body = window.document.querySelector("body");

    React.useEffect(() => {
      if (body) {
        body.style.overflowX = open ? "hidden" : null;
      }
    }, [open])

  return (
    <nav className="bg-white py-4">
      <div className={cn("container flex items-center justify-between")}>
        <div className="flex items-center gap-1">
          <button onClick={() => setOpen((prev) => !prev)}>
            <Menu width={24} height={24} className="block md:hidden" />
          </button>
          <Link
            href="/"
            className="text-base md:text-2xl font-semibold text-black"
          >
            3legant
            <span className="text-neutural-04">.</span>
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-10">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.link}
                className={cn(
                  "text-sm text-neutural-04 font-medium leading-relaxed font-spaceGrotesk hover:text-neutural-07",
                  pathname === link.link && "text-neutural-07",
                )}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-4">
          <li className="hidden md:block">
            <Search width={24} height={24} />
          </li>
          <li className="hidden md:block">
            <UserButton afterSignOutUrl="/" />
          </li>
          <li className="flex items-center gap-[5px]">
            <ShoppingBag width={24} height={24} />
            <div className="w-[20px] h-[20px] bg-neutural-07 rounded-full text-white flex items-center justify-center text-xs">
              {cart}
            </div>
          </li>
        </ul>
      </div>

      <div
        className={cn(
          "md:hidden w-[91vw] h-[100vh] p-6 bg-white absolute duration-500 z-50 top-0 flex flex-col justify-between",
          open ? "left-0" : "-left-[200%]",
        )}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-base md:text-2xl font-semibold text-black"
            >
              3legant
              <span className="text-neutural-04">.</span>
            </Link>
            <button onClick={() => setOpen((prev) => !prev)}>
              <X width={24} height={24} />
            </button>
          </div>
          <form className="px-4 py-[11px] border border-neutural-04 rounded-xl flex items-center gap-2">
            <Search width={24} height={24} />
            <input
              placeholder="Search"
              className="w-[150px] focus:outline-none"
            />
          </form>
          <ul className="flex flex-col gap-4">
            {navlinks.map((link, index) => (
              <li key={index} className="pb-2 border-b border-neutural-03">
                <Link
                  href={link.link}
                  className={cn(
                    "text-sm text-neutural-04 font-medium leading-relaxed font-spaceGrotesk hover:text-neutural-07 rounded-xl",
                    pathname === link.link && "text-neutural-07",
                  )}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between pb-2 border-b border-neutural-03">
            <div className="text-[18px] leading-loose font-medium text-neutural-04">
              Cart
            </div>
            <div className="flex items-center gap-1">
              <ShoppingBag width={24} height={24} />
              <div className="w-[20px] h-[20px] bg-neutural-07 rounded-full text-white flex items-center justify-center text-xs">
                {cart}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Instagram width={24} height={24} />
            <Facebook width={24} height={24} />
            <Youtube width={24} height={24} />
          </div>
        </div>
      </div>
      <div
        className={cn(
          "md:hidden w-[100vw] h-[100vh] bg-black/30 absolute top-0 duration-500",
          open ? "opacity-100" : "hidden opacity-0",
        )}
      />
    </nav>
  );
};
