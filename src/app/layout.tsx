import type { Metadata } from "next";
import "./globals.css";
import {
  alpinaIta,
  alpinaThin,
  alpinaTyp,
  egyptian,
} from "./utils/customFonts";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { FRAGRANCES_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Spritzmas™ 2025 — Lore Perfumery",
  description:
    "A sensory celebration of gourmand indulgence and art deco elegance",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fragrances = await client.fetch(FRAGRANCES_QUERY);

  return (
    <html lang="en">
      <body
        className={`text-bronze-1 bg-brown-1 antialiased ${egyptian.variable} ${alpinaThin.variable} ${alpinaIta.variable} ${alpinaTyp.variable}`}
      >
        <Nav fragrances={fragrances} />
        {children}
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
