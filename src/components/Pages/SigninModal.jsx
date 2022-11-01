import React from "react";
import Footer from "../JSX/Footer";
import NavBar from "../JSX/Nav";
import SigninBody from "../JSX/SigninBody";

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
