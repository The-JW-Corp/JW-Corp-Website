"use client";
import React, { useState, useEffect } from "react";
import "./TheyTrustedUs.css";
import { logosData } from "./TheyTrustedUsData";

const TheyTrustedUs: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageElements = logosData.map((logo) => {
      const img = new Image();
      img.src = logo.src;
      return img;
    });

    let loadedCount = 0;
    imageElements.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageElements.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageElements.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  if (!imagesLoaded) {
    return null; 
  }

  return (
    <div className="they-trusted-us-container">
      <div className="they-trusted-us-logo-container">
        {logosData.concat(logosData).map((logo, index) => (
          <div className="they-trusted-us-element" key={index}>
            <img id={logo.id} src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheyTrustedUs;