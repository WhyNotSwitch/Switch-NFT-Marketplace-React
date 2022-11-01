import React from "react";
import Footer from "../Common/Footer";
import NavBar from "../Common/Nav";
import NotificationsBody from "./NotificationsBody";
import PageTitle from "../Common/PageTitle";

function Notifications() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <PageTitle />
      <NotificationsBody />
      <Footer />
    </div>
  );
}

export default Notifications;
