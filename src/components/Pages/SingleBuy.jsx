import FeatureCarousel from "../JSX/FeatureCarousel";
import JumboTron from "../JSX/JumboTron";
import SinglebuyBody from "../JSX/SinglebuyBody";
import BaseLayout from "../Common/BaseLayout";

function SingleBuy() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout navProp={myStyle} footerProp={"mt-n10 pt-10 bg-dark"}>
      <SinglebuyBody />
      <FeatureCarousel />
      <JumboTron />
    </BaseLayout>
  );
}

export default SingleBuy;
