"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isStudio = pathname.includes("/studio");

  return isStudio ? null : (
    <nav>
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/LP25_Logo_Bronze_001.svg"
            alt="Lore Perfumery Logo"
            width={500}
            height={80}
            className="w-56"
          />
        </Link>
        <button className="flex items-center gap-2 tracking-widest">
          <p className="font-egyptian text-xs uppercase">Menu</p>
          <Image
            src="/Asterisk.svg"
            alt="Lore Perfumery Logo"
            width={500}
            height={80}
            className="w-3.5"
          />
        </button>
      </div>
    </nav>
  );
}
