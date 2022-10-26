import React from "react";
import Footer from "./Footer";
import NavBar from "./Nav";
import NotificationsBody from "./NotificationsBody";
import PageTitle from "./PageTitle";

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
