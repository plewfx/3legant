import { ClerkProvider, useAuth } from "@clerk/nextjs";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import ConvexClientProvider from "@/components/providers/convex-client-provider";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "3legant",
  description:
    "3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. ",
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
      }
    ]
  }
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={inter.className}>
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            {children}
          </ConvexProviderWithClerk>
        </body>
      </html>
    </ClerkProvider>
  );
}
