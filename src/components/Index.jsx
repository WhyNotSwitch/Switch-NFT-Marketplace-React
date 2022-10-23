import React from "react";
import HeroItems from "./HeroItems";
import MainNav from "./MainNav";
import ProductCarousel from "./ProductCarousel";
import "./theme.min.css";
import RecentDrops from "./RecentDrops";
import TopCreators from "./TopCreators";
import Banner from "./Banner";
import FeatureCarousel from "./FeatureCarousel";
import BgShape from "./BgShape";
import Footer from "./MainFooter";
import HandheldToolbar from "./HandheldToolbar";

function Index() {
  return (
    <div className="handheld-toolbar-enabled">
      <main className="page-wrapper">
        {/* <!-- Navbar for NFT Marketplace demo-->
        <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.--> */}
        <MainNav />
        {/* <!-- Hero--> */}
        <HeroItems />
        {/* <!-- Product carousel (Recent Drops)--> */}
        <RecentDrops />
        {/* <!-- Product carousel (Trending in)--> */}
        <ProductCarousel />
        {/* <!-- Top Creators--> */}
        <TopCreators />
        {/* <!-- Recommended collections--> */}

        {/* <!-- Mobile app--> */}
        <Banner />
        {/* <!-- Features--> */}
        <FeatureCarousel />
      </main>
      {/* <!-- Bg shape--> */}
      <BgShape />
      {/* <!-- Footer--> */}
      <Footer />
      {/* <!-- Toolbar for handheld devices (NFT Marketplace)--> */}
      <HandheldToolbar />
      {/* <!-- Back To Top Button--> */}
      <a className="btn-scroll-top" href="#top" data-scroll>
        <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
          Top
        </span>
        <i className="btn-scroll-top-icon ci-arrow-up"> </i>
      </a>
    </div>
  );
}

export default Index;
