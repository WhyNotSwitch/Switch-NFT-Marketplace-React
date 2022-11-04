import Hero from "../JSX/Hero";
import ProductCarousel from "../JSX/ProductCarousel";
import RecentDrops from "../JSX/RecentDrops";
import TopCreators from "../JSX/TopCreators";
import Banner from "../JSX/Banner";
import FeatureCarousel from "../JSX/FeatureCarousel";
import Blog from "../JSX/Blog";
import BacktoTop from "../JSX/BacktoTop";
import HandheldToolbar from "../JSX/HandheldToolbar";
import JumboTron from "../JSX/JumboTron";
import BaseLayout from "../Common/BaseLayout";

function Home() {
  return (
    <div className="page">
      <BaseLayout
        navProp={{ className: "active" }}
        footerProp={{ className: "mt-n10 pt-10 bg-dark" }}
      >
        {/* <!-- Hero--> */}
        <Hero />
        {/* <!-- Product carousel (Recent Drops)--> */}
        <RecentDrops />
        {/* <!-- Product carousel (Trending in)--> */}
        <ProductCarousel />
        {/* <!-- Top Creators--> */}
        <TopCreators />
        {/* <!-- Mobile app--> */}
        <Banner />
        {/* <!-- Features--> */}
        <FeatureCarousel />
        {/* <!-- Bg shape--> */}
        <Blog className="mb-n10 pb-10 bg-secondary" />
        <JumboTron />
        {/* <!-- Toolbar for handheld devices (NFT Marketplace)--> */}
        <HandheldToolbar />
        {/* <!-- Back To Top Button--> */}
        <BacktoTop />
      </BaseLayout>
    </div>
  );
}

export default Home;
