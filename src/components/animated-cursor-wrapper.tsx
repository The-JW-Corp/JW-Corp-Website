"use client";

import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import CanvasCursor from "./canvas-cursor";

export default function AnimatedCursorWrapper() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );
  }, []);

  if (!mounted || isTouchDevice) return null;

  return (
    <>
      <CanvasCursor />
      
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="121,56,213"
        outerAlpha={0.4}
        innerScale={1.4}
        outerScale={10}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".clickable"
        ]}
      />
    </>
  );
} 