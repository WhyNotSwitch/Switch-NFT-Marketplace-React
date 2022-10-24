import React from "react";
import "./theme.min.css";
import Button from "./Button";
import switchLg from "./img/Switch/switch.jpg";
import Cr1 from "./img/nft/home/creators/03.png";

function TopCreators() {
  return (
    <section className="container py-lg-5 py-4">
      <h2 className="h3 mb-4 pb-2">Top Projects Developers</h2>
      {/* <!-- Creators (carousel)--> */}
      <div className="carousel-slide">
        <div
          className="creators"
          data-carousel-options='{"items": 2, "controls": false, "nav": true, "gutter": 30, "responsive": {"0":{"items":1},"576":{"items":2},"992":{"items":3}}}'
        >
          {/* <!-- Carousel item--> */}
          <div>
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>1.</span>
                <img
                  className="rounded-circle ms-2"
                  src={switchLg}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Switch Electric
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    50 successful projects
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
            <hr className="my-4" />
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>2.</span>
                <img
                  className="rounded-circle ms-2"
                  src={Cr1}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Developer's name
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    44 successful projects
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
            <hr className="my-4" />
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>3.</span>
                <img
                  className="rounded-circle ms-2"
                  src={Cr1}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Developer's name
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    36 successful projects{" "}
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
          </div>
          {/* <!-- Carousel item--> */}
          <div>
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>4.</span>
                <img
                  className="rounded-circle ms-2"
                  src={Cr1}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Developer's name
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    33 successful projects{" "}
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
            <hr className="my-4" />
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>5.</span>
                <img
                  className="rounded-circle ms-2"
                  src={Cr1}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Developer's name
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    25 successful projects{" "}
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
            <hr className="my-4" />
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>6.</span>
                <img
                  className="rounded-circle ms-2"
                  src={Cr1}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Developer's name
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    22 successful projects{" "}
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
          </div>
          {/* <!-- Carousel item--> */}
          <div>
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>7.</span>
                <img
                  className="rounded-circle ms-2"
                  src={Cr1}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Developer's name
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    20 successful projects{" "}
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
            <hr className="my-4" />
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>8.</span>
                <img
                  className="rounded-circle ms-2"
                  src={Cr1}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Developer's name
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    19 successful projects{" "}
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
            <hr className="my-4" />
            {/* <!-- Creator--> */}
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center position-relative">
                <span>9.</span>
                <img
                  className="rounded-circle ms-2"
                  src={Cr1}
                  width="48"
                  alt="Avatar"
                />
                <div className="ms-2">
                  <h4 className="mb-1 fs-base text-body">
                    <a
                      className="nav-link-style stretched-link"
                      href="projectDeveloper.html"
                    >
                      @Developer's name
                    </a>
                  </h4>
                  <span className="fs-xs text-muted">
                    10 successful projects{" "}
                  </span>
                </div>
              </div>
              <Button className="btn btn-sm btn-outline-secondary ms-2">
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopCreators;
