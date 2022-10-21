import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProjData from "./ProjData";
import TheCard from "./TheCard";
import MyCard from "./Card";
import NftCard from "./NftCard";
//import "./styles.css";
import Hero from "./Hero";
import bgImg from "./images/hero-bg.png";
import Button from "./Button";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./theme.min.css";

const cardElement = ProjData.map((item) => {
  return (
    <TheCard
      key={item.title}
      title={item.title}
      image={item.img}
      price={item.price}
      logo={item.logo}
    />
  );
});

function Index() {
  return (
    <div className="handheld-toolbar-enabled">
      <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-secondary">
              <ul className="nav nav-tabs card-header-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium active"
                    href="#signin-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="ci-unlocked me-2 mt-n1"></i>Sign in
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="#signup-tab"
                    data-bs-toggle="tab"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="ci-user me-2 mt-n1"></i>Sign up
                  </a>
                </li>
              </ul>
              <Button
                className={"btn-close"}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body tab-content py-4">
              <form
                className="needs-validation tab-pane fade show active"
                id="signin-tab"
              >
                <div className="mb-3">
                  <label className="form-label">
                    {/* for="si-email"> */}
                    Email address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="si-email"
                    placeholder="johndoe@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    {/* for="si-password"> */}
                    Password
                  </label>
                  <div className="password-toggle">
                    <input
                      className="form-control"
                      type="password"
                      id="si-password"
                      required
                    />
                    <label
                      className="password-toggle-btn"
                      aria-label="Show/hide password"
                    >
                      {" "}
                      <input
                        className="password-toggle-check"
                        type="checkbox"
                      />
                      <span className="password-toggle-indicator"></span>{" "}
                    </label>
                  </div>
                </div>
                <div className="mb-3 d-flex flex-wrap justify-content-between">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="si-remember"
                    />
                    <label className="form-check-label">
                      {" "}
                      {/*for="si-remember">*/}
                      Remember me
                    </label>
                  </div>
                  <a className="fs-sm" href="#aa">
                    Forgot password?
                  </a>
                </div>
                <Button
                  className={"btn btn-primary btn-shadow d-block w-100"}
                  type="submit"
                >
                  Sign in
                </Button>
              </form>
              <form className="needs-validation tab-pane fade" id="signup-tab">
                <div className="mb-3">
                  <label className="form-label">
                    {/* for="su-name">*/}
                    Full name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="su-name"
                    placeholder="John Doe"
                    required
                  />
                  <div className="invalid-feedback">
                    Please fill in your name.
                  </div>
                </div>
                <div className="mb-3">
                  <label>
                    {" "}
                    {/* for="su-email">*/}
                    Email address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="su-email"
                    placeholder="johndoe@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    {" "}
                    {/*for="su-password">*/}
                    Password
                  </label>
                  <div className="password-toggle">
                    <input
                      className="form-control"
                      type="password"
                      id="su-password"
                      required
                    />
                    <label
                      className="password-toggle-btn"
                      aria-label="Show/hide password"
                    >
                      {" "}
                      <input
                        className="password-toggle-check"
                        type="checkbox"
                      />
                      <span className="password-toggle-indicator"></span>{" "}
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    {" "}
                    {/*for="su-password-confirm">*/}
                    Confirm password
                  </label>
                  <div className="password-toggle">
                    <input
                      className="form-control"
                      type="password"
                      id="su-password-confirm"
                      required
                    />
                    <label
                      className="password-toggle-btn"
                      aria-label="Show/hide password"
                    >
                      {" "}
                      <input
                        className="password-toggle-check"
                        type="checkbox"
                      />
                      <span className="password-toggle-indicator"></span>{" "}
                    </label>
                  </div>
                </div>
                <Button
                  className={"btn btn-primary btn-shadow d-block w-100"}
                  type="submit"
                >
                  Sign up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <main className="page-wrapper">
        {/* <!-- Navbar for NFT Marketplace demo-->
        <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.--> */}
        <header className="navbar d-block navbar-sticky navbar-expand-lg navbar-light position-absolute w-100">
          <div className="container">
            <a
              className="navbar-brand d-none d-sm-block me-4 order-lg-1"
              href="index.html"
            >
              <img
                src="img/Switch/Switch Electric PNG croped.png"
                width="142"
                alt="Switch"
              />
            </a>
            <a
              className="navbar-brand d-sm-none me-2 order-lg-1"
              href="index.html"
            >
              <img
                src="img/Switch/Switch Electric PNG croped.png"
                width="74"
                alt="Switch"
              />
            </a>
            <div className="navbar-toolbar d-flex align-items-center order-lg-3">
              <Button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </Button>
              <a
                className="navbar-tool d-none d-lg-flex"
                href="#!!"
                data-bs-toggle="collapse"
                data-bs-target="#searchBox"
                role="button"
                aria-expanded="false"
                aria-controls="searchBox"
              >
                <span className="navbar-tool-tooltip">Search</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon ci-search"></i>
                </div>
              </a>
              <a
                className="navbar-tool ms-lg-2"
                href="#signin-modal"
                data-bs-toggle="modal"
              >
                <span className="navbar-tool-tooltip">Account</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon ci-user"></i>
                </div>
              </a>
              <a
                className="btn btn-sm btn-accent rounded-1 ms-lg-4 ms-2"
                href="wallet.html"
              >
                Connect Wallet
              </a>
            </div>
            <div
              className="collapse navbar-collapse me-auto order-lg-2"
              id="navbarCollapse"
            >
              {/* <!-- Search (mobile)--> */}
              <div className="d-lg-none py-3">
                <div className="input-group">
                  <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                  <input
                    className="form-control rounded-start"
                    type="text"
                    placeholder="What do you need?"
                  />
                </div>
              </div>
              {/* <!-- Primary menu--> */}
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="marketplace.html">
                    Marketplace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#nav">
                    Collections
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#nav">
                    Badges
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Search collapse--> */}
          <div className="search-box collapse" id="searchBox">
            <div className="container py-2">
              <div className="input-group">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <input
                  className="form-control rounded-start"
                  type="text"
                  placeholder="What do you need?"
                />
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Hero--> */}
        <section
          className="mb-lg-2 bg-faded-accent bg-size-cover"
          style={{
            paddingTop: "80px",
            backgroundImage: `${bgImg}`,
          }}
        >
          <div className="container py-4">
            <div className="row align-items-center justify-content-center gy-3 py-3 text-lg-start text-center">
              <div className="col-lg-5 col-md-8 col-sm-10">
                <h1 className="mb-4 pb-lg-2">
                  Discover rare digital art, collect NFTs and invest in Solar
                  projects
                </h1>
                <p className="mb-lg-5 mb-4 fs-lg">
                  The world's first and largest digital marketplace with crypto
                  collectibles and non-fungible tokens (NFTs) for Solar
                  projects.
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
                <div className="tns-carousel tns-nav-enabled mb-4 mx-n2">
                  <div
                    className="tns-carousel-inner"
                    data-carousel-options='{"controls": false}'
                  >
                    {/* {/* <!-- Carousel item--> */}
                    <div className="px-2">
                      <img className="rounded-3" src="n1.jpg" alt="Product" />
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
                    <div className="px-2">
                      <img className="rounded-3" src="n2.jpg" alt="Product" />
                      <div className="position-relative">
                        <div className="position-absolute start-0 bottom-0 w-100 p-md-5 p-sm-4 p-3">
                          <div className="pt-sm-0 pt-2 px-sm-4 px-2 bg-white rounded shadow">
                            <div className="row gx-5">
                              <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                <h6 className="mb-1 fs-sm fw-normal text-muted">
                                  Current bid:
                                </h6>
                                <span className="h6 mb-0">0.8 ETH</span>
                              </div>
                              <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                <hr className="hr-vertical position-absolute start-0 top-0 ml-n4" />
                                <h6 className="mb-1 fs-sm fw-normal text-muted">
                                  Ends in:
                                </h6>
                                <span className="h6 mb-0">4 hours</span>
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
                    {/* {/* <!-- Carousel item--> */}
                    <div className="px-2">
                      <img className="rounded-3" src="n2.jpg" alt="Product" />
                      <div className="position-relative">
                        <div className="position-absolute start-0 bottom-0 w-100 p-md-5 p-sm-4 p-3">
                          <div className="pt-sm-0 pt-2 px-sm-4 px-2 bg-white rounded shadow">
                            <div className="row gx-5">
                              <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                <h6 className="mb-1 fs-sm fw-normal text-muted">
                                  Current bid:
                                </h6>
                                <span className="h6 mb-0">1.2 ETH</span>
                              </div>
                              <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                <hr className="hr-vertical position-absolute start-0 top-0 ml-n4" />
                                <h6 className="mb-1 fs-sm fw-normal text-muted">
                                  Ends in:
                                </h6>
                                <span className="h6 mb-0">10 hours</span>
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
        {/* <!-- Product carousel (Recent Drops)--> */}
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
                      <img src="/img/Switch/n3.jpg" alt="Product" />
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
                      <img src="img/Switch/n4.jpg" alt="Product" />
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
                      <img src="img/Switch/n6.jpg" alt="Product" />
                    </a>
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
                      <img src="img/Switch/n7.jpg" alt="Product" />
                    </a>
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
                      <img src="img/Switch/n8.jpg" alt="Product" />
                    </a>
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
                      <img src="img/Switch/n4.jpg" alt="Product" />
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
                      <img src="img/Switch/n1.jpg" alt="Product" />
                    </a>
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
                      <img src="img/Switch/n2.jpg" alt="Product" />
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
        {/* <!-- Product carousel (Trending in)--> */}
        <section className="mb-4 py-5 bg-secondary">
          <div className="container py-lg-4">
            <div className="d-flex flex-wrap mb-3">
              <h2 className="h3 mb-0">Trending Solar Projects</h2>
            </div>
            {/* <!-- Product carousel--> */}
            <div className="tns-carousel tns-controls-static tns-controls-outside mx-xl-n4 mx-n2 px-xl-4 px-0">
              <div
                className="tns-carousel-inner row gx-xl-0 gx-3 mx-0"
                data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "gutter": 30}}}'
              >
                {/* <!-- Product item--> */}
                <div className="col py-3">
                  <article className="card h-100 border-0">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a className="d-block" href="nft-single-buy.html">
                        <img src="img/Switch/n1.jpg" alt="Product" />
                      </a>
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
                  <article className="card h-100 border-0">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/Switch/n2.jpg" alt="Product" />
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
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          Switch Project 2
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Current bid:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.5 ETH
                        </h4>
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
                  <article className="card h-100 border-0">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/Switch/n4.jpg" alt="Product" />
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
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          Switch Project 4
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
                  <article className="card h-100 border-0">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/Switch/n3.jpg" alt="Product" />
                      </a>
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
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          Switch Project 3
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
            <div className="d-flex flex-sm-row flex-column justify-content-center pt-4">
              <a className="btn btn-outline-accent" href="marketplace.html">
                Browse marketplace
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Top Creators--> */}
        <section className="container py-lg-5 py-4">
          <h2 className="h3 mb-4 pb-2">Top Projects Developers</h2>
          {/* <!-- Creators (carousel)--> */}
          <div className="tns-carousel">
            <div
              className="tns-carousel-inner"
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
                      src="img/Switch/switch.jpg"
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
                        50 successful projects{" "}
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
                      src="img/nft/home/creators/03.png"
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
                        44 successful projects{" "}
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
                      src="img/nft/home/creators/03.png"
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
                      src="img/nft/home/creators/03.png"
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
                      src="img/nft/home/creators/03.png"
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
                      src="img/nft/home/creators/03.png"
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
                      src="img/nft/home/creators/03.png"
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
                      src="img/nft/home/creators/03.png"
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
                      src="img/nft/home/creators/03.png"
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
        {/* <!-- Recommended collections--> */}

        {/* <!-- Mobile app--> */}
        <section className="container py-lg-5 py-4">
          {/* <!-- Banner--> */}
          <div className="card border-0 position-relative overflow-hidden">
            {/* <!-- Overlay bg--> */}
            <span
              className="d-block w-100 h-100 position-absolute top-0 start-0 zindex-1 bg-accent opacity-15"
              style={{
                backgroundImage:
                  "conic-gradient( from 207.95deg at 50% 50%, #885cff -57.31deg,ff6b9b 44.14deg, #dc86ff 78.21deg,#885cff 123.94deg, #dc86ff 186.36deg,#ff6b9b 249.2deg,#885cff 302.69deg,#ff6b9b 404.14deg)",
              }}
            ></span>
            {/* <!-- Overlay content--> */}
            <div className="card-body row py-0 px-sm-0 position-relative zindex-5">
              <div className="col-lg-9 col-sm-10 offset-sm-1 d-flex flex-md-row flex-column align-items-md-end text-md-start text-center">
                <div
                  className="my-5 me-md-5 me-auto ms-md-0 ms-auto py-md-4"
                  style={{ maxWidth: "495px" }}
                >
                  <h3 className="h2 mb-3">
                    <span className="text-accent">Best place</span> for SOLAR &
                    NFT Enthusiasts
                  </h3>
                  <p className="mb-sm-4 mb-3">
                    If you're an Solar enthusiast, or are looking to get more
                    familiar with NFTs, consider joining Switch as a Project
                    Developer
                  </p>
                  <div className="mx-n1">
                    <a className="btn-market btn-apple mt-3 mx-1" href="empty">
                      <span className="btn-market-subtitle">
                        Coming soon to{" "}
                      </span>
                      <span className="btn-market-title">App Store</span>
                    </a>
                    <a className="btn-market btn-google mt-3 mx-1" href="empty">
                      <span className="btn-market-subtitle">
                        Coming soon to{" "}
                      </span>
                      <span className="btn-market-title">Google Play</span>
                    </a>
                  </div>
                </div>
                <div className="flex-shrink-0 ms-md-auto">
                  <img
                    src="img/nft/mobile-app.svg"
                    alt="Illustration"
                    style={{
                      borderTopLeftRadius: "28px",
                      borderTopRightRadius: "28px",
                      boxShadow: "16px 16px 24px -7px rgba(0, 0, 0, 0.3)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Features--> */}
        <section className="container py-lg-5 py-4">
          <h2 className="mb-4 pb-md-3 pb-2">
            Begin your SOLAR & NFT journey with us!
          </h2>
          {/* <!-- Features carousel--> */}
          <div className="tns-carousel mb-4">
            <div
              className="tns-carousel-inner"
              data-carousel-options='{"items": 2, "nav": true, "gutter": 30, "responsive": {"0":{"items":1,"controls": false},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true}}}'
            >
              {/* <!-- Carousel item--> */}
              <div>
                <img
                  className="mb-4"
                  src="img/nft/features/wallet.svg"
                  width="60"
                  alt="Icon"
                />
                <h4 className="mb-2 fs-lg text-body">Set up your wallet</h4>
                <p className="mb-0 fs-sm text-muted">
                  Quam nulla in id nibh. Morbi eget elit eget dui est pretium,
                  blandit penatibus blandit. Amet mattis blandit urna volutpat.
                </p>
              </div>
              {/* <!-- Carousel item--> */}
              <div>
                <img
                  className="mb-4"
                  src="img/nft/features/add.svg"
                  width="60"
                  alt="Icon"
                />
                <h4 className="mb-2 fs-lg text-body">
                  Submit your project prospal
                </h4>
                <p className="mb-0 fs-sm text-muted">
                  Fringilla ullamcorper aenean tellus ullamcorper neque,
                  malesuada. Aliquam consequat nunc.
                </p>
              </div>
              {/* <!-- Carousel item--> */}
              <div>
                <img
                  className="mb-4"
                  src="img/nft/features/image.svg"
                  width="60"
                  alt="Icon"
                />
                <h4 className="mb-2 fs-lg text-body">
                  List approved projects as NFTs
                </h4>
                <p className="mb-0 fs-sm text-muted">
                  Platea eu aliquam pellentesque parturient. Volutpat, fermentum
                  suspendisse at nisi cras mattis augue.
                </p>
              </div>
              {/* <!-- Carousel item--> */}
              <div>
                <img
                  className="mb-4"
                  src="img/nft/features/shopping-cart.svg"
                  width="60"
                  alt="Icon"
                />
                <h4 className="mb-2 fs-lg text-body">
                  Land Funding from Nfts collectors
                </h4>
                <p className="mb-0 fs-sm text-muted">
                  In eget nulla id feugiat ut placerat sapien malesuada. Sed id
                  risus non accumsan eu amet ut pellentesque.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- Bg shape--> */}
      <div className="pt-4 bg-secondary">
        {/* <!-- Blog recent posts--> */}
        <section className="container py-lg-5 py-4">
          <div className="d-flex align-items-center justify-content-between mb-sm-4 mb-2 pb-2">
            <h2 className="h3 mb-0">Resources for getting started</h2>
            <a className="btn btn-outline-accent ms-3" href="blog-grid.html">
              All articles<i className="ci-arrow-right ms-2"></i>
            </a>
          </div>
          {/* <!-- Blog (carousel)--> */}
          <div className="tns-carousel pb-lg-5 pb-4">
            <div
              className="tns-carousel-inner"
              data-carousel-options='{"items": 2, "controls": false, "nav": true, "gutter": 30, "responsive": {"0":{"items":1},"576":{"items":2},"992":{"items":3}}}'
            >
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/01.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="#flex">
                    by Wade Warren
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="empty">
                    Aug 15
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    The complete guide to NFTs art for creators and investors
                  </a>
                </h2>
              </article>
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/02.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="#flex">
                    by Kathryn Murphy
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="#flex">
                    Sep 18
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    A chance to win a variety of common, rare and unique NFTs
                  </a>
                </h2>
              </article>
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/03.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="#flex">
                    by Devon Lane
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="#flex">
                    Nov 26
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    Exclusive premium events, from exhibitions to unique
                    collectibles
                  </a>
                </h2>
              </article>
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/01.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="#flex">
                    by Wade Warren
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="#flex">
                    Aug 15
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    The complete guide to NFTs art for creators and investors
                  </a>
                </h2>
              </article>
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/02.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="empty">
                    by Kathryn Murphy
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="empty">
                    Sep 18
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    A chance to win a variety of common, rare and unique NFTs
                  </a>
                </h2>
              </article>
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/03.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="empty">
                    by Devon Lane
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="empty">
                    Nov 26
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    Exclusive premium events, from exhibitions to unique
                    collectibles
                  </a>
                </h2>
              </article>
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/01.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="empty">
                    by Wade Warren
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="empty">
                    Aug 15
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    The complete guide to NFTs art for creators and investors
                  </a>
                </h2>
              </article>
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/02.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="empty">
                    by Kathryn Murphy
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="empty">
                    Sep 18
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    A chance to win a variety of common, rare and unique NFTs
                  </a>
                </h2>
              </article>
              {/* <!-- Carousel item--> */}
              <article>
                <a className="d-block mb-3" href="blog-single.html">
                  <img
                    className="rounded-3"
                    src="img/nft/blog/03.jpg"
                    alt="Blog"
                  />
                </a>
                <div className="d-flex align-items-center fs-sm pb-2">
                  <a className="blog-entry-meta-link" href="##">
                    by Devon Lane
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <a className="blog-entry-meta-link" href="empty">
                    Nov 26
                  </a>
                </div>
                <h2 className="h6 blog-entry-title mb-0">
                  <a href="blog-single.html">
                    Exclusive premium events, from exhibitions to unique
                    collectibles
                  </a>
                </h2>
              </article>
            </div>
          </div>
        </section>
        {/* <!-- Mail subscription--> */}
        <section className="container">
          <div className="card py-5 border-0 shadow">
            <div className="card-body py-md-4 py-3 px-4 text-center">
              <h3 className="mb-3">Never miss a drop!</h3>
              <p className="mb-4 pb-2">
                Subscribe to our ultra-exclusive drop list and be the first to
                know about upcoming drops.
              </p>
              <div className="widget mx-auto" style={{ maxWidth: "500px" }}>
                <form
                  className="subscription-form validate"
                  action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                  method="post"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                >
                  <div className="input-group flex-nowrap">
                    <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="email"
                      name="EMAIL"
                      placeholder="Your email"
                      required
                    />
                    <Button
                      className="btn btn-accent"
                      type="submit"
                      name="subscribe"
                    >
                      Subscribe*
                    </Button>
                  </div>
                  {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                  <div
                    style={{ position: "absolute; left: -5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      className="subscription-form-antispam"
                      type="text"
                      name="b_c7103e2c981361a6639545bd5_29ca296126"
                      tabIndex="-1"
                    />
                  </div>
                  <div className="form-text mt-3">
                    *Receive early discount offers, updates and new products
                    info.
                  </div>
                  <div className="subscription-status"></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- Footer--> */}
      <footer className="footer bg-darker">
        <div className="mt-n10 pt-10 bg-dark">
          <div className="container py-5">
            <div className="row py-lg-4">
              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="widget pb-3 mb-lg-4">
                  <h3 className="widget-title text-light pb-1">
                    Stay informed
                  </h3>
                  <form
                    className="subscription-form validate"
                    action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                    method="post"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                  >
                    <div className="input-group flex-nowrap">
                      <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input
                        className="form-control rounded-start"
                        type="email"
                        name="EMAIL"
                        placeholder="Your email"
                        required
                      />
                      <Button
                        className="btn btn-accent"
                        type="submit"
                        name="subscribe"
                      >
                        Subscribe*
                      </Button>
                    </div>
                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        className="subscription-form-antispam"
                        type="text"
                        name="b_c7103e2c981361a6639545bd5_29ca296126"
                        tabIndex="-1"
                      />
                    </div>
                    <div className="form-text text-light opacity-50">
                      *Subscribe to our newsletter to receive early discount
                      offers, updates and new products info.
                    </div>
                    <div className="subscription-status"></div>
                  </form>
                </div>
                <div>
                  <a
                    className="btn-social bs-light bs-twitter me-2 mb-2"
                    href="https://twitter.com/whyNotSwitch"
                  >
                    <i className="ci-twitter"></i>
                  </a>
                  <a
                    className="btn-social bs-light bs-instagram me-2 mb-2"
                    href="https://www.instagram.com/whynotswitch/"
                  >
                    <i className="ci-instagram"></i>
                  </a>
                  <a
                    className="btn-social bs-light bs-pinterest me-2 mb-2"
                    href="https://www.linkedin.com/company/whynotswitch/"
                  >
                    <i className="ci-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="d-flex flex-sm-row flex-column justify-content-sm-between mt-n4 mx-lg-n3">
                  <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                    <h3 className="widget-title text-light">Company</h3>
                    <ul className="widget-list">
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          About Us
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          How It Works
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Transform Projects into NFTs
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Support
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Blog
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          My Account
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                    <h3 className="widget-title text-light">
                      Project Locations
                    </h3>
                    <ul className="widget-list">
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Enugu, Nigeria
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Anambra, Nigeria
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Lagos, Nigeria
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Abuja, Nigeria
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Imo, Nigeria
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Kaduna, Nigeria
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                    <h3 className="widget-title text-light">Help</h3>
                    <ul className="widget-list">
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Terms and Conditions
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a className="widget-list-link" href="empty">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-lg-4 my-3 py-2">
          <div className="d-flex flex-md-row flex-column-reverse align-items-center justify-content-md-between">
            <div className="fs-xs text-light opacity-50">
              &copy; All rights reserved. Made by{" "}
              <a
                className="text-light"
                href="https://www.whynotswitch.com/"
                target="_blank"
                rel="noopener"
              >
                Switch Electric Ltd
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Toolbar for handheld devices (NFT Marketplace)--> */}
      <div className="handheld-toolbar">
        <div className="d-table table-layout-fixed w-100">
          <a
            className="d-none handheld-toolbar-item"
            href="#vendor-sidebar"
            data-bs-toggle="offcanvas"
          >
            <span className="handheld-toolbar-icon">
              <i className="ci-sign-in"></i>
            </span>
            <span className="handheld-toolbar-label">Sidebar</span>
          </a>
          <a
            className="d-table-cell handheld-toolbar-item"
            href="#signin-modal"
            data-bs-toggle="modal"
          >
            <span className="handheld-toolbar-icon">
              <i className="ci-user"></i>
            </span>
            <span className="handheld-toolbar-label">Account</span>
          </a>
          <a
            className="d-table-cell handheld-toolbar-item"
            href="empty"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            //onClick="window.scrollTo(0, 0)"
          >
            <span className="handheld-toolbar-icon">
              <i className="ci-menu"></i>
            </span>
            <span className="handheld-toolbar-label">Menu</span>
          </a>
          <a className="d-table-cell handheld-toolbar-item" href="wallet.html">
            <span className="handheld-toolbar-icon">
              <i className="ci-wallet"></i>
            </span>
            <span className="handheld-toolbar-label text-nowrap">
              Connect wallet
            </span>
          </a>
        </div>
      </div>
      {/* <!-- Back To Top Button--> */}
      <a className="btn-scroll-top" href="#top" data-scroll>
        <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
          Top
        </span>
        <i className="btn-scroll-top-icon ci-arrow-up"> </i>
      </a>
    </div>
  );
}

export default Index;
