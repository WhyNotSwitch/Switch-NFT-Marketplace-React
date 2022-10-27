import React from "react";
import "./theme.min.css";
import logoSm from "./img/Switch/switch.jpg";
import Nft1 from "./img/Switch/n1.jpg";
import Nft2 from "./img/Switch/n2.jpg";
import Nft3 from "./img/Switch/n3.jpg";
import Nft4 from "./img/Switch/n4.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

function ProductCarousel() {
  return (
    <section className="mb-4 py-5 bg-secondary">
      <div className="container py-lg-4">
        <div className="d-flex flex-wrap mb-3">
          <h2 className="h3 mb-0">Trending Solar Projects</h2>
        </div>
        {/* <!-- Product carousel--> */}
        <div className=" mx-xl-n4 mx-n2 px-xl-4 px-0">
          <div
            className=" row gx-xl-4 gx-3 mx-0"
            data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "gutter": 30}}}'
          >
            {/* <!-- Product item--> */}
            <div className="col py-3">
              <article className="card h-100 border-0">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft1} alt="Product" />
                  </Link>
                  {/* <!-- Wishlist button--> */}
                  <Button
                    className="btn-wishlist btn-sm position-absolute top-0 end-0"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Add to Favorites"
                    style={{ margin: "12px" }}
                  >
                    <i className="ci-heart"></i>
                  </Button>
                </div>
                <div className="card-body">
                  <h3 className="product-title mb-2 fs-base">
                    <Link className="d-block text-truncate" to="/single-buy">
                      Switch Project 1
                    </Link>
                  </h3>
                  <span className="fs-sm text-muted">Reserve price:</span>
                  <div className="d-flex align-items-center flex-wrap">
                    <h4 className="mt-1 mb-0 fs-base text-darker">0.6 ETH</h4>
                    <span className="mt-1 ms-1 fs-xs text-muted">
                      (≈ $ 2,400.65)
                    </span>
                  </div>
                </div>
                <div className="card-footer mt-n1 py-0 border-0">
                  <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                    <img
                      className="me-2 rounded-circle"
                      src={logoSm}
                      width="32"
                      alt="Avatar"
                    />
                    <Link
                      className="nav-link-style fs-sm stretched-link"
                      to="/project-developer"
                    >
                      @Switch Electric
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Product item--> */}
            <div className="col py-3">
              <article className="card h-100 border-0">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft2} alt="Product" />
                  </Link>
                  {/* <!-- Countdown timer--> */}
                  <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                    <i className="ci-time me-1"></i>
                    <div
                      className="countdown d-inline"
                      data-countdown="12/31/2022 12:00:00 PM"
                    >
                      <span className="countdown-hours mb-0 me-0">
                        <span className="countdown-value">0</span>
                        <span className="countdown-label fs-lg">:</span>
                      </span>
                      <span className="countdown-minutes mb-0 me-0">
                        <span className="countdown-value">0</span>
                        <span className="countdown-label fs-lg">:</span>
                      </span>
                      <span className="countdown-seconds mb-0 me-0">
                        <span className="countdown-value">0</span>
                      </span>
                    </div>
                  </div>
                  {/* <!-- Wishlist button--> */}
                  <Button
                    className="btn-wishlist btn-sm position-absolute top-0 end-0"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Add to Favorites"
                    style={{ margin: "12px" }}
                  >
                    <i className="ci-heart"></i>
                  </Button>
                </div>
                <div className="card-body">
                  <h3 className="product-title mb-2 fs-base">
                    <Link className="d-block text-truncate" to="/single-buy">
                      Switch Project 2
                    </Link>
                  </h3>
                  <span className="fs-sm text-muted">Current bid:</span>
                  <div className="d-flex align-items-center flex-wrap">
                    <h4 className="mt-1 mb-0 fs-base text-darker">0.5 ETH</h4>
                    <span className="mt-1 ms-1 fs-xs text-muted">
                      (≈ $ 2,000.55)
                    </span>
                  </div>
                </div>
                <div className="card-footer mt-n1 py-0 border-0">
                  <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                    <img
                      className="me-2 rounded-circle"
                      src={logoSm}
                      width="32"
                      alt="Avatar"
                    />
                    <Link
                      className="nav-link-style fs-sm stretched-link"
                      to="/project-developer"
                    >
                      @Switch Electric
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Product item--> */}
            <div className="col py-3">
              <article className="card h-100 border-0">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft4} alt="Product" />
                  </Link>
                  {/* <!-- Countdown timer--> */}
                  <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                    <i className="ci-time me-1"></i>
                    <div
                      className="countdown d-inline"
                      data-countdown="12/31/2022 12:00:00 PM"
                    >
                      <span className="countdown-hours mb-0 me-0">
                        <span className="countdown-value">0</span>
                        <span className="countdown-label fs-lg">:</span>
                      </span>
                      <span className="countdown-minutes mb-0 me-0">
                        <span className="countdown-value">0</span>
                        <span className="countdown-label fs-lg">:</span>
                      </span>
                      <span className="countdown-seconds mb-0 me-0">
                        <span className="countdown-value">0</span>
                      </span>
                    </div>
                  </div>
                  {/* <!-- Wishlist button--> */}
                  <Button
                    className="btn-wishlist btn-sm position-absolute top-0 end-0"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Add to Favorites"
                    style={{ margin: "12px" }}
                  >
                    <i className="ci-heart"></i>
                  </Button>
                </div>
                <div className="card-body">
                  <h3 className="product-title mb-2 fs-base">
                    <Link className="d-block text-truncate" to="/single-buy">
                      Switch Project 4
                    </Link>
                  </h3>
                  <span className="fs-sm text-muted">Current bid:</span>
                  <div className="d-flex align-items-center flex-wrap">
                    <h4 className="mt-1 mb-0 fs-base text-darker">0.156 ETH</h4>
                    <span className="mt-1 ms-1 fs-xs text-muted">
                      (≈ $ 595.76)
                    </span>
                  </div>
                </div>
                <div className="card-footer mt-n1 py-0 border-0">
                  <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                    <img
                      className="me-2 rounded-circle"
                      src={logoSm}
                      width="32"
                      alt="Avatar"
                    />
                    <Link
                      className="nav-link-style fs-sm stretched-link"
                      to="project-developer"
                    >
                      @Switch Electric
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Product item--> */}
            <div className="col py-3">
              <article className="card h-100 border-0">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft3} alt="Product" />
                  </Link>
                  {/* <!-- Wishlist button--> */}
                  <Button
                    className="btn-wishlist btn-sm position-absolute top-0 end-0"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Add to Favorites"
                    style={{ margin: "12px" }}
                  >
                    <i className="ci-heart"></i>
                  </Button>
                </div>
                <div className="card-body">
                  <h3 className="product-title mb-2 fs-base">
                    <Link className="d-block text-truncate" to="/single-buy">
                      Switch Project 3
                    </Link>
                  </h3>
                  <span className="fs-sm text-muted">Reserve price:</span>
                  <div className="d-flex align-items-center flex-wrap">
                    <h4 className="mt-1 mb-0 fs-base text-darker">0.1 ETH</h4>
                    <span className="mt-1 ms-1 fs-xs text-muted">
                      (≈ $ 400.19)
                    </span>
                  </div>
                </div>
                <div className="card-footer mt-n1 py-0 border-0">
                  <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                    <img
                      className="me-2 rounded-circle"
                      src={logoSm}
                      width="32"
                      alt="Avatar"
                    />
                    <Link
                      className="nav-link-style fs-sm stretched-link"
                      to="/project-developer"
                    >
                      @Switch Electric
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="d-flex flex-sm-row flex-column justify-content-center pt-4">
          <Link className="btn btn-outline-accent" to="/marketplace">
            Browse marketplace
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
