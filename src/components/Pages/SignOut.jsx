import React from "react";
import Footer from "../Common/Footer";
import NavBar from "../Common/Nav";
import BacktoTop from "../JSX/BacktoTop";
import SignoutBody from "../JSX/SignoutBody";

function SignOut() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <SignoutBody />
      <Footer />
      <BacktoTop />
    </div>
  );
}

export default SignOut;
