import localFont from "next/font/local";

const egyptian = localFont({
  src: "../fonts/CaslonsEgyptian-Regular.otf",
  variable: "--font-egyptian",
  weight: "400",
  style: "normal",
});

const alpinaThin = localFont({
  src: "../fonts/GT-Alpina-Standard-Thin.woff2",
  variable: "--font-alpina-thin",
  weight: "400",
  style: "normal",
});

const alpinaIta = localFont({
  src: "../fonts/GT-Alpina-Standard-Thin-Italic.woff2",
  variable: "--font-alpina-italic",
  weight: "400",
  style: "normal",
});

const alpinaTyp = localFont({
  src: "../fonts/GT-Alpina-Typewriter-Light.woff2",
  variable: "--font-alpina-typewriter",
  weight: "400",
  style: "normal",
});

export { egyptian, alpinaThin, alpinaIta, alpinaTyp };
