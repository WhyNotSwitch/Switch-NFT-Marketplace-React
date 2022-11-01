import React from "react";
import Footer from "../Common/Footer";
import MyItemsBody from "./MyItemsBody";
import NavBar from "../Common/Nav";

function MyItems() {
  return (
    <div>
      <NavBar />
      <MyItemsBody />
      <Footer />
    </div>
  );
}

export default MyItems;
