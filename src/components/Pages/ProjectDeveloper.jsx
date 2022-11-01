import React from "react";
import Banner from "../JSX/Banner";
import NavBar from "../JSX/Nav";
import JumboTron from "../JSX/JumboTron";
import Footer from "../JSX/Footer";
import FeatureCarousel from "../JSX/FeatureCarousel";
import ProjectdeveloperBody from "../JSX/ProjectdeveloperBody";

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
