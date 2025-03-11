"use client";

import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

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
    <AnimatedCursor
      innerSize={18}
      outerSize={18}
      color="255,255,255"
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
  );
} 