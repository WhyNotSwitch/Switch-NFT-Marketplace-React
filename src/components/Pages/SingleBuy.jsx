import React from "react";
import FeatureCarousel from "../JSX/FeatureCarousel";
import Footer from "../Common/Footer";
import JumboTron from "../JSX/JumboTron";
import NavBar from "../Common/Nav";
import SinglebuyBody from "../JSX/SinglebuyBody";
import BacktoTop from "../JSX/BacktoTop";

function SingleBuy() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <SinglebuyBody />
      <FeatureCarousel />
      <JumboTron />
      <Footer className="mt-n10 pt-10 bg-dark" />
      <BacktoTop />
    </div>
  );
}

export default SingleBuy;
