import React from "react";
import "./styles.css";
import Nft11 from "./img/Switch/n11.jpg";
import Nft12 from "./img/Switch/n12.jpg";
import Nft6 from "./img/Switch/n6.jpg";
import Nft15 from "./img/Switch/n15.jpg";
import Nft16 from "./img/Switch/n16.jpg";
import Avatar13 from "./img/nft/catalog/avatars/13.png";
import SwitchLg from "./img/Switch/switch.jpg";
import { Link } from "react-router-dom";

function SinglebuyBody() {
  return (
    <div>
      <div className="page-title-overlap bg-accent pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
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
                  <Link to="/marketplace">Marketplace</Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Solar Project
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">
              Solar Project - Buy/Invest Now
            </h1>
          </div>
        </div>
      </div>
      <section className="container pb-md-4">
        {/* <!-- Product--> */}
        <div className="bg-light shadow-lg rounded-3 px-4 py-lg-4 py-3 mb-5">
          <div className="py-lg-3 py-2 px-lg-3">
            <div className="row">
              {/* <!-- Product image--> */}
              <div className="col-lg-6">
                <div className="position-relative rounded-3 overflow-hidden mb-lg-4 mb-2">
                  <img className="image-zoom" src={Nft6} alt="Product image" />
                  <div className="image-zoom-pane"></div>
                </div>
                <div className="pt-2 text-lg-start text-center">
                  <button
                    className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add to Favorites"
                  >
                    <i className="ci-heart"></i>
                  </button>
                  <button
                    className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Share"
                  >
                    <i className="ci-share-alt"></i>
                  </button>
                  <button
                    className="btn btn-secondary rounded-pill btn-icon me-sm-3 me-2"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Flag"
                  >
                    <i className="ci-flag"></i>
                  </button>
                </div>
              </div>
              {/* <!-- Product details--> */}
              <div className="col-lg-6">
                <div className="ps-xl-5 ps-lg-3">
                  {/* <!-- Meta--> */}
                  <h2 className="h3 mb-3">Switch Project 6</h2>
                  <div className="d-flex align-items-center flex-wrap text-nowrap mb-sm-4 mb-3 fs-sm">
                    <div className="mb-2 me-sm-3 me-2 text-muted">
                      Minted on Oct 17, 2022
                    </div>
                    <div className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
                      <i className="ci-eye me-1 fs-base mt-n1 align-middle"></i>
                      15 views
                    </div>
                    <div className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
                      <i className="ci-heart me-1 fs-base mt-n1 align-middle"></i>
                      4 favorite
                    </div>
                  </div>
                  <div className="row row-cols-sm-3 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
                    {/* <!-- Current price--> */}
                    <div className="col">
                      <div className="pb-md-2">
                        <h3 className="h6 mb-2 fs-sm text-muted">
                          Current price
                        </h3>
                        <h2 className="h3 mb-1">2.80 ETH</h2>
                        <span className="fs-sm text-muted">(≈ $ 795.48)</span>
                      </div>
                    </div>
                    {/* <!-- Creator--> */}
                    <div className="col">
                      <div className="card position-relative h-100">
                        <div className="card-body p-3">
                          <h3 className="h6 mb-2 fs-sm text-muted">
                            Project Developer
                          </h3>
                          <div className="d-flex align-items-center">
                            <img
                              className="rounded-circle me-2"
                              src={SwitchLg}
                              width="32"
                              alt="Avatar"
                            />
                            <Link
                              className="nav-link-style stretched-link fs-sm"
                              to="/project-developer"
                            >
                              Switch Electric
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Collection--> */}
                    <div className="col">
                      <div className="card position-relative h-100">
                        <div className="card-body p-3">
                          <h3 className="h6 mb-2 fs-sm text-muted">
                            Project Location
                          </h3>
                          <div className="d-flex align-items-center">
                            <img
                              className="rounded-circle me-2"
                              src={Avatar13}
                              width="32"
                              alt="Avatar"
                            />
                            <a
                              className="nav-link-style stretched-link fs-sm"
                              to="#"
                            >
                              Enugu, Nigeria
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <a className="btn btn-lg btn-accent d-block w-100" to="#">
                      Purchase NFT
                    </a>
                  </div>
                  {/* <!-- Product info--> */}
                  <div className="pt-3">
                    {/* <!-- Nav tabs--> */}
                    <div className="mb-3" style={{ overflowX: "auto" }}>
                      <ul
                        className="nav nav-tabs nav-fill flex-nowrap text-nowrap mb-1"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            id="metadata"
                            className="nav-link active"
                            to="#properties"
                            data-bs-toggle="tab"
                            role="tab"
                          >
                            Metadata
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            id="asset"
                            className="nav-link"
                            href="#asset"
                            data-bs-toggle="tab"
                            role="tab"
                          >
                            Asset
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            id="revenues"
                            className="nav-link"
                            href="#revenues"
                            data-bs-toggle="tab"
                            role="tab"
                          >
                            Revenues
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            id="details"
                            className="nav-link"
                            href="#details"
                            data-bs-toggle="tab"
                            role="tab"
                          >
                            Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            id="provenance"
                            className="nav-link"
                            href="#provenance"
                            data-bs-toggle="tab"
                            role="tab"
                          >
                            Provenance
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Tabs content--> */}
                    <div
                      className="tab-pane fade show active"
                      id="properties"
                      role="tabpanel"
                    >
                      <div className="row ">
                        <div className="card">
                          <div className="card-body">
                            <div className="tab-content">
                              {/* <!-- Properties--> */}
                              <ul className="list-unstyled row row-cols-sm-2 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
                                <div className="col">
                                  <li className="d-flex pb-3 border-bottom">
                                    <i className="ci-battery fs-lg mt-2 mb-0 text-primary"></i>
                                    <div className="ps-3">
                                      <span className="fs-ms text-muted">
                                        Capacity:
                                      </span>
                                      <a
                                        to="#"
                                        className="d-block text-heading fs-sm"
                                      >
                                        15kWp solar + 13.5kWh storage
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex pt-2 pb-3 border-bottom">
                                    <i className="ci-sun fs-lg mt-2 mb-0 text-primary"></i>
                                    <div className="ps-3">
                                      <span className="fs-ms text-muted">
                                        Peak Sunlight Hours:
                                      </span>
                                      <a
                                        to="#"
                                        className="d-block text-heading fs-sm"
                                      >
                                        8
                                      </a>
                                    </div>
                                  </li>

                                  <li className="d-flex pt-2 pb-3 border-bottom">
                                    <i className="ci-target fs-lg mt-2 mb-0 text-primary"></i>
                                    <div className="ps-3">
                                      <span className="fs-ms text-muted">
                                        Solar Irradiance:
                                      </span>
                                      <a
                                        to="#"
                                        className="d-block text-heading fs-sm"
                                      >
                                        4.5 kW/m²/day
                                      </a>
                                    </div>
                                  </li>

                                  <li className="d-flex pt-2 pb-3 border-bottom">
                                    <i className="ci-key fs-lg mt-2 mb-0 text-primary"></i>
                                    <div className="ps-3">
                                      <span className="fs-ms text-muted">
                                        Commissioned On:
                                      </span>
                                      <a
                                        to="#"
                                        className="d-block text-heading fs-sm"
                                      >
                                        15 - 04 - 2022
                                      </a>
                                    </div>
                                  </li>
                                </div>
                                <div className="col">
                                  <li className="d-flex pt-xs-2 pb-3 border-bottom">
                                    <i className="ci-dollar fs-lg mt-2 mb-0 text-primary"></i>
                                    <div className="ps-3">
                                      <span className="fs-ms text-muted">
                                        Total Revenue:
                                      </span>
                                      <a
                                        to="#"
                                        className="d-block text-heading fs-sm"
                                      >
                                        74250.15 IOTX
                                      </a>
                                    </div>
                                  </li>

                                  <li className="d-flex pt-2 pb-3 border-bottom">
                                    <i className="ci-idea fs-lg mt-2 mb-0 text-primary"></i>
                                    <div className="ps-3">
                                      <span className="fs-ms text-muted">
                                        Solar:
                                      </span>
                                      <a
                                        to="#"
                                        className="d-block text-heading fs-sm"
                                      >
                                        15kWh, Felicity solar
                                      </a>
                                    </div>
                                  </li>

                                  <li className="d-flex pt-2 pb-3 border-bottom">
                                    <i className="ci-server-alt fs-lg mt-2 mb-0 text-primary"></i>
                                    <div className="ps-3">
                                      <span className="fs-ms text-muted">
                                        Storage:
                                      </span>
                                      <a
                                        to="#"
                                        className="d-block text-heading fs-sm"
                                      >
                                        3.5kWh, Tesla powerwall
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex pt-2 pb-3 border-bottom">
                                    <i className="ci-star-filled fs-lg mt-2 mb-0 text-primary"></i>
                                    <div className="ps-3">
                                      <span className="fs-ms text-muted">
                                        Rating:
                                      </span>
                                      <a
                                        to="#"
                                        className="d-block text-heading fs-sm"
                                      >
                                        🌕🌕🌕🌗🌑
                                      </a>
                                    </div>
                                  </li>
                                </div>
                              </ul>
                              {/* <!-- Asset --> */}
                              <div
                                className="tab-pane fade"
                                id="asset"
                                role="tabpanel"
                              >
                                <div className="card-img-top overflow-hidden">
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.565489235626!2d7.40626715979903!3d6.8621211261806145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd54ce237d432b523!2zNsKwNTEnNDQuMiJOIDfCsDI0JzIyLjUiRQ!5e1!3m2!1sen!2sng!4v1666089690838!5m2!1sen!2sng"
                                    width="400"
                                    height="250"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                  ></iframe>
                                </div>
                              </div>
                              {/* <!-- Revenue History--> */}
                              <div
                                className="tab-pane fade"
                                id="revenues"
                                role="tabpanel"
                              >
                                <canvas
                                  id="myChart"
                                  width="400"
                                  height="230"
                                ></canvas>
                              </div>
                              {/* <!-- Details--> */}
                              <div
                                className="tab-pane fade"
                                id="details"
                                role="tabpanel"
                              >
                                <ul className="list-unstyled mb-0">
                                  <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                    <span>Contract Address</span>
                                    <div>
                                      <a
                                        className="text-decoration-none"
                                        to="#"
                                      >
                                        <span className="fw-medium text-body">
                                          0x1dDB2C08s97...9Ec
                                        </span>
                                        <i className="ci-external-link ms-3 text-accent"></i>
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                    <span>Token ID</span>
                                    <div>
                                      <a
                                        className="text-decoration-none"
                                        to="#"
                                      >
                                        <span className="text-body">
                                          8508550793340827...
                                        </span>
                                        <i className="ci-copy ms-3 text-accent"></i>
                                      </a>
                                    </div>
                                  </li>
                                  <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                    <span>Token Standard</span>
                                    <div>
                                      <span className="text-body">
                                        ERC-1155
                                      </span>
                                    </div>
                                  </li>
                                  <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                    <span>Blockchain</span>
                                    <div>
                                      <span className="text-body">
                                        Ethereum
                                      </span>
                                    </div>
                                  </li>
                                  <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
                                    <span>Metadata</span>
                                    <div>
                                      <span className="text-body">
                                        Editable
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              {/* <!-- Provenance--> */}
                              <div
                                className="tab-pane fade"
                                id="provenance"
                                role="tabpanel"
                              >
                                <ul className="list-unstyled mb-4">
                                  {/* <!-- Provenance item--> */}
                                  <li className="position-relative mb-0 ps-4 pb-4 border-start">
                                    <span
                                      className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
                                      style={{ transform: "translateX(-50%)" }}
                                    ></span>
                                    <h6 className="mb-1 fs-sm">
                                      Listed by
                                      <Link
                                        to="/project-developer"
                                        className="text-decoration-none text-accent"
                                      >
                                        @distrokid
                                      </Link>
                                    </h6>
                                    <span className="fs-sm text-muted">
                                      Oct 3 at 9:36 am
                                    </span>
                                  </li>
                                  {/* <!-- Provenance item--> */}
                                  <li className="position-relative mb-0 ps-4 pb-4 border-start">
                                    <span
                                      className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
                                      style={{ transform: "translateX(-50%)" }}
                                    ></span>
                                    <h6 className="mb-1 fs-sm">
                                      Purchased by{" "}
                                      <Link
                                        to="/project-developer"
                                        className="text-decoration-none text-accent"
                                      >
                                        @distrokid
                                      </Link>
                                    </h6>
                                    <span className="fs-sm text-muted">
                                      Sept 15 at 11:20 am
                                    </span>
                                  </li>
                                  {/* <!-- Provenance item--> */}
                                  <li className="position-relative mb-0 ps-4 pb-4 border-start">
                                    <span
                                      className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
                                      style={{ transform: "translateX(-50%)" }}
                                    ></span>
                                    <h6 className="mb-1 fs-sm">
                                      Listed by{" "}
                                      <Link
                                        to="/project-developer"
                                        className="text-decoration-none text-accent"
                                      >
                                        @Switch Electric
                                      </Link>
                                    </h6>
                                    <span className="fs-sm text-muted">
                                      Aug 29 at 6:29 pm
                                    </span>
                                  </li>
                                  {/* <!-- Provenance item--> */}
                                  <li className="position-relative mb-0 ps-4 border-start">
                                    <span
                                      className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
                                      style={{ transform: "translateX(-50%)" }}
                                    ></span>
                                    <h6 className="mb-1 fs-sm">
                                      Minted by{" "}
                                      <Link
                                        to="/project-developer"
                                        className="text-decoration-none text-accent"
                                      >
                                        @Switch Electric
                                      </Link>
                                    </h6>
                                    <span className="fs-sm text-muted">
                                      Aug 29 at 3:41 pm
                                    </span>
                                  </li>
                                </ul>
                                <button className="btn btn-outline-accent d-block w-100">
                                  <i className="ci-loading me-2"></i>Load more
                                </button>
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
        </div>
      </section>
      <section className="container mb-5 pb-md-4">
        <div className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-sm-between mb-sm-4 mb-3">
          <h2 className="h3 mb-sm-0">More from this Location</h2>
          <a className="btn btn-outline-accent ms-sm-3" to="#">
            View collection<i className="ci-arrow-right ms-2"></i>
          </a>
        </div>
        {/* <!-- Product carousel--> */}
        <div className=" tns-controls-static tns-controls-outside mx-xl-n4 mx-n2 px-xl-4 px-0 ">
          <div
            className=" row gx-xl-0 gx-3 mx-0"
            data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "gutter": 30}}}'
          >
            {/* <!-- Product item--> */}
            <div className="col py-3" id="single-buy">
              <article className="card h-100 border-0 shadow">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft15} alt="Product" />
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
                      to="project-developer"
                    >
                      @Switch Electric
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Product item--> */}
            <div className="col py-3" id="single-buy">
              <article className="card h-100 border-0 shadow">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft16} alt="Product" />
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
                      Switch Project 16
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
            {/* <!-- Product item--> */}
            <div className="col py-3" id="single-buy">
              <article className="card h-100 border-0 shadow">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="single-buy">
                    <img src={Nft12} alt="Product" />
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
                      Switch Project 12
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
            {/* <!-- Product item--> */}
            <div className="col py-3" id="single-buy">
              <article className="card h-100 border-0 shadow">
                <div className="card-img-top position-relative overflow-hidden">
                  <Link className="d-block" to="/single-buy">
                    <img src={Nft11} alt="Product" />
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
                      Switch Project 11
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
        </div>
      </section>
    </div>
  );
}

export default SinglebuyBody;
