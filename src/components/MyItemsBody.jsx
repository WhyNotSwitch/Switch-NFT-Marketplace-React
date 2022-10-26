import React from "react";
import "./styles.css";
import Avatar from "./img/nft/vendor/avatar.png";
import SwitchLg from "./img/Switch/switch.jpg";
import Nft1 from "./img/Switch/n1.jpg";
import Nft3 from "./img/Switch/n3.jpg";
import Nft6 from "./img/Switch/n6.jpg";
import Nft7 from "./img/Switch/n7.jpg";
import Nft8 from "./img/Switch/n8.jpg";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function MyItemsBody() {
  return (
    <div id="my-items">
      <div className="page-title-overlap bg-accent pt-4">
        <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center mb-2 pt-2">
          <div className="d-flex align-items-center">
            <div
              className="img-thumbnail rounded-circle position-relative flex-shrink-0"
              style={{ width: "6.375rem" }}
            >
              <img
                className="rounded-circle"
                src={Avatar}
                alt="@foxnet_creator"
              />
            </div>
            <div className="ps-3">
              <h3 className="h5 mb-2 text-light">@foxnet_creator</h3>
              <span className="d-block text-light fs-sm opacity-60">
                Joined July 2021
              </span>
            </div>
          </div>
          <div className="my-sm-0 my-3 text-sm-end pt-1">
            <div className="d-flex align-items-center text-nowrap fs-sm">
              <div className="mb-2 me-sm-3 me-2 text-muted">
                <span className="fw-medium text-light">766</span>{" "}
                <span className="text-white opacity-70">followers</span>
              </div>
              <div className="mb-2 ps-sm-3 ps-2 border-start border-light text-muted">
                <span className="fw-medium text-light">2K</span>{" "}
                <span className="text-white opacity-70">following</span>
              </div>
            </div>
            <a className="text-light" href="#">
              0x1dDB2C08s97...9Ecd
              <i
                className="ci-copy ms-2 fs-sm"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Copy"
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            {/* <!-- Sidebar--> */}
            <SideBar />
            {/* <!-- Content--> */}
            <section className="col-lg-9 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <div className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-4">
                  <h1 className="h3 mb-sm-0 mb-2 pb-1 text-sm-start text-center">
                    My Items
                  </h1>
                  <div className="pb-1" style={{ overflowX: "auto" }}>
                    <ul className="nav nav-tabs nav-fill flex-nowrap text-nowrap mb-0">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          All <span className="opacity-70">(5)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Sold <span className="opacity-70">(3)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Live auctions <span className="opacity-70">(2)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Items grid--> */}
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3 gx-3 mb-4">
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a
                          className="d-block"
                          href="nft-single-auction-live.html"
                        >
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
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.156 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 595.76)
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
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a className="d-block" href="nft-single-buy.html">
                          <img src={Nft6} alt="Product image" />
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
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.6 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 2,400.65)
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
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a className="d-block" href="nft-single-buy.html">
                          <img src={Nft7} alt="Product image" />
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
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.1 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 400.19)
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
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a
                          className="d-block"
                          href="nft-single-auction-live.html"
                        >
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
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.156 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 595.76)
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
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a className="d-block" href="nft-single-buy.html">
                          <img src={Nft1} alt="Product image" />
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
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.6 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 2,400.65)
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
                {/* <!-- Create new item--> */}
                <div className="d-flex flex-sm-row flex-column">
                  <a className="btn btn-accent" href="nft-create-item.html">
                    Create new item
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyItemsBody;
