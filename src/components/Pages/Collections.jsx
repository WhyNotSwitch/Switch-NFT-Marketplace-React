import React from "react";
import CollectionsBody from "../JSX/CollectionsBody";
import FeatureCarousel from "../JSX/FeatureCarousel";
import Footer from "../Common/Footer";
import JumboTron from "../JSX/JumboTron";
import NavBar from "../Common/Nav";

function Collections() {
  return (
    <div>
      <NavBar classid={"active"} />
      <CollectionsBody />
      <FeatureCarousel />
      <JumboTron />
      <Footer className="mt-n10 pt-10 bg-dark" />
    </div>
  );
}

export default Collections;
