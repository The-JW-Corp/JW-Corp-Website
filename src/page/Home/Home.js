import Cta from "../../components/Cta/Cta";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Navbar from "../../components/Navbar/Navbar";
import LandingPage from "../../components/LandingPage/LandingPage";
import NotreMission from "../../components/NotreMission/NotreMission";
import NosValeurs from "../../components/NosValeurs/NosValeurs";
import Google from "../../components/Googlemaps/Google";
import Footer from "../../components/Footer/Footer";
import AnimationsComponent from "../../components/AnimationsComponent/AnimationsComponent";
import Calendly from "../../components/Calendly/Calendly";
import Carousel from "../../components/Carousel/Carousel.tsx";
import TheyTrustedUs from "../../components/TheyTrustedUs/TheyTrustedUs.tsx";
function Home({ langageState }) {
  const [docRefFromHomeState, setDocRefFromState] = useState();
  const [userIpAddressFromLinkedin, setUserIpAddressFromLinkedin] = useState();
  let navigate = useNavigate();
  let urlEnd = window.location.href.split("/")[3];
  async function getIpAddress() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setUserIpAddressFromLinkedin(data?.ip);
      // console.log('IP address retrieved:', data.ip);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    getIpAddress();
  }, []);
  useEffect(() => {
    async function handleUserFromLinkedin() {
      try {
        const viewedAt = new Date();
        const calendlyViewedCollection = collection(db, "calendlyViewed");
        let docRef = "";
        if (urlEnd === "?utm_source=linkedin") {
          docRef = await addDoc(calendlyViewedCollection, {
            from_linkedin: true,
            ip_address_from_linkedin: userIpAddressFromLinkedin,
            date_from_linkedin: viewedAt,
          });
        } else if (urlEnd === "?utm_source=codeur") {
          docRef = await addDoc(calendlyViewedCollection, {
            from_codeur: true,
            ip_address_from_codeur: userIpAddressFromLinkedin,
            date_from_codeur: viewedAt,
          });
        }

        console.log("Document written with ID: ", docRef.id);
        setDocRefFromState(docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    if (urlEnd === "?utm_source=linkedin" && userIpAddressFromLinkedin) {
      console.log("vient de linkedin");
      handleUserFromLinkedin(urlEnd);
      navigate("/");
    }
    if (urlEnd === "?utm_source=codeur" && userIpAddressFromLinkedin) {
      console.log("vient de codeur.com");
      handleUserFromLinkedin(urlEnd);
      navigate("/");
    }
  }, [userIpAddressFromLinkedin]);
  return (
    <>
      <LandingPage langageState={langageState} />
      <NotreMission langageState={langageState} />
      <Cta langageState={langageState} />
      <Carousel />
      <TheyTrustedUs/>
      <NosValeurs langageState={langageState} />
      <Calendly urlEnd={urlEnd} docRefFromHomeState={docRefFromHomeState} />
      <Google langageState={langageState} />
      <Footer langageState={langageState} />
      <AnimationsComponent langageState={langageState} />
    </>
  );
}

export default Home;
