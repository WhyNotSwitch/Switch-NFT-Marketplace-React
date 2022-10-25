import React from "react";
import "./theme.min.css";
import "./styles.css";
import ToolBar from "./Toolbar";
import FeatureCarousel from "./FeatureCarousel";
import NavBar from "./Nav";
import Footer from "./Footer";

function MarketPlace() {
  return (
    <div className="market">
      <NavBar />
      <ToolBar />
      <FeatureCarousel />
      <Footer />
    </div>
  );
}

export default MarketPlace;
