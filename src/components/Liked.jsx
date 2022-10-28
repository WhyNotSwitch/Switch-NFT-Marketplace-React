import React from "react";
import Nft4 from "./img/Switch/n4.jpg";
import Nft7 from "./img/Switch/n7.jpg";
import Nft8 from "./img/Switch/n8.jpg";
import SwitchLg from "./img/Switch/switch.jpg";
import { Link } from "react-router-dom";

function Liked() {
  return (
    <div className="" id="liked" role="tabpanel">
      {/* <!-- Liked items grid--> */}
      <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3">
        {/* <!-- Product--> */}
        <div className="col mb-2">
          <article className="card h-100 border-0 shadow">
            <div className="card-img-top position-relative overflow-hidden">
              <Link className="d-block" to="nft-single-buy.html">
                <img src={Nft7} alt="Product image" />
              </Link>
              {/* <!-- Wishlist button--> */}
              <button
                className="btn-wishlist btn-sm position-absolute top-0 end-0"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to Favorites"
                style={{ margin: "12px" }}
              >
                <i className="ci-heart"></i>
              </button>
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
                <span className="mt-1 ms-1 fs-xs text-muted">(≈ $ 400.19)</span>
              </div>
            </div>
            <div className="card-footer mt-n1 py-0 border-0">
              <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                <img
                  className="me-2 rounded-circle"
                  src={SwitchLg}
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
        {/* <!-- Product--> */}
        <div className="col mb-2">
          <article className="card h-100 border-0 shadow">
            <div className="card-img-top position-relative overflow-hidden">
              <Link className="d-block" to="/single-buy">
                <img src={Nft8} alt="Product image" />
              </Link>
              {/* <!-- Wishlist button--> */}
              <button
                className="btn-wishlist btn-sm position-absolute top-0 end-0"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to Favorites"
                style={{ margin: "12px" }}
              >
                <i className="ci-heart"></i>
              </button>
            </div>
            <div className="card-body">
              <h3 className="product-title mb-2 fs-base">
                <Link className="d-block text-truncate" to="/single-buy">
                  Switch Project 8
                </Link>
              </h3>
              <span className="fs-sm text-muted">Current bid:</span>
              <div className="d-flex align-items-center flex-wrap">
                <h4 className="mt-1 mb-0 fs-base text-darker">0.156 ETH</h4>
                <span className="mt-1 ms-1 fs-xs text-muted">(≈ $ 595.76)</span>
              </div>
            </div>
            <div className="card-footer mt-n1 py-0 border-0">
              <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                <img
                  className="me-2 rounded-circle"
                  src={SwitchLg}
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
        {/* <!-- Product--> */}
        <div className="col mb-2">
          <article className="card h-100 border-0 shadow">
            <div className="card-img-top position-relative overflow-hidden">
              <Link className="d-block" to="/single-buy">
                <img src={Nft4} alt="Product image" />
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
              <button
                className="btn-wishlist btn-sm position-absolute top-0 end-0"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to Favorites"
                style={{ margin: "12px" }}
              >
                <i className="ci-heart"></i>
              </button>
            </div>
            <div className="card-body">
              <h3 className="product-title mb-2 fs-base">
                <Link className="d-block text-truncate" to="/single-buy">
                  Switch Project 4
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
                  src={SwitchLg}
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
  );
}

export default Liked;
