import React from "react";
import Hero from "./Hero";
import NavBar from "./Nav";
import ProductCarousel from "./ProductCarousel";
import "./theme.min.css";
import "./styles.css";
import RecentDrops from "./RecentDrops";
import TopCreators from "./TopCreators";
import Banner from "./Banner";
import FeatureCarousel from "./FeatureCarousel";
import Blog from "./Blog";
import Footer from "./Footer";
import BacktoTop from "./BacktoTop";
import HandheldToolbar from "./HandheldToolbar";

function Home() {
  return (
    <div className="page">
      <NavBar />
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

export default Home;
