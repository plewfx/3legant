"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import { ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";

export const Banner = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (open) {
    return (
      <div className="bg-neutural-02 py-2 flex justify-center relative">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/ticket-percent.svg"
            width={24}
            height={24}
            alt="Ticket"
          />
          <p className="text-neutural-05 text-sm font-semibold leading-normal">
            30% off storewide — Limited time!
          </p>
          <Button variant="link" asChild className="hidden md:inline-flex text-secondary-blue border-secondary-blue">
            <Link
              href="/"
            >
              Shop Now
              <ArrowRight
                color="#377DFF"
                width={18}
                height={18}
              />
            </Link>
          </Button>
        </div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="absolute right-4"
        >
          <X width={20} height={20} className="hidden md:block" />
        </button>
      </div>
    );
  }
};
