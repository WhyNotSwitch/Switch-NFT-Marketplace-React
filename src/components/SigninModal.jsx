import React from "react";
import Footer from "./Footer";
import NavBar from "./Nav";
import SigninBody from "./SigninBody";

function SigninModal() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <SigninBody />
      <Footer />
    </div>
  );
}

export default SigninModal;
