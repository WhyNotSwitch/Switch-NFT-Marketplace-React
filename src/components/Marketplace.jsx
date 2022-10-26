import React from "react";
import "./theme.min.css";
import "./styles.css";
import ToolBar from "./Toolbar";
import FeatureCarousel from "./FeatureCarousel";
import NavBar from "./Nav";
import Footer from "./Footer";
import JumboTron from "./JumboTron";

function MarketPlace() {
  return (
    <div className="market">
      <NavBar />
      <ToolBar />
      <FeatureCarousel />
      <JumboTron />
      <Footer className="mt-n10 pt-10 bg-dark" />
    </div>
  );
}

export default MarketPlace;
