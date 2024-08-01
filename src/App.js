import React from "react";
import Home from "./page/Home/Home";
import Services from "./page/Services/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import MentionsLegales from "./components/MentionsLegales/MentionsLegales";
import BitcoinPrice from "./page/BitcoinPrice/BitcoinPrice";
function App() {
  const [langageState, setLangageState] = useState(false);
  const handlingLangage = () => {
    setLangageState(!langageState);
  };
  function checkDomain() {
    return window.location.hostname === "bitcoin.price.jwcorp.io";
  }
  return (
    <BrowserRouter>
      <Navbar checkDomain={checkDomain} handlingLangage={handlingLangage} langageState={langageState} />
      {checkDomain() ? (
        <BitcoinPrice />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handlingLangage={handlingLangage}
                langageState={langageState}
              />
            }
          />
          <Route
            path="/Services"
            element={<Services langageState={langageState} />}
          />
          <Route
            path="/MentionsLegales"
            element={<MentionsLegales langageState={{ langageState }} />}
          />
          <Route path="/Bitcoin-price" element={<BitcoinPrice />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
