"use client";

import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const pathVariants: Variants = {
  animate: {
    x: 2,
    translateX: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

interface LoginIconProps {
  className?: string;
}

export const LoginIcon = ({ className }: LoginIconProps) => {
  const controls = useAnimation();

  return (
    <div
      className={
        (cn(
          "cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
          // biome-ignore lint/style/noCommaOperator: <explanation>
        ),
        className)
      }
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <motion.polyline
          points="10 17 15 12 10 7"
          variants={pathVariants}
          animate={controls}
        />
        <motion.line
          x1="15"
          x2="3"
          y1="12"
          y2="12"
          variants={pathVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};
