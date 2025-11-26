"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FRAGRANCES_QUERYResult } from "../../../sanity.types";
import toOrdinal from "../utils/toOrdinal";

export default function Nav({
  fragrances,
}: {
  fragrances: FRAGRANCES_QUERYResult;
}) {
  const pathname = usePathname();
  const isStudio = pathname.includes("/studio");
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const pageTop = window.scrollY;
      setIsSolid(pageTop > 0);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return isStudio ? null : (
    <>
      <nav>
        <div
          className={`${isSolid ? "bg-brown-1 border-bronze-1 border-b-2" : "border-brown-1"} fixed top-0 left-0 z-50 flex w-full items-center justify-between p-3 transition-colors duration-300 ease-in-out md:p-5`}
        >
          <Link href="/">
            <Image
              src="/LP25_Logo_Bronze_001.svg"
              alt="Lore Perfumery Logo"
              width={500}
              height={80}
              className="w-44 md:w-56"
            />
          </Link>
          <button className="flex cursor-pointer items-center gap-2 tracking-widest">
            <p
              className="font-egyptian text-xs uppercase"
              onClick={handleClick}
            >
              {open ? "Close" : "Menu"}
            </p>
            <Image
              src="/Asterisk.svg"
              alt="Lore Perfumery Logo"
              width={80}
              height={80}
              className={`${open ? "rotate-90" : "rotate-0"} w-3.5 transition-all duration-1000 ease-in-out`}
            />
          </button>
        </div>
      </nav>

      <nav>
        <div
          className={`${open ? "right-0" : "-right-96"} bg-brown-1 border-bronze-1 fixed z-30 flex min-h-screen w-full flex-col items-center justify-between border-l-0 pt-20 pb-5 transition-all duration-500 ease-in-out md:w-96 md:border-l-2`}
        >
          <div className="flex flex-col gap-4">
            <Link
              onClick={handleClick}
              href="/"
              className="relative block w-fit"
            >
              <Image
                src="/Button_Box.svg"
                alt="Button Box"
                width={500}
                height={80}
                className="w-[300px]"
              />

              <span className="font-egyptian absolute inset-0 flex items-center justify-center text-sm uppercase">
                Homepage
              </span>
            </Link>
            {fragrances?.map((item, index) => (
              <Link
                onClick={handleClick}
                key={`nav ${index}`}
                href={`/fragrance/${item.slug?.current}`}
                className="relative block w-fit"
              >
                <Image
                  src="/Button_Box.svg"
                  alt="Button Box"
                  width={500}
                  height={80}
                  className="w-[300px]"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-egyptian text-sm uppercase">
                    {toOrdinal(index + 1)}
                    <span className="pl-1">Course</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="https://www.loreperfumery.com.au/" target="_blank">
            <p className="font-egyptian text-center text-sm">
              LOREPERFUMERY.COM
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
}
