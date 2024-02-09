import React from "react";
import "./TheyTrustedUs.css";
import { logosData } from "./TheyTrustedUsData.ts";
import { v4 as uuidv4 } from 'uuid';
const TheyTrustedUs: React.FC = () => {
  console.log(logosData[0].src)
  return (
    <div className="they-trusted-us-container">
      <div className="they-trusted-us-logo-container">
        {logosData.map((logo) => (
          <div key={uuidv4()}>
            <img id={logo.id} src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheyTrustedUs;
