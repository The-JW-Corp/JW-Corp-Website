"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}
export default function AnimatedText({
  children,
  className,
  delay,
  once = false,
}: AnimatedTextProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "2.5% 0px",
  });
  const lines = [[children]];

  const container = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={cn("text-inherit whitespace-nowrap", className)}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden relative">
          <div className="relative">
            {line.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block text-inherit"
                style={{
                  marginRight: wordIndex === line.length - 1 ? 0 : "0.25em",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
