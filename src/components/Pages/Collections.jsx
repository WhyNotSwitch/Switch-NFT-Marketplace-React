import CollectionsBody from "../JSX/CollectionsBody";
import FeatureCarousel from "../JSX/FeatureCarousel";
import JumboTron from "../JSX/JumboTron";
import BaseLayout from "../Common/BaseLayout";


function Collections() {
  return (
    <BaseLayout footerProp={"mt-n10 pt-10 bg-dark"}>
      <CollectionsBody />
      <FeatureCarousel />
      <JumboTron />
    </BaseLayout>
  );
}

export default Collections;
