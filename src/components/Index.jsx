import React from "react";
import NavBar from "./NavBar";
//import useScript from "./Hooks/useScript";
import Footer from "./Footer";
import Hero from "./Hero";
import nftImages from "./nftImgData";
import NftCard from "./Card";
import "./theme.min.css";

function Index() {
  //useScript("./theme.min.js");
  return (
    <div>
      {/* <NavBar /> */}
      <Hero />
      {/* <Footer /> */}
    </div>
  );
}

export default Index;
