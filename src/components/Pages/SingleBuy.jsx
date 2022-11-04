import FeatureCarousel from "../JSX/FeatureCarousel";
import JumboTron from "../JSX/JumboTron";
import SinglebuyBody from "../JSX/SinglebuyBody";
import BaseLayout from "../Common/BaseLayout";
import BacktoTop from "../JSX/BacktoTop";

function SingleBuy() {
  return (
    <BaseLayout
      navProp={{ style: { paddingBottom: "90px" } }}
      footerProp={{ className: "mt-n10 pt-10 bg-dark" }}
    >
      <SinglebuyBody />
      <FeatureCarousel />
      <JumboTron />
      <BacktoTop />
    </BaseLayout>
  );
}

export default SingleBuy;
