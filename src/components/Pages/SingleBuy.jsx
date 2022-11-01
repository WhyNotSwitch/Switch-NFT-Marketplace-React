import React from "react";
import FeatureCarousel from "../JSX/FeatureCarousel";
import Footer from "../Common/Footer";
import JumboTron from "../JSX/JumboTron";
import NavBar from "../Common/Nav";
import SinglebuyBody from "../JSX/SinglebuyBody";

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
