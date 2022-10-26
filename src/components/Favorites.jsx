import React from "react";
import FavoritesBody from "./FavoritesBody";
import Footer from "./Footer";
import NavBar from "./Nav";
import PageTitle from "./PageTitle";

function Favorites() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <PageTitle />
      <FavoritesBody />
      <Footer />
    </div>
  );
}

export default Favorites;
