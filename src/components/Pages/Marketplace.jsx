import ToolBar from "../JSX/Toolbar";
import FeatureCarousel from "../JSX/FeatureCarousel";
import JumboTron from "../JSX/JumboTron";
import BaseLayout from "../Common/BaseLayout";
import BacktoTop from "../JSX/BacktoTop";

function MarketPlace() {
  return (
    <div className="market">
      <BaseLayout
        navProp={{ activeid: "active" }}
        footerProp={{ className: "mt-n10 pt-10 bg-dark" }}
      >
        <ToolBar />
        <FeatureCarousel />
        <JumboTron />
        <BacktoTop />
      </BaseLayout>
    </div>
  );
}

export default MarketPlace;
