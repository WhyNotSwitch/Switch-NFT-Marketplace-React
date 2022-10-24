import React from "react";
import "./styles.css";
import MobApp from "./img/nft/mobile-app.svg";

function Banner() {
  return (
    <section className="container py-lg-5 py-4">
      {/* <!-- Banner--> */}
      <div className="card border-0 position-relative overflow-hidden">
        {/* <!-- Overlay bg--> */}
        <span
          className="d-block w-100 h-100 position-absolute top-0 start-0 zindex-1 bg-accent opacity-15"
          id="overlay-span"
        ></span>
        {/* <!-- Overlay content--> */}
        <div className="card-body row py-0 px-sm-0 position-relative zindex-5">
          <div className="col-lg-9 col-sm-10 offset-sm-1 d-flex flex-md-row flex-column align-items-md-end text-md-start text-center">
            <div
              className="my-5 me-md-5 me-auto ms-md-0 ms-auto py-md-4"
              style={{ maxWidth: "495px" }}
            >
              <h3 className="h2 mb-3">
                <span className="text-accent">Best place</span> for SOLAR & NFT
                Enthusiasts
              </h3>
              <p className="mb-sm-4 mb-3">
                If you're an Solar enthusiast, or are looking to get more
                familiar with NFTs, consider joining Switch as a Project
                Developer
              </p>
              <div className="mx-n1">
                <a className="btn-market btn-apple mt-3 mx-1" href="empty">
                  <span className="btn-market-subtitle">Coming soon to </span>
                  <span className="btn-market-title">App Store</span>
                </a>
                <a className="btn-market btn-google mt-3 mx-1" href="empty">
                  <span className="btn-market-subtitle">Coming soon to </span>
                  <span className="btn-market-title">Google Play</span>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 ms-md-auto">
              <img
                src={MobApp}
                alt="Illustration"
                style={{
                  borderTopLeftRadius: "28px",
                  borderTopRightRadius: "28px",
                  boxShadow: "16px 16px 24px -7px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
