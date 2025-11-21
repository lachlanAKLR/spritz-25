import { PortableTextReactComponents } from "@portabletext/react";

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="font-alpina-thin p-2 text-base">{children}</p>
    ),

    h1: ({ children }) => (
      <h1 className="font-alpina-thin pb-3 text-xl">{children}</h1>
    ),

    h2: ({ children }) => (
      <h2 className="font-alpina-thin pb-3 text-lg">{children}</h2>
    ),

    h3: ({ children }) => (
      <h3 className="font-egyptian pb-3 text-base uppercase">{children}</h3>
    ),

    h4: ({ children }) => (
      <h4 className="font-egyptian text-lg uppercase">{children}</h4>
    ),

    small: ({ children }) => <p className="">{children}</p>,
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
