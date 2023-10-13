import React, { useState, useEffect, useRef } from "react";
import "./Calendly.css";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
function Calendly() {
  const [calendlyHeight, setCalendlyHeight] = useState();
  const [calendlyWidth, setCalendlyWidth] = useState();
  const [userIpAddress, setUserIpAddress] = useState();
  const calendlyRef = useRef(null);
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    // onEventTypeViewed: () => getIpAddress(),
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
  function checkIfInView() {
    const rect = calendlyRef.current.getBoundingClientRect();
    // console.log('Checking if Calendly is in view...')
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      getIpAddress();
      // handleCalendlyViewed();
      window.removeEventListener("scroll", checkIfInView); // Supprimez l'écouteur d'événements une fois que le calendly est en vue
    }
  }

  async function getIpAddress() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setUserIpAddress(data.ip);
      // console.log('IP address retrieved:', data.ip);
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
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    return () => {
      window.removeEventListener("scroll", checkIfInView); // Nettoyez l'écouteur d'événements lorsque le composant est démonté
    };
  }, []);
  return (
    <section id="calendly-id" className="calendly-container" ref={calendlyRef}>
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
