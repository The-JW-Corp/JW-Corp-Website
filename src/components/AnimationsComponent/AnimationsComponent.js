import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";

function AnimationsComponent() {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


  const slideInTop = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };



  useEffect(() => {
    slideInTop("#cta-form-text");
    slideInTop("#form");
  }, []);

  const slideInLeft = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeft("#cta-contact-us");
  }, []);

  // Animations "Nos Services" in NotreMission --> Blocs de textes
  const slideInLeftServiceTitle = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 60%",
          end: "bottom center",
          // toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeftServiceTitle("#notre-mission-title");
  }, []);


  const slideInLeftServiceDev = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 60%",
          end: "bottom center",
          // toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeftServiceDev("#notre-mission-animation");
  }, []);

  // Animation "lineAnimation" in Formulaire --> Lines
  const lineTriggerTop = (element) => {
    gsap.fromTo(
      element,
      {
        x: -350,
      },
      {
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "10px 90%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    lineTriggerTop(".line-animation-top");
  }, []);

  const lineTriggerBottom = (element) => {
    gsap.fromTo(
      element,
      {
        x: "100%",
      },
      {
        x: "0%",
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 90%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    lineTriggerBottom(".line-animation-bottom");
  }, []);

  return (
    <>
    </>
  );
}
export default AnimationsComponent;