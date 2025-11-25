"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isStudio = pathname.includes("/studio");

  return isStudio ? null : (
    <footer className="p-5">
      <div className="border-t-bronze-2 flex w-full justify-center border-t-2 py-12">
        <div className="font-alpina-thin flex items-center gap-24 align-middle text-lg">
          <Link
            href="https://www.loreperfumery.com.au/about-us/"
            target="_blank"
          >
            <p>About</p>
          </Link>
          <Link href="https://www.loreperfumery.com.au/blog/" target="_blank">
            <p>Blog</p>
          </Link>
          <Image
            src="/LP25_Marque_Bronze_001.svg"
            alt="Lore Perfumery Logo"
            width={500}
            height={80}
            className="w-20"
          />
          <Link href="https://www.loreperfumery.com.au/shop/" target="_blank">
            <p>Shop</p>
          </Link>
          <Link href="https://www.loreperfumery.com.au/brands/" target="_blank">
            <p>Brands</p>
          </Link>
        </div>
      </div>
      <div className="border-t-bronze-1 border-t-2 py-6">
        <p className="font-alpina-typewriter text-center text-xs uppercase">
          Lore Perfumery acknowledges the Traditional Owners and true sovereigns
          of the land we operate on, the Wurundjeri Woi Wurrung peoples of the
          Kulin Nation. We pay our respects to their elders, past, present and
          emerging. We recognise the great importance storytelling and the
          dissemination of oral histories has in Wurundjeri cultures, and strive
          to honour that as we engage in storytelling on the lands of the Kulin
          Nation.
        </p>
      </div>
      <div className="border-t-bronze-1 w-full border-t-2 pt-12">
        <Image
          src="/LP25_Logo_Bronze_001.svg"
          alt="Lore Perfumery Logo"
          width={500}
          height={80}
          className="w-full"
        />
      </div>
    </footer>
  );
}
