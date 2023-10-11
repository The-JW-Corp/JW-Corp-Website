import React, { useState, useEffect } from "react";
import "./Calendly.css";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
function Calendly() {
  const [calendlyHeight, setCalendlyHeight] = useState();
  const [calendlyWidth, setCalendlyWidth] = useState();
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  const handleResize = () => {
    console.log(window.innerWidth);
    let windowWidthSize = window.innerWidth;
    if (windowWidthSize < 860) {
      setCalendlyHeight("1200px");
      setCalendlyWidth("80%");
    } else if (windowWidthSize < 835) {
      setCalendlyHeight("600px");
      setCalendlyWidth("80%");
    } else if (windowWidthSize < 1025) {
      setCalendlyHeight("1200px");
      setCalendlyWidth("80%");
    } else if (windowWidthSize < 1270) {
      setCalendlyHeight("1200px");
    } else if (windowWidthSize > 1025) {
      setCalendlyHeight("800px");
      setCalendlyWidth("80%");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    // Nettoyez l'écouteur d'événements lorsque le composant est démonté
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);
  return (
    <section className="calendly-container">
      <InlineWidget
        styles={{
          height: calendlyHeight,
          width: calendlyWidth,
        }}
        url="https://calendly.com/jw-corp/rendez-vous-jw-corp"
      />
    </section>
  );
}

export default Calendly;
