"use client";
import React, { useEffect, useRef } from "react";
import "./TheyTrustedUs.css";
// @ts-ignore
import { logosData } from "./TheyTrustedUsData.tsx";
import { v4 as uuidv4 } from 'uuid';

const TheyTrustedUs: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const totalWidth = scrollElement.scrollWidth;
      scrollElement.style.animationDuration = `${totalWidth / 100}px`;
    }
  }, []);

  return (
    <div className="they-trusted-us-container">
      <div ref={scrollRef} className="they-trusted-us-logo-container">
        {logosData.concat(logosData).map((logo) => (
          <div className="they-trusted-us-element" key={uuidv4()}>
            <img id={logo.id} src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheyTrustedUs;
