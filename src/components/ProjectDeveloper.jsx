import React from "react";
import Banner from "./Banner";
import NavBar from "./Nav";
import JumboTron from "./JumboTron";
import Footer from "./Footer";
import FeatureCarousel from "./FeatureCarousel";
import ProjectdeveloperBody from "./ProjectdeveloperBody";

function ProjectDeveloper() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <ProjectdeveloperBody />
      <Banner />
      <FeatureCarousel />
      <JumboTron />
      <Footer className="mt-n10 pt-10 bg-dark" />
    </div>
  );
}

export default ProjectDeveloper;
