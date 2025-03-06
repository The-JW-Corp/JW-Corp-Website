"use client";

import { motion, Target, TargetAndTransition } from "framer-motion";
import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface CustomVariants {
  hidden: Target | TargetAndTransition;
  visible: Target | TargetAndTransition;
  exit?: Target | TargetAndTransition;
}

interface AnimatedInViewProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  forceVisible?: boolean;
  customVariants?: CustomVariants;
  onAnimationComplete?: () => void;
}

export function AnimatedInView({
  as,
  children,
  className,
  delay = 0,
  once = true,
  forceVisible = false,
  customVariants,
  onAnimationComplete,
}: AnimatedInViewProps) {
  const defaultVariants: CustomVariants = {
    hidden: { x: 25, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, delay } },
    exit: { x: 25, opacity: 0, transition: { duration: 0 } },
  };
  
  const variants = customVariants || defaultVariants;
  const Component = as || "div";
  const MotionComponent = motion(Component);

  if (forceVisible) {
    return (
      <MotionComponent
        initial="visible"
        animate="visible"
        variants={variants}
        onAnimationComplete={onAnimationComplete}
        className={cn(className)}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-2.5% 0px" }}
      variants={variants}
      onAnimationComplete={onAnimationComplete}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
