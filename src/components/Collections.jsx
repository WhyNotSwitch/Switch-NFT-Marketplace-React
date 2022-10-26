import React from "react";
import CollectionsBody from "./CollectionsBody";
import FeatureCarousel from "./FeatureCarousel";
import Footer from "./Footer";
import JumboTron from "./JumboTron";
import NavBar from "./Nav";

function Collections() {
  return (
    <div>
      <NavBar />
      <CollectionsBody />
      <FeatureCarousel />
      <JumboTron />
      <Footer className="mt-n10 pt-10 bg-dark" />
    </div>
  );
}

export default Collections;
