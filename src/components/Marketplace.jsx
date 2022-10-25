import React from "react";
import "./theme.min.css";
import "./styles.css";
import ToolBar from "./Toolbar";
import MartNav from "./MartNav";
import FeatureCarousel from "./FeatureCarousel";
import MartFooter from "./MartFooter";

function MarketPlace() {
  return (
    <div className="market">
      <MartNav />
      <ToolBar />
      <FeatureCarousel />
      <MartFooter />
    </div>
  );
}

export default MarketPlace;
