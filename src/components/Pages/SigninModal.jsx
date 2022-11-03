import React from "react";
import BaseLayout from "../Common/BaseLayout";
import Footer from "../Common/Footer";
import SigninBody from "../JSX/SigninBody";

function SigninModal() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout navProp={myStyle}>
      <SigninBody />
    </BaseLayout>
  );
}

export default SigninModal;
