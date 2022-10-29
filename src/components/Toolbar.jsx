import React from "react";
import "./styles.css";
import { Dropdown } from "react-bootstrap";
import SwitchLg from "./img/Switch/switch.jpg";
import Nft1 from "./img/Switch/n1.jpg";
import Nft2 from "./img/Switch/n2.jpg";
import Nft3 from "./img/Switch/n3.jpg";
import Nft4 from "./img/Switch/n4.jpg";
import Nft5 from "./img/Switch/n5.jpg";
import Nft6 from "./img/Switch/n6.jpg";
import Nft7 from "./img/Switch/n7.jpg";
import Nft8 from "./img/Switch/n8.jpg";
import Nft9 from "./img/Switch/n9.jpg";
import Nft10 from "./img/Switch/n10.jpg";
import Nft11 from "./img/Switch/n11.jpg";
import Nft12 from "./img/Switch/n12.jpg";
import Nft13 from "./img/Switch/n13.jpg";
import Nft14 from "./img/Switch/n14.jpg";
import Nft15 from "./img/Switch/n15.jpg";
import Nft16 from "./img/Switch/n16.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

function ToolBar() {
  return (
    <div id="toolbar">
      <div className="bg-accent pt-4 pb-5">
        <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
          <div className="d-lg-flex justify-content-between pb-3">
            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                  <li className="breadcrumb-item">
                    <Link
                      className="text-nowrap"
                      to="/Switch-NFT-Marketplace-React"
                    >
                      <i className="ci-home"></i>Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item text-nowrap">
                    <Link to="/marketplace">NFT Marketplace</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    All NFTs
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h1 className="h3 text-light mb-0">
                Solar Projects to Invest in
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        {/* Toolbar--> */}
        <Dropdown>
          <div className="bg-light shadow-lg rounded-3 p-4 mt-n5 mb-4">
            <div className="row gy-3 gx-4 justify-content-between">
              <div className="col-lg-2 col-md-3 col-sm-5 col-12 order-md-1 order-sm-2 order-3">
                <div className="dropdown">
                  <Dropdown.Toggle
                    type="button"
                    className="btn btn-outline-secondary dropdown-toggle w-100 bg-light"
                    data-bs-toggle="collapse"
                  >
                    <i className="ci-filter me-2"></i>Filters
                  </Dropdown.Toggle>
                </div>
              </div>
              <div className="col-md col-12 order-md-2 order-sm-1 order-1">
                <div className="input-group">
                  <input
                    className="form-control pe-5 rounded"
                    type="text"
                    placeholder="Search collection, title or user..."
                  />
                  <i className="ci-search position-absolute top-50 end-0 translate-middle-y zindex-5 me-3"></i>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-7 col-12 order-md-3 order-sm-3 order-2">
                <div className="d-flex align-items-center flex-shrink-0">
                  <label className="form-label mb-0 me-2 pe-1 fw-normal text-nowrap d-sm-block d-none">
                    Sort by:
                  </label>
                  <select className="form-select">
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>
            </div>
            {/*<!-- Toolbar with expandable filters--> */}
            <Dropdown.Menu className="pb-5">
              <div className="">
                <div className="row g-4 pt-4">
                  <div className="col-lg-4 col-sm-6">
                    {/*<!-- Categories--> */}
                    <div>
                      <div className="card">
                        <div className="card-body px-4">
                          <div className="widget">
                            <h3 className="widget-title mb-2 pb-1">
                              Project Locations
                            </h3>
                            <ul className="widget-list list-unstyled">
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="all"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="all"
                                  >
                                    Enugu, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">10</span>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="premium"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="premium"
                                  >
                                    Anambra, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">5</span>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="art"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="art"
                                  >
                                    Lagos, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">12</span>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="photography"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="photography"
                                  >
                                    Ebony, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">3</span>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="music"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="music"
                                  >
                                    Jos, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">8</span>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gaming"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="gaming"
                                  >
                                    Kaduna, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">2</span>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="sports"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="sports"
                                  >
                                    Abuja, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">9</span>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="collections"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="collections"
                                  >
                                    Kogi, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">4</span>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="utility"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="utility"
                                  >
                                    Ekiti, Nigeria
                                  </label>
                                </div>
                                <span className="fs-xs text-muted">3</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/*<!-- Sale Types--> */}
                    <div>
                      <div className="card mb-4">
                        <div className="card-body px-4">
                          <div className="widget">
                            <h3 className="widget-title mb-2 pb-1">
                              Sale Types
                            </h3>
                            <ul className="widget-list list-unstyled">
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="fixed-price"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="fixed-price"
                                  >
                                    Fixed Price
                                  </label>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="live-auction"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="live-auction"
                                  >
                                    Live auction
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*<!-- Blockchain--> */}
                    <div>
                      <div className="card">
                        <div className="card-body px-4">
                          <div className="widget">
                            <h3 className="widget-title mb-2 pb-1">
                              Blockchain
                            </h3>
                            <ul className="widget-list list-unstyled">
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="eth"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="eth"
                                  >
                                    ETH
                                  </label>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="bnb"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="bnb"
                                  >
                                    BNB
                                  </label>
                                </div>
                              </li>
                              <li className="d-flex justify-content-between align-items-center mb-1">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="busd"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="busd"
                                  >
                                    BUSD
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    {/*<!-- Price range--> */}
                    <div>
                      <div className="card">
                        <div className="card-body px-4">
                          <div className="widget">
                            <h3 className="widget-title">Price range</h3>
                            <div
                              className="range-slider"
                              data-start-min="10"
                              data-start-max="20"
                              data-min="0"
                              data-max="30"
                              data-step="1"
                              data-currency="ETH "
                            >
                              <div className="range-slider-ui"></div>
                              <div className="d-flex pb-1">
                                <div className="w-50 pe-2 me-2">
                                  <div className="input-group input-group-sm">
                                    <Button
                                      className="btn btn-secondary dropdown-toggle"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                    >
                                      ETH
                                    </Button>
                                    <div className="dropdown-menu">
                                      <Link className="dropdown-item">BNB</Link>
                                      <Link className="dropdown-item">
                                        BUSD
                                      </Link>
                                    </div>
                                    <input
                                      className="form-control range-slider-value-min"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="w-50 ps-2">
                                  <div className="input-group input-group-sm">
                                    <Button
                                      className="btn btn-secondary dropdown-toggle"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                    >
                                      ETH
                                    </Button>
                                    <div className="dropdown-menu">
                                      <Link className="dropdown-item">BNB</Link>
                                      <Link className="dropdown-item">
                                        BUSD
                                      </Link>
                                    </div>
                                    <input
                                      className="form-control range-slider-value-max"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Dropdown.Menu>
          </div>
        </Dropdown>

        {/*<!-- Products grid--> */}
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 gy-sm-4 gy-3 pt-sm-3  gx-xl-4 gx-3 mx-0">
          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="nft-single-auction-ended.html">
                  <img src={Nft1} alt="Product" />
                </Link>
                {/*<!-- Countdown timer--> */}
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
                {/*<!-- Wishlist button--> */}
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft2} alt="Product" />
                </Link>
                {/*<!-- Countdown timer--> */}
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
                {/*<!-- Wishlist button--> */}
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft3} alt="Product" />
                </Link>
                {/*<!-- Countdown timer--> */}
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
                {/*<!-- Wishlist button--> */}
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
          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft4} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft5} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 5
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft6} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft7} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft8} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 8
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
          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft9} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 9
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft10} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 10
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft11} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 11
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft12} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 12
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft13} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 13
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft14} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 14
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft15} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 15
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

          {/*<!-- Product--> */}
          <div className="col mb-2">
            <article className="card h-100 border-0 shadow">
              <div className="card-img-top position-relative overflow-hidden">
                <Link className="d-block" to="/single-buy">
                  <img src={Nft16} alt="Product" />
                </Link>
                {/*<!-- Wishlist button--> */}
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
                    Switch Project 16
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
        <hr className="mt-4 mb-3" />
        {/*<!-- Pagination--> */}
        <nav
          className="d-flex justify-content-between pt-2"
          aria-label="Page navigation"
        >
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="#">
                <i className="ci-arrow-left me-2"></i>Prev
              </Link>
            </li>
          </ul>
          <ul className="pagination">
            <li className="page-item d-sm-none">
              <span className="page-link page-link-static">1 / 5</span>
            </li>
            <li
              className="page-item active d-none d-sm-block"
              aria-current="page"
            >
              <span className="page-link">
                1<span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item d-none d-sm-block">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item d-none d-sm-block">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item d-none d-sm-block">
              <Link className="page-link" to="#">
                4
              </Link>
            </li>
            <li className="page-item d-none d-sm-block">
              <Link className="page-link" to="#">
                5
              </Link>
            </li>
          </ul>
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next">
                Next<i className="ci-arrow-right ms-2"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ToolBar;
