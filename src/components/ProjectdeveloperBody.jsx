import React from "react";
import Nft1 from "./img/Switch/n1.jpg";
import Nft2 from "./img/Switch/n2.jpg";
import Nft3 from "./img/Switch/n3.jpg";
import Nft4 from "./img/Switch/n4.jpg";
import Nft5 from "./img/Switch/n5.jpg";
import Nft6 from "./img/Switch/n6.jpg";
import Nft7 from "./img/Switch/n7.jpg";
import Nft8 from "./img/Switch/n8.jpg";
import Nft9 from "./img/Switch/n9.jpg";
import Nft11 from "./img/Switch/n11.jpg";
import Nft12 from "./img/Switch/n12.jpg";
import Nft13 from "./img/Switch/n13.jpg";
import ThmbNl1 from "./img/nft/thumbnails/01.png";
import ThmbNl3 from "./img/nft/thumbnails/03.png";
import Nft14 from "./img/Switch/n14.jpg";
import SwitchLg from "./img/Switch/switch.jpg";
import Avatar from "./img/nft/vendor/avatar.png";
import { Link } from "react-router-dom";

function ProjectdeveloperBody() {
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
                  <Link to="marketplace.html">Marketplace</Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Project Developer
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Project Developer</h1>
          </div>
        </div>
      </div>
      <section className="container mb-4">
        <div className="mt-lg-2">
          <img
            className="rounded-circle border border-3 d-lg-block d-none"
            src={SwitchLg}
            width="140"
            alt="Avatar"
            style={{ borderColor: "#ffffff !important" }}
          />
          <div className="d-lg-none d-flex align-items-center justify-content-center">
            <img
              className="rounded-circle me-2"
              src={SwitchLg}
              width="36"
              alt="Avatar"
            />
            <h6 className="mb-0 text-light">Switch Electric Ltd</h6>
          </div>
        </div>
        <div className="row">
          {/* <!-- Sidebar--> */}
          <aside className="col-lg-3 pt-lg-4">
            <div className="offcanvas offcanvas-collapse" id="vendor-sidebar">
              <div className="offcanvas-header align-items-center shadow-sm">
                <h2 className="h5 mb-0">Project Developer</h2>
                <button
                  className="btn-close ms-auto"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                {/* <!-- User avatar--> */}
                <img
                  className="rounded-circle d-lg-none d-block mb-4"
                  src={Avatar}
                  width="140"
                  alt="Avatar"
                />
                {/* <!-- User meta--> */}
                <div className="mb-4 pb-2">
                  <h3 className="mb-2 fs-lg fw-normal text-body">
                    Switch Electric Ltd
                  </h3>
                  <h2 className="h4 mb-3">@Switch Electric</h2>
                  <span className="d-inline-block mb-3 fs-sm text-muted">
                    Joined October 2022
                  </span>
                  <Link className="d-block mb-4 text-decoration-none" to="#">
                    <span className="text-body">8508550793340827...</span>
                    <i
                      className="ci-copy ms-2 ps-1 fs-sm text-accent"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Copy"
                    ></i>
                  </Link>
                  <div className="d-flex align-items-center flex-wrap text-nowrap mb-4 fs-sm">
                    <div className="mb-2 me-sm-3 me-2 text-muted">
                      <span className="fw-medium text-body">766</span> followers
                    </div>
                    <div className="mb-2 me-sm-3 me-2 ps-sm-3 ps-2 border-start text-muted">
                      <span className="fw-medium text-body">2K</span> following
                    </div>
                  </div>
                  {/* <!-- Follow--> */}
                  <div className="d-flex flex-lg-row flex-column">
                    <button className="btn btn-accent">Follow</button>
                  </div>
                </div>
              </div>
              <div className="offcanvas-footer d-flex flex-column align-items-start p-lg-0">
                {/* <!-- User bio--> */}
                <div className="mb-4 pb-2 fs-sm">
                  <h6 className="mb-2 fs-md">Short bio</h6>
                  <p className="mb-0">
                    Switch is focused on developing pay-as-you-go solar projects
                    for underdeveloped regions of Nigeria and other developing
                    countries where electrification is poor or unavailable. This
                    allows our customers to have easy access to the clean energy
                    they need at a fraction of the cost while facilitating
                    investments in climate friendly energies..
                  </p>
                  <Link className="d-inline-block mt-1" to="#">
                    <ins>Read more</ins>
                  </Link>
                </div>
                {/* <!-- Socials--> */}
                <div className="mt-n2">
                  <Link
                    className="btn-social bs-twitter me-2 mt-2"
                    to="https://twitter.com/whyNotSwitch"
                  >
                    <i className="ci-twitter"></i>
                  </Link>
                  <Link
                    className="btn-social bs-facebook me-2 mt-2"
                    to="https://www.linkedin.com/company/whynotswitch/"
                  >
                    <i className="ci-linkedin"></i>
                  </Link>
                  <Link
                    className="btn-social bs-instagram me-2 mt-2"
                    to="https://www.instagram.com/whynotswitch/"
                  >
                    <i className="ci-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
          {/* <!-- Content--> */}
          <div className="col-lg-9 mt-lg-n5 mt-5 pt-lg-2 pt-3">
            <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-lg-4 mb-3 pb-md-1">
              {/* <!-- Nav tabs--> */}
              <div className="mb-md-0 mb-4 pb-1" style={{ overflowX: "auto" }}>
                <ul
                  className="nav nav-tabs nav-fill flex-nowrap text-nowrap mb-0"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="#created"
                      data-bs-toggle="tab"
                      role="tab"
                    >
                      Created <span className="opacity-60">(6)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#collections"
                      data-bs-toggle="tab"
                      role="tab"
                    >
                      Collections <span className="opacity-60">(2)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#liked"
                      data-bs-toggle="tab"
                      role="tab"
                    >
                      Liked <span className="opacity-60">(3)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#activity"
                      data-bs-toggle="tab"
                      role="tab"
                    >
                      Activity
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Sorting--> */}
              <div className="d-flex flex-md-row flex-column align-items-md-center flex-shrink-0 ms-md-4 ps-md-2 pb-1">
                <label
                  className="form-label mb-md-0 me-md-2 pe-md-1 fs-sm fw-normal text-nowrap"
                  for="sorting"
                >
                  Sort by:
                </label>
                <select
                  className="form-select"
                  id="sorting"
                  style={{ minWidth: "222px" }}
                >
                  <option selected disabled>
                    Newest
                  </option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
            {/* <!-- Tabs content--> */}
            <div className="tab-content">
              {/* <!-- Created items grid--> */}
              <div
                className="tab-pane fade show active"
                id="created"
                role="tabpanel"
              >
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3">
                  {/* <!-- Product--> */}
                  <div className="col mb-2">
                    <article className="card h-100 border-0 shadow">
                      <div className="card-img-top position-relative overflow-hidden">
                        <Link className="d-block" to="/single-buy">
                          <img src={Nft3} alt="Product image" />
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 3
                          </Link>
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
                          <img src={Nft6} alt="Product image" />
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 6
                          </Link>
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 7
                          </Link>
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 8
                          </Link>
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
                          <img src={Nft1} alt="Product image" />
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 1
                          </Link>
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
                          <img src={Nft2} alt="Product image" />
                        </Link>
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 2
                          </Link>
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
                {/* <!-- Load more--> */}
                <button className="btn btn-outline-accent d-block w-100 mt-sm-4 mt-3">
                  <i className="ci-reload me-2"></i>Load more
                </button>
              </div>
              {/* <!-- Collections--> */}
              <div className="tab-pane fade" id="collections" role="tabpanel">
                {/* <!-- Collections grid--> */}
                <div className="row row-cols-md-2 row-cols-1 g-4">
                  {/* <!-- Collection item--> */}
                  <div className="col">
                    <article>
                      <div className="card mb-3">
                        <div className="card-body p-3">
                          {/* <!-- Author--> */}
                          <div className="d-flex align-items-center position-relative mb-3">
                            <img
                              className="rounded-circle me-2"
                              src={ThmbNl1}
                              width="32"
                              alt="Avatar"
                            />
                            <div className="fs-sm">
                              by
                              <Link
                                className="ms-1 fw-medium text-accent stretched-link"
                                to="/project-developer"
                              >
                                @Developer's name
                              </Link>
                            </div>
                          </div>
                          {/* <!-- Collage--> */}
                          <Link className="d-block" to="nft-catalog-v2.html">
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
                          </Link>
                        </div>
                      </div>
                      {/* <!-- Collection title--> */}
                      <h3 className="h5 mb-1">
                        <Link
                          className="nav-link-style"
                          to="nft-catalog-v2.html"
                        >
                          Lagos, Nigeria
                        </Link>
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
                              src={ThmbNl3}
                              width="32"
                              alt="Avatar"
                            />
                            <div className="fs-sm">
                              by
                              <Link
                                className="ms-1 fw-medium text-accent stretched-link"
                                to="/project-developer"
                              >
                                @Developer's name
                              </Link>
                            </div>
                          </div>
                          {/* <!-- Collage--> */}
                          <Link className="d-block" to="nft-catalog-v2.html">
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
                                    src="././img/Switch/n10.jpg"
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
                          </Link>
                        </div>
                      </div>
                      {/* <!-- Collection title--> */}
                      <h3 className="h5 mb-1">
                        <Link
                          className="nav-link-style"
                          to="nft-catalog-v2.html"
                        >
                          Anambra, Nigeria
                        </Link>
                      </h3>
                      <span className="fs-sm text-muted">$ 1520.18</span>
                    </article>
                  </div>
                </div>
              </div>
              {/* <!-- Liked--> */}
              <div className="tab-pane fade" id="liked" role="tabpanel">
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 7
                          </Link>
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 8
                          </Link>
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
                          <Link
                            className="d-block text-truncate"
                            to="/single-buy"
                          >
                            Switch Project 4
                          </Link>
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
              {/* <!-- Activity--> */}
              <div className="tab-pane fade" id="activity" role="tabpanel">
                {/* <!-- Orders list--> */}
                <div className="table-responsive fs-md mb-4 pb-1">
                  <table className="table mb-0" style={{ minWidth: "880px" }}>
                    <thead className="text-uppercase bg-secondary">
                      <tr>
                        <th>Item</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-4">
                          <div className="d-flex align-items-center position-relative">
                            <img
                              className="rounded me-2"
                              src={Nft4}
                              width="48"
                              alt="Product thumbnail"
                            />
                            <div className="ps-1">
                              <h6 className="mb-0 fs-base text-body">
                                <Link
                                  className="nav-link-style d-block stretched-link"
                                  to="#"
                                >
                                  Switch Project 4
                                </Link>
                              </h6>
                              <span className="fs-sm text-muted">
                                by @freeross
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="badge bg-success">Sales</span>
                        </td>
                        <td className="py-4">
                          <h6 className="mb-1 fs-sm text-darker">0.1 ETH</h6>
                          <span className="fs-sm text-muted">(≈ $ 400.19)</span>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @freeross
                          </Link>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @Switch Electric
                          </Link>
                        </td>
                        <td className="py-4">
                          <span className="fs-sm text-muted">4 hours ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4">
                          <div className="d-flex align-items-center position-relative">
                            <img
                              className="rounded me-2"
                              src={Nft5}
                              width="48"
                              alt="Product thumbnail"
                            />
                            <div className="ps-1">
                              <h6 className="mb-0 fs-base text-body">
                                <Link
                                  className="nav-link-style d-block stretched-link"
                                  to="#"
                                >
                                  Switch Project 5
                                </Link>
                              </h6>
                              <span className="fs-sm text-muted">
                                by @Switch Electric
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="badge bg-info">Listings</span>
                        </td>
                        <td className="py-4">
                          <h6 className="mb-1 fs-sm text-darker">0.4 ETH</h6>
                          <span className="fs-sm text-muted">(≈ $ 649.82)</span>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @Switch Electric
                          </Link>
                        </td>
                        <td className="py-4">—</td>
                        <td className="py-4">
                          <span className="fs-sm text-muted">1 day ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4">
                          <div className="d-flex align-items-center position-relative">
                            <img
                              className="rounded me-2"
                              src={Nft6}
                              width="48"
                              alt="Product thumbnail"
                            />
                            <div className="ps-1">
                              <h6 className="mb-0 fs-base text-body">
                                <Link
                                  className="nav-link-style d-block stretched-link"
                                  to="#"
                                >
                                  Switch Project 6
                                </Link>
                              </h6>
                              <span className="fs-sm text-muted">
                                by @lulucollages
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="badge bg-danger">Bids</span>
                        </td>
                        <td className="py-4">
                          <h6 className="mb-1 fs-sm text-darker">0.25 ETH</h6>
                          <span className="fs-sm text-muted">(≈ $ 493.24)</span>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @Switch Electric
                          </Link>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @lulucollages
                          </Link>
                        </td>
                        <td className="py-4">
                          <span className="fs-sm text-muted">
                            Dec 22 <br />
                            at 3:41 pm
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4">
                          <div className="d-flex align-items-center position-relative">
                            <img
                              className="rounded me-2"
                              src={Nft3}
                              width="48"
                              alt="Product thumbnail"
                            />
                            <div className="ps-1">
                              <h6 className="mb-0 fs-base text-body">
                                <Link
                                  className="nav-link-style d-block stretched-link"
                                  to="#"
                                >
                                  Switch Project 3
                                </Link>
                              </h6>
                              <span className="fs-sm text-muted">
                                by @YunusKullebi
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="badge bg-danger">Bids</span>
                        </td>
                        <td className="py-4">
                          <h6 className="mb-1 fs-sm text-darker">0.1 ETH</h6>
                          <span className="fs-sm text-muted">(≈ $ 400.19)</span>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @Switch Electric
                          </Link>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @unusKullebi
                          </Link>
                        </td>
                        <td className="py-4">
                          <span className="fs-sm text-muted">
                            Nov 15 <br />
                            at 11:20 am
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4">
                          <div className="d-flex align-items-center position-relative">
                            <img
                              className="rounded me-2"
                              src={Nft2}
                              width="48"
                              alt="Product thumbnail"
                            />
                            <div className="ps-1">
                              <h6 className="mb-0 fs-base text-body">
                                <Link
                                  className="nav-link-style d-block stretched-link"
                                  to="#"
                                >
                                  Switch Project 2
                                </Link>
                              </h6>
                              <span className="fs-sm text-muted">
                                by @Switch Electric
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="badge bg-warning">Transfers</span>
                        </td>
                        <td className="py-4">
                          <h6 className="mb-1 fs-sm text-darker">—</h6>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @Switch Electric
                          </Link>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @DistroKid
                          </Link>
                        </td>
                        <td className="py-4">
                          <span className="fs-sm text-muted">
                            Nov 4 <br />
                            at 5:16 pm
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4">
                          <div className="d-flex align-items-center position-relative">
                            <img
                              className="rounded me-2"
                              src={Nft1}
                              width="48"
                              alt="Product thumbnail"
                            />
                            <div className="ps-1">
                              <h6 className="mb-0 fs-base text-body">
                                <Link
                                  className="nav-link-style d-block stretched-link"
                                  to="#"
                                >
                                  Switch Project 1
                                </Link>
                              </h6>
                              <span className="fs-sm text-muted">
                                by @MihailGreen
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="badge bg-success">Sales</span>
                        </td>
                        <td className="py-4">
                          <h6 className="mb-1 fs-sm text-darker">2.8 ETH</h6>
                          <span className="fs-sm text-muted">
                            (≈ $ 1360.75)
                          </span>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @MihailGreen
                          </Link>
                        </td>
                        <td className="py-4">
                          <Link className="nav-link-style fw-medium" to="#">
                            @Switch Electric
                          </Link>
                        </td>
                        <td className="py-4">
                          <span className="fs-sm text-muted">
                            Oct 29 <br />
                            at 6:29 pm
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="btn btn-outline-accent d-block w-100">
                  <i className="ci-reload me-2"></i>Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectdeveloperBody;
