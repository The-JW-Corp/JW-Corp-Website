"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
  animationType?: "reveal" | "fade";
}

export default function AnimatedText({
  children,
  className,
  delay = 0,
  once = false,
  animationType = "reveal",
}: AnimatedTextProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "2.5% 0px",
  });
  const lines = [[children]];

  const revealVariants = {
    hidden: { 
      y: "100%",
      transition: { duration: 0 }
    },
    visible: { 
      y: "0%",
      transition: {
        duration: 0.9,
        ease: [0.05, 0, 0.9, 1],
        delay: delay,
      }
    }
  };

  const fadeVariants = {
    hidden: { 
      y: 20,
      opacity: 0,
      transition: { duration: 0 }
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  if (animationType === "reveal") {
    return (
      <div 
        ref={ref} 
        className={cn("text-inherit whitespace-nowrap overflow-hidden", className)}
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="overflow-hidden">
            <motion.div
              className="relative"
              initial="hidden"
              animate={controls}
              variants={revealVariants}
            >
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
            </motion.div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className={cn("text-inherit whitespace-nowrap", className)}
    >
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          className="relative"
          initial="hidden"
          animate={controls}
          variants={fadeVariants}
        >
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
        </motion.div>
      ))}
    </div>
  );
}
