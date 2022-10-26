import React from "react";
import Footer from "./Footer";
import NavBar from "./Nav";
import SignoutBody from "./SignoutBody";

function SignOut() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <SignoutBody />
      <Footer />
    </div>
  );
}

export default SignOut;
