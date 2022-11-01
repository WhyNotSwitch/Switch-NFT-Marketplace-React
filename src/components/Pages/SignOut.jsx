import React from "react";
import Footer from "../Common/Footer";
import NavBar from "../Common/Nav";
import SignoutBody from "../JSX/SignoutBody";

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
