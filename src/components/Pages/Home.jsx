import React from "react";
import Hero from "../JSX/Hero";
import NavBar from "../JSX/Nav";
import ProductCarousel from "../JSX/ProductCarousel";
import "../CSS/theme.min.css";
import "../CSS/styles.css";
import RecentDrops from "../JSX/RecentDrops";
import TopCreators from "../JSX/TopCreators";
import Banner from "../JSX/Banner";
import FeatureCarousel from "../JSX/FeatureCarousel";
import Blog from "../JSX/Blog";
import Footer from "../JSX/Footer";
import BacktoTop from "../JSX/BacktoTop";
import HandheldToolbar from "../JSX/HandheldToolbar";
import JumboTron from "../JSX/JumboTron";

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
      <Blog className="mb-n10 pb-10 bg-secondary" />
      <JumboTron />
      {/* <!-- Footer--> */}
      <Footer className="mt-n10 pt-10 bg-dark" />
      {/* <!-- Toolbar for handheld devices (NFT Marketplace)--> */}
      <HandheldToolbar />
      {/* <!-- Back To Top Button--> */}
      <BacktoTop />
    </div>
  );
}

export default Home;
