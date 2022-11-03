import ToolBar from "../JSX/Toolbar";
import FeatureCarousel from "../JSX/FeatureCarousel";
import JumboTron from "../JSX/JumboTron";
import BaseLayout from "../Common/BaseLayout";

function MarketPlace() {
  return (
    <div className="market">
      <BaseLayout footerProp={"mt-n10 pt-10 bg-dark"}>
        <ToolBar />
        <FeatureCarousel />
        <JumboTron />
      </BaseLayout>
    </div>
  );
}

export default MarketPlace;
