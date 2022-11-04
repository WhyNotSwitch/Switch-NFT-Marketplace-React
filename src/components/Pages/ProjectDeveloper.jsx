import Banner from "../JSX/Banner";
import JumboTron from "../JSX/JumboTron";
import FeatureCarousel from "../JSX/FeatureCarousel";
import ProjectdeveloperBody from "../JSX/ProjectdeveloperBody";
import BaseLayout from "../Common/BaseLayout";
import BacktoTop from "../JSX/BacktoTop";

function ProjectDeveloper() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout
      navProp={{ style: myStyle }}
      footerProp={{ className: "mt-n10 pt-10 bg-dark" }}
    >
      <ProjectdeveloperBody />
      <Banner />
      <FeatureCarousel />
      <JumboTron />
      <BacktoTop />
    </BaseLayout>
  );
}

export default ProjectDeveloper;
