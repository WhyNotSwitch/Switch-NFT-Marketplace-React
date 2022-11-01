import React from "react";
import "../CSS/theme.min.css";
import "../CSS/styles.css";
import ToolBar from "../JSX/Toolbar";
import FeatureCarousel from "../JSX/FeatureCarousel";
import NavBar from "../Common/Nav";
import Footer from "../Common/Footer";
import JumboTron from "../JSX/JumboTron";

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
