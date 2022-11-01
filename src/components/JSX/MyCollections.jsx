import React from "react";
import MyCollectionsBody from "./MyCollectionsBody";
import NavBar from "../Common/Nav";
import PageTitle from "../Common/PageTitle";
import Footer from "../Common/Footer";

function MyCollections() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <PageTitle />
      <MyCollectionsBody />
      <Footer />
    </div>
  );
}

export default MyCollections;
