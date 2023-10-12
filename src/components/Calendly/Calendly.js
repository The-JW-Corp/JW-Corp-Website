import React, { useState, useEffect } from "react";
import "./Calendly.css";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
function Calendly() {
  const [calendlyHeight, setCalendlyHeight] = useState();
  const [calendlyWidth, setCalendlyWidth] = useState();
  const [userIpAddress, setUserIpAddress] = useState();
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => getIpAddress(),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  const handleResize = () => {
    // console.log(window.innerWidth);
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

  async function getIpAddress() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setUserIpAddress(data.ip);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function handleCalendlyViewed() {
    try {
      // await getIpAddress();  // Attendre que getIpAddress se termine
      const viewedAt = new Date();
      const calendlyViewedCollection = collection(db, "calendlyViewed");
      const docRef = await addDoc(calendlyViewedCollection, {
        date: viewedAt,
        ip_address: userIpAddress,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(() => {
    handleCalendlyViewed();
  }, [userIpAddress]);

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
