import React from "react";
import FeatureCarousel from "../JSX/FeatureCarousel";
import Footer from "../Common/Footer";
import JumboTron from "../JSX/JumboTron";
import NavBar from "../Common/Nav";
import SinglebuyBody from "../JSX/SinglebuyBody";
import BaseLayout from "../Common/BaseLayout";

function SingleBuy() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout navProp={myStyle} footerProp={"mt-n10 pt-10 bg-dark"}>
      <SinglebuyBody />
      <FeatureCarousel />
      <JumboTron />
    </BaseLayout>
  );
}

export default SingleBuy;
