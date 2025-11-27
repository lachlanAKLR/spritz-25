import { PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="font-alpina-thin pb-2 text-base md:pb-4">{children}</p>
    ),

    h1: ({ children }) => (
      <h1 className="font-alpina-thin py-3 text-lg md:text-xl">{children}</h1>
    ),

    h2: ({ children }) => (
      <h2 className="font-alpina-thin py-3 text-base md:text-lg">{children}</h2>
    ),

    h3: ({ children }) => (
      <h3 className="font-egyptian pb-2 text-sm uppercase md:text-base">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="font-egyptian text-base uppercase md:text-lg">
        {children}
      </h4>
    ),

    small: ({ children }) => <p className="">{children}</p>,
  },

  types: {
    break: () => (
      <div className="my-6 flex w-full justify-center">
        <Image
          src="/Asterisk_Group_001.svg"
          alt="Horizontal Break"
          width={50}
          height={50}
        />
      </div>
    ),
  },

  marks: {
    em: ({ children }) => (
      <span className="font-alpina-italic">{children}</span>
    ),

    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isMailto = href.startsWith("mailto:");
      const isExternal = !isMailto && !href.startsWith("/");

      return (
        <a
          href={href}
          className=""
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};
