import Cta from "../../components/Cta/Cta";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { doc, addDoc, collection, updateDoc } from "firebase/firestore";
// import { useLocation } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import Navbar from "../../components/Navbar/Navbar";
import LandingPage from "../../components/LandingPage/LandingPage";
import NotreMission from "../../components/NotreMission/NotreMission";
import NosValeurs from "../../components/NosValeurs/NosValeurs";
import Google from "../../components/Googlemaps/Google";
import Footer from "../../components/Footer/Footer";
import AnimationsComponent from "../../components/AnimationsComponent/AnimationsComponent";
import Formulaire from "../../components/Formulaire/Formulaire";
import Calendly from "../../components/Calendly/Calendly";
function Home({ langageState }) {
  const [docRefFromHomeState, setDocRefFromState] = useState();
  let navigate = useNavigate();
  let urlEnd = window.location.href.split("/")[3];
  useEffect(() => {
    async function handleUserFromLinkedin() {
      try {
        const calendlyViewedCollection = collection(db, "calendlyViewed");
        const docRef = await addDoc(calendlyViewedCollection, {
          from_linkedin: true,
        });
        console.log("Document written with ID: ", docRef.id);
        setDocRefFromState(docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    if (urlEnd === "?utm_source=linkedin") {
      console.log("vient de linkedin");
      handleUserFromLinkedin();
      navigate("/");
    }
  }, []);
  return (
    <>
      <LandingPage langageState={langageState} />
      <NotreMission langageState={langageState} />
      <Cta langageState={langageState} />
      <NosValeurs langageState={langageState} />
      {/* <Formulaire langageState={langageState} /> */}
      <Calendly urlEnd={urlEnd} docRefFromHomeState={docRefFromHomeState} />
      <Google langageState={langageState} />
      <Footer langageState={langageState} />
      <AnimationsComponent langageState={langageState} />
    </>
  );
}

export default Home;
