import React from "react";
import "./TheyTrustedUs.css";
// @ts-ignore
import { logosData } from "./TheyTrustedUsData.tsx";
import { v4 as uuidv4 } from 'uuid';
const TheyTrustedUs: React.FC = () => {
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
