import React from "react";
import CollectionsBody from "../JSX/CollectionsBody";
import FeatureCarousel from "../JSX/FeatureCarousel";
import Footer from "../JSX/Footer";
import JumboTron from "../JSX/JumboTron";
import NavBar from "../JSX/Nav";

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
