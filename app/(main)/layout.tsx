import type { Metadata } from "next";

import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Newsletter } from "./_components/newsletter";

export const metadata: Metadata = {
  title: "Home page - 3legant",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}