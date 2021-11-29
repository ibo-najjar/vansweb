import React from "react";
import Navbar from "./components/nav";
import Header from "./components/Header";
import Shop from "./components/shop";
import FooterContainer from "./Container/Footer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Shop />
      <FooterContainer />
    </>
  );
};

export default App;
