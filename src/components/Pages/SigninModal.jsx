import React from "react";
import Footer from "../Common/Footer";
import NavBar from "../Common/Nav";
import BacktoTop from "../JSX/BacktoTop";
import SigninBody from "../JSX/SigninBody";

function SigninModal() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <SigninBody />
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default SigninModal;
