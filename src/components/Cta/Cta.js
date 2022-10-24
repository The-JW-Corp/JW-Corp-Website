import React from "react";
import "./Cta.css";
const Cta = () => {
  return (
    <div className="cta-component">
      <div className="cta-wrap">
        <p className="cta-text">
          <strong> Vous souhaitez en savoir plus ?</strong> <br /> Envoyez-nous
          un message afin de commencer à discuter autour de votre projet.
        </p>
        <a className="cta-button" href="/#">
          Contactez-nous
        </a>
      </div>
    </div>
  );
};

export default Cta;
