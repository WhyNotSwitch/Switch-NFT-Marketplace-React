import React from "react";
import HeroItems from "./HeroItems";
import MainNav from "./MainNav";
import ProductCarousel from "./ProductCarousel";
import "./theme.min.css";
import RecentDrops from "./RecentDrops";
import TopCreators from "./TopCreators";
import Banner from "./Banner";
import FeatureCarousel from "./FeatureCarousel";
import Blog from "./Blog";
import Footer from "./MainFooter";
import BacktoTop from "./BacktoTop";
import HandheldToolbar from "./HandheldToolbar";

function Index() {
  return (
    <div className="">
      <main className="">
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
      <Blog />
      {/* <!-- Footer--> */}
      <Footer />
      {/* <!-- Toolbar for handheld devices (NFT Marketplace)--> */}
      <HandheldToolbar />
      {/* <!-- Back To Top Button--> */}
      <BacktoTop />
    </div>
  );
}

export default Index;
