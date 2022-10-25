import React from "react";
import "./theme.min.css";
import "./styles.css";
import Nft1 from "./img/Switch/n1.jpg";

function Hero() {
  return (
    <section className="mb-lg-2 bg-faded-accent bg-size-cover" id="hero">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center gy-3 py-3 text-lg-start text-center">
          <div className="col-lg-5 col-md-8 col-sm-10">
            <h1 className="mb-4 pb-lg-2">
              Discover rare digital art, collect NFTs and invest in Solar
              projects
            </h1>
            <p className="mb-lg-5 mb-4 fs-lg">
              The world's first and largest digital marketplace with crypto
              collectibles and non-fungible tokens (NFTs) for Solar projects.
            </p>
            <div className="d-lg-flex d-none flex-sm-row flex-column justify-content-lg-start justify-content-center">
              <a
                className="btn btn-lg btn-accent me-sm-3 mb-sm-3 mb-2"
                href="marketplace.html"
              >
                Explore marketplace
              </a>
              <a
                className="btn btn-lg btn-outline-dark mb-sm-3 mb-2"
                href="nft-create-item.html"
              >
                Become a Developer
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 offset-lg-1 col-sm-10">
            {/* <!-- Top auctions carousel--> */}
            <div className=" tns-nav-enabled mb-4 mx-n2">
              <div className="" data-carousel-options='{"controls": false}'>
                {/* {/* <!-- Carousel item--> */}
                <div className="px-2">
                  <img className="rounded-3" src={Nft1} alt="Product" />
                  <div className="position-relative">
                    <div className="position-absolute start-0 bottom-0 w-100 p-md-5 p-sm-4 p-3">
                      <div className="pt-sm-0 pt-2 px-sm-4 px-2 bg-white rounded shadow">
                        <div className="row gx-5">
                          <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                            <h6 className="mb-1 fs-sm fw-normal text-muted">
                              Current bid:
                            </h6>
                            <span className="h6 mb-0">0.5 ETH</span>
                          </div>
                          <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                            <hr className="hr-vertical position-absolute start-0 top-0 ml-n4" />
                            <h6 className="mb-1 fs-sm fw-normal text-muted">
                              Ends in:
                            </h6>
                            <span className="h6 mb-0">18 hours</span>
                          </div>
                          <div className="col-sm-4 position-relative py-sm-3 py-2">
                            <hr className="hr-vertical position-absolute start-0 top-0 ml-n4 d-sm-block d-none" />
                            <div className="d-flex align-items-center h-100">
                              <a
                                className="btn btn-sm btn-dark w-100"
                                href="nft-single-auction-live.html"
                              >
                                Start bid
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Carousel item--> */}

                {/* {/* <!-- Carousel item--> */}
              </div>
            </div>
            <div className="d-lg-none d-flex flex-sm-row flex-column justify-content-lg-start justify-content-center">
              <a
                className="btn btn-lg btn-accent me-sm-3 mb-2"
                href="marketplace.html"
              >
                Explore marketplace
              </a>
              <a
                className="btn btn-lg btn-outline-dark mb-2"
                href="nft-create-item.html"
              >
                Become a Developer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
