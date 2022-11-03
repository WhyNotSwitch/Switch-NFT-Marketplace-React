import Banner from "../JSX/Banner";
import JumboTron from "../JSX/JumboTron";
import FeatureCarousel from "../JSX/FeatureCarousel";
import ProjectdeveloperBody from "../JSX/ProjectdeveloperBody";
import BaseLayout from "../Common/BaseLayout";


function ProjectDeveloper() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout navProp={myStyle} footerProp={"mt-n10 pt-10 bg-dark"}>
      <ProjectdeveloperBody />
      <Banner />
      <FeatureCarousel />
      <JumboTron />
    </BaseLayout>
  );
}

export default ProjectDeveloper;
