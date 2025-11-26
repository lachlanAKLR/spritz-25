"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const { ref, isVisible } = useScrollReveal();
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration, delay, ease: [0.33, 1, 0.68, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
