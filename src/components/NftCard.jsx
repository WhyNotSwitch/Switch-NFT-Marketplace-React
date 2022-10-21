import React from "react";
import switchLg from "./img/Switch/switch.jpg";
import Nft3 from "./img/Switch/n3.jpg";
import Nft8 from "./img/Switch/n8.jpg";
import Nft4 from "./img/Switch/n4.jpg";

function NftCard() {
  return (
    <section className="container mb-2 py-lg-5 py-4">
      <div className="d-flex align-items-center justify-content-between mb-sm-3 mb-2">
        <h2 className="h3 mb-0">Recently Projects</h2>
        <a className="btn btn-outline-accent ms-3" href="marketplace.html">
          Explore more<i className="ci-arrow-right ms-2"></i>
        </a>
      </div>
      {/* <!-- Product carousel--> */}
      <div className="tns-carousel tns-controls-static tns-controls-outside mx-xl-n4 mx-n2 px-xl-4 px-0">
        <div
          className="tns-carousel-inner row gx-xl-0 gx-3 mx-0"
          data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "nav": false, "gutter": 30}}}'
        >
          {/* <!-- Product item--> */}
          <div className="col py-3">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <a className="d-block" href="nft-single-auction-live.html">
                  <img src={Nft3} alt="Product image" />
                </a>
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
                  <a
                    className="d-block text-truncate"
                    href="nft-single-auction-live.html"
                  >
                    Switch Project 3
                  </a>
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
                    src="img/Switch/switch.jpg"
                    width="32"
                    alt="Avatar"
                  />
                  <a
                    className="nav-link-style fs-sm stretched-link"
                    href="projectDeveloper.html"
                  >
                    @Switch Electric
                  </a>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- Product item--> */}
          <div className="col py-3">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <a className="d-block" href="nft-single-auction-live.html">
                  <img src={Nft4} alt="Product" />
                </a>
                {/* <!-- Countdown timer--> */}
                <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                  <i className="ci-time me-1"></i>
                  <div
                    className="countdown d-inline"
                    data-countdown="12/31/2022 09:00:00 PM"
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
                  <a
                    className="d-block text-truncate"
                    href="nft-single-auction-live.html"
                  >
                    Switch Project 4
                  </a>
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
                    src="img/Switch/switch.jpg"
                    width="32"
                    alt="Avatar"
                  />
                  <a
                    className="nav-link-style fs-sm stretched-link"
                    href="projectDeveloper.html"
                  >
                    @Switch Electric
                  </a>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- Product item--> */}
          <div className="col py-3">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <a className="d-block" href="nft-single-buy.html">
                  <img src="././img/Switch/n6.jpg" alt="Product image" />
                </a>
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
                  <a
                    className="d-block text-truncate"
                    href="nft-single-auction-live.html"
                  >
                    Switch Project 6
                  </a>
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
                    src="img/Switch/switch.jpg"
                    width="32"
                    alt="Avatar"
                  />
                  <a
                    className="nav-link-style fs-sm stretched-link"
                    href="projectDeveloper.html"
                  >
                    @Switch Electric
                  </a>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- Product item--> */}
          <div className="col py-3">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <a className="d-block" href="nft-single-buy.html">
                  <img src="././img/Switch/n7.jpg" alt="Product image" />
                </a>
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
                  <a
                    className="d-block text-truncate"
                    href="nft-single-auction-live.html"
                  >
                    Switch Project 7
                  </a>
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
                    src="img/Switch/switch.jpg"
                    width="32"
                    alt="Avatar"
                  />
                  <a
                    className="nav-link-style fs-sm stretched-link"
                    href="projectDeveloper.html"
                  >
                    @Switch Electric
                  </a>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- Product item--> */}
          <div className="col py-3">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <a className="d-block" href="nft-single-auction-live.html">
                  <img src={Nft8} alt="Product image" />
                </a>
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
                  <a
                    className="d-block text-truncate"
                    href="nft-single-auction-live.html"
                  >
                    Switch Project 8
                  </a>
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
                    src={switchLg}
                    width="32"
                    alt="Avatar"
                  />
                  <a
                    className="nav-link-style fs-sm stretched-link"
                    href="projectDeveloper.html"
                  >
                    @Switch Electric
                  </a>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- Product item--> */}
          <div className="col py-3">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <a className="d-block" href="nft-single-auction-live.html">
                  <img src="././img/Switch/n4.jpg" alt="Product image" />
                </a>
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
                  <a
                    className="d-block text-truncate"
                    href="nft-single-auction-live.html"
                  >
                    Switch Project 4
                  </a>
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
                    src="img/Switch/switch.jpg"
                    width="32"
                    alt="Avatar"
                  />
                  <a
                    className="nav-link-style fs-sm stretched-link"
                    href="projectDeveloper.html"
                  >
                    @Switch Electric
                  </a>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- Product item--> */}
          <div className="col py-3">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <a className="d-block" href="nft-single-buy.html">
                  <img src="././img/Switch/n1.jpg" alt="Product image" />
                </a>
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
                  <a
                    className="d-block text-truncate"
                    href="nft-single-auction-live.html"
                  >
                    Switch Project 1
                  </a>
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
                    src="img/Switch/switch.jpg"
                    width="32"
                    alt="Avatar"
                  />
                  <a
                    className="nav-link-style fs-sm stretched-link"
                    href="projectDeveloper.html"
                  >
                    @Switch Electric
                  </a>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- Product item--> */}
          <div className="col py-3">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <a className="d-block" href="nft-single-auction-live.html">
                  <img src="././img/Switch/n2.jpg" alt="Product image" />
                </a>
                {/* <!-- Countdown timer--> */}
                <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                  <i className="ci-time me-1"></i>
                  <div
                    className="countdown d-inline"
                    data-countdown="12/31/2022 09:00:00 PM"
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
                  <a
                    className="d-block text-truncate"
                    href="nft-single-auction-live.html"
                  >
                    Switch Project 2
                  </a>
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
                    src="img/Switch/switch.jpg"
                    width="32"
                    alt="Avatar"
                  />
                  <a
                    className="nav-link-style fs-sm stretched-link"
                    href="projectDeveloper.html"
                  >
                    @Switch Electric
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NftCard;
