import React from "react";
import Navbar from "./components/nav";
import Header from "./components/Header";
import Shop from "./components/shop";
import FooterContainer from "./Container/Footer.js";
import Popup from "./components/Popup";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1500);
  }, []);
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={false} toggle={toggle} />
      <Navbar />
      <Header />
      <Shop />
      <FooterContainer />
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}></Popup>
    </>
  );
};

export default App;
