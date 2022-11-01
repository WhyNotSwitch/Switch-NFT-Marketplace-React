import React from "react";
import Nft9 from "../img/Switch/n9.jpg";
import Nft10 from "../img/Switch/n10.jpg";
import Nft11 from "../img/Switch/n11.jpg";
import Nft12 from "../img/Switch/n12.jpg";
import Nft13 from "../img/Switch/n13.jpg";
import Nft14 from "../img/Switch/n14.jpg";
import ThumbNl1 from "../img/nft/thumbnails/01.png";
import ThumbNl3 from "../img/nft/thumbnails/03.png";
import SideBar from "./SideBar";

function MyCollectionsBody() {
  return (
    <div className="container mb-5 pb-5">
      <div className="bg-light shadow-lg rounded-3 overflow-hidden">
        <div className="row">
          <SideBar />
          <section className="col-lg-9 pt-lg-4 pb-4 mb-3">
            <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
              <h1 className="h3 mb-4 pb-2 text-sm-start text-center">
                My Collections
              </h1>
              {/* <!-- Collections grid--> */}
              <div className="row row-cols-md-2 row-cols-1 g-4 mb-4 pb-3">
                {/* <!-- Collection item--> */}
                <div className="col">
                  <article>
                    <div className="card mb-3">
                      <div className="card-body p-3">
                        {/* <!-- Author--> */}
                        <div className="d-flex align-items-center position-relative mb-3">
                          <img
                            className="rounded-circle me-2"
                            src={ThumbNl1}
                            width="32"
                            alt="Avatar"
                          />
                          <div className="fs-sm">
                            by
                            <a
                              className="ms-1 fw-medium text-accent stretched-link"
                              href="projectDeveloper.html"
                            >
                              @Developer's name
                            </a>
                          </div>
                        </div>
                        {/* <!-- Collage--> */}
                        <a className="d-block" href="nft-catalog-v2.html">
                          <div className="row row-cols-2 g-2">
                            <div className="col">
                              <img
                                className="rounded-1"
                                src={Nft12}
                                alt="Collection item"
                              />
                            </div>
                            <div className="col">
                              <div className="mt-n2">
                                <img
                                  className="rounded-1 mt-2"
                                  src={Nft13}
                                  alt="Collection item"
                                />
                                <img
                                  className="rounded-1 mt-2"
                                  src={Nft14}
                                  alt="Collection item"
                                />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Collection title--> */}
                    <h3 className="h5 mb-1">
                      <a className="nav-link-style" href="nft-catalog-v2.html">
                        Lagos, Nigeria
                      </a>
                    </h3>
                    <span className="fs-sm text-muted">$ 12180.95</span>
                  </article>
                </div>
                {/* <!-- Collection item--> */}
                <div className="col">
                  <article>
                    <div className="card mb-3">
                      <div className="card-body p-3">
                        {/* <!-- Author--> */}
                        <div className="d-flex align-items-center position-relative mb-3">
                          <img
                            className="rounded-circle me-2"
                            src={ThumbNl3}
                            width="32"
                            alt="Avatar"
                          />
                          <div className="fs-sm">
                            by
                            <a
                              className="ms-1 fw-medium text-accent stretched-link"
                              href="projectDeveloper.html"
                            >
                              @Developer's name
                            </a>
                          </div>
                        </div>
                        {/* <!-- Collage--> */}
                        <a className="d-block" href="nft-catalog-v2.html">
                          <div className="row row-cols-2 g-2">
                            <div className="col">
                              <img
                                className="rounded-1"
                                src={Nft11}
                                alt="Collection item"
                              />
                            </div>
                            <div className="col">
                              <div className="mt-n2">
                                <img
                                  className="rounded-1 mt-2"
                                  src={Nft10}
                                  alt="Collection item"
                                />
                                <img
                                  className="rounded-1 mt-2"
                                  src={Nft9}
                                  alt="Collection item"
                                />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Collection title--> */}
                    <h3 className="h5 mb-1">
                      <a className="nav-link-style" href="nft-catalog-v2.html">
                        Anambra, Nigeria
                      </a>
                    </h3>
                    <span className="fs-sm text-muted">$ 1520.18</span>
                  </article>
                </div>
              </div>
              <p className="mb-4">
                Continue building your collections by placing bids on artworks.
              </p>
              <div className="d-flex flex-sm-row flex-column">
                <a className="btn btn-accent" href="nft-catalog-v1.html">
                  Explore marketplace<i className="ci-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MyCollectionsBody;
