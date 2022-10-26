import React from "react";
import MyCollectionsBody from "./MyCollectionsBody";
import NavBar from "./Nav";
import PageTitle from "./PageTitle";
import Footer from "./Footer";

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
