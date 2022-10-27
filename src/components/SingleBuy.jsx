import React from "react";
import FeatureCarousel from "./FeatureCarousel";
import Footer from "./Footer";
import JumboTron from "./JumboTron";
import NavBar from "./Nav";
import SinglebuyBody from "./SinglebuyBody";

function SingleBuy() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <SinglebuyBody />
      <FeatureCarousel />
      <JumboTron />
      <Footer className="mt-n10 pt-10 bg-dark" />
    </div>
  );
}

export default SingleBuy;
