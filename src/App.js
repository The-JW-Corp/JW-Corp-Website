import React from 'react'
import Home from "./page/Home/Home";
import Services from './page/Services/Services';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';
function App() {
  const [langageState, setLangageState] = useState(true);
  const handlingLangage = () => {
    setLangageState(!langageState);
  };
  return (
    <BrowserRouter>
    <Navbar handlingLangage={handlingLangage} langageState={langageState} />
      <Routes>
        <Route path='/' element={<Home handlingLangage={handlingLangage} langageState={langageState} />}/>
        <Route path='/Services' element={<Services langageState={langageState} />} />
        <Route path="/MentionsLegales" element={<MentionsLegales langageState={{langageState}}/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;