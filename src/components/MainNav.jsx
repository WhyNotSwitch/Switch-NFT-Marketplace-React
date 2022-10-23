import React from "react";
import Button from "./Button";
import "./theme.min.css";
import navLogo from "./img/Switch/switchlogo.png";

function MainNav() {
  return (
    <header className="navbar d-block navbar-sticky navbar-expand-lg navbar-light position-absolute w-100">
      <div className="container">
        <a
          className="navbar-brand d-none d-sm-block me-4 order-lg-1"
          href="index.html"
        >
          <img src={navLogo} width="142" alt="Switch" />
        </a>
        <a className="navbar-brand d-sm-none me-2 order-lg-1" href="index.html">
          <img
            src={require("./img/Switch/switchlogo.png")}
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
  );
}

export default MainNav;
