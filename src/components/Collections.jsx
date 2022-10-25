import React from "react";
import CollectionsBody from "./CollectionsBody";
import FeatureCarousel from "./FeatureCarousel";
import Footer from "./Footer";
import NavBar from "./Nav";

function Collections() {
  return (
    <div>
      <NavBar />
      <CollectionsBody />
      <FeatureCarousel />
      <Footer />
    </div>
  );
}

export default Collections;
