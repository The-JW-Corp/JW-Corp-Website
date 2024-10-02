"use client";
import React from "react";
import "./TheyTrustedUs.css";
import { logosData } from "./TheyTrustedUsData";

const TheyTrustedUs: React.FC = () => {
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