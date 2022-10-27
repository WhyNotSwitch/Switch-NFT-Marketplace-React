import React from "react";
import "./theme.min.css";
import "./styles.css";
import Button from "./Button";
import logoSm from "./img/Switch/switch.jpg";
import Nft1 from "./img/Switch/n1.jpg";
import Nft3 from "./img/Switch/n3.jpg";
import Nft6 from "./img/Switch/n6.jpg";
import Nft7 from "./img/Switch/n7.jpg";
import { Link } from "react-router-dom";

function RecentDrops() {
  return (
    <div className="recent">
      <section className="mx-xl-auto mx-n2 px-xl-auto px-1">
        <div className="d-flex align-items-center justify-content-between mb-sm-3 mb-2">
          <h2 className="h3 mb-0 mx-5">Recently Projects </h2>
          <Link className="btn btn-outline-accent ms-3" to="/marketplace">
            Explore more<i className="ci-arrow-right ms-2"></i>
          </Link>
        </div>
        {/* <!-- Product carousel--> */}
        <div className="  mx-xl-auto mx-n1 px-xl-5 px-0 ">
          <div className=" row gx-xl-4 gx-3 mx-0">
            {/* <!-- Product item--> */}
            <div className="col py-3">
              <article className="card h-100 border-0 shadow">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft3} alt="Product" className="w-100" />
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
                      Switch Project 3
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
                      to="/project-developer"
                    >
                      @Switch Electric
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Product item--> */}

            {/* <!-- Product item--> */}
            <div className="col py-3">
              <article className="card h-100 border-0 shadow">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft6} alt="Product" />
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
                      Switch Project 6
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
                      to="/single-buy"
                    >
                      @Switch Electric
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Product item--> */}
            <div className="col py-3">
              <article className="card h-100 border-0 shadow">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft7} alt="Product" />
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
                      Switch Project 7
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
            {/* <!-- Product item--> */}

            {/* <!-- Product item--> */}

            {/* <!-- Product item--> */}
            <div className="col py-3">
              <article className="card h-100 border-0 shadow">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecentDrops;
