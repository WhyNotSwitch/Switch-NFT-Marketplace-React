import React from "react";
import "./styles.css";
import ThmbNl1 from "./img/nft/thumbnails/01.png";
import ThmbNl3 from "./img/nft/thumbnails/03.png";
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
import SideBar from "./SideBar";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function CollectionsBody() {
  return (
    <div id="collBody">
      <div className="bg-accent pt-4" style={{ paddingBottom: "35px" }}>
        <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
          <div className="d-lg-flex justify-content-between pb-3">
            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                  <li className="breadcrumb-item">
                    <Link className="text-nowrap" to="index.html">
                      <i className="ci-home"></i>Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item text-nowrap">
                    <Link to="home-nft.html">NFT Collections</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    Project Location
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h1 className="h3 text-light mb-0">
                Collections by their Locations
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        {/* <!-- Toolbar-->*/}
        <div
          className="bg-light shadow-lg rounded-3 mb-4"
          style={{ marginTop: "-35px" }}
        >
          <div className="d-flex">
            {/* <!-- Search-->*/}
            <div className="w-100">
              <div className="input-group ms-2 pe-sm-3">
                <input
                  className="form-control bg-transparent rounded-0 border-0 shadow-none ps-5 py-4"
                  type="text"
                  placeholder="Search collection, title or user..."
                />
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y zindex-5 ms-3 fs-lg text-muted"></i>
              </div>
            </div>
            {/* <!-- Sorting-->*/}
            <Dropdown>
              <div className="flex-shrink-0 border-start">
                <div className="dropdown">
                  <Dropdown.Toggle
                    className="btn border-0 p-4 fw-medium bg-light "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="d-sm-inline d-none text-dark">
                      Recently added
                    </span>
                    <i className="ci-arrow-down ms-sm-2 fs-sm"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item active"
                        to="#"
                        style={{ whiteSpace: "normal" }}
                      >
                        Recently added
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link
                        className="dropdown-item"
                        to="#"
                        style={{ whiteSpace: "normal" }}
                      >
                        Oldest
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </div>
            </Dropdown>

            <div className="d-md-flex d-none">
              {/* <!-- Pages-->*/}
              <div className="border-start">
                <div className="p-4 fs-md text-nowrap">Pages 1/5</div>
              </div>
              {/* <!-- Back-->*/}
              <div className="border-start">
                <Link className="btn border-0 p-4 fw-medium" to="#">
                  <i className="ci-arrow-left"></i>
                </Link>
              </div>
              {/* <!-- Forward-->*/}
              <div className="border-start">
                <Link className="btn border-0 p-4 fw-medium" to="#">
                  <i className="ci-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Filters-->*/}

        <div className="d-flex flex-lg-row flex-column align-items-lg-center justify-content-between pt-lg-3">
          <div className="d-flex flex-wrap">
            {/* <!-- Categories-->*/}
            <Dropdown className="dropdown mb-lg-3 mb-2 me-lg-3 me-2">
              <Dropdown.Toggle
                id="purple"
                className="btn btn-outline-accent w-100"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu
                className=" mt-lg-2 mt-1 dropdown-toggle"
                style={{ minWidth: "260px" }}
              >
                <div className="widget px-3">
                  <ul className="widget-list list-unstyled">
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="all"
                        />
                        <label className="form-check-label" htmlFor="all">
                          All artworks
                        </label>
                      </div>
                      <span className="fs-xs text-muted">498</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="premium"
                        />
                        <label className="form-check-label" htmlFor="premium">
                          Premium
                        </label>
                      </div>
                      <span className="fs-xs text-muted">25</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="art"
                        />
                        <label className="form-check-label" htmlFor="art">
                          Art
                        </label>
                      </div>
                      <span className="fs-xs text-muted">112</span>
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
                          Photography
                        </label>
                      </div>
                      <span className="fs-xs text-muted">93</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="music"
                        />
                        <label className="form-check-label" htmlFor="music">
                          Music
                        </label>
                      </div>
                      <span className="fs-xs text-muted">48</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gaming"
                        />
                        <label className="form-check-label" htmlFor="gaming">
                          Gaming
                        </label>
                      </div>
                      <span className="fs-xs text-muted">82</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="sports"
                        />
                        <label className="form-check-label" htmlFor="sports">
                          Sports
                        </label>
                      </div>
                      <span className="fs-xs text-muted">51</span>
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
                          Collections
                        </label>
                      </div>
                      <span className="fs-xs text-muted">11</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="utility"
                        />
                        <label className="form-check-label" htmlFor="utility">
                          Utility
                        </label>
                      </div>
                      <span className="fs-xs text-muted">24</span>
                    </li>
                  </ul>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            {/* <!-- Sale Types-->*/}
            <Dropdown className="dropdown mb-lg-3 mb-2 me-lg-3 me-2">
              <Dropdown.Toggle
                id="purple"
                className="w-100"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sale Types
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu mt-lg-2 mt-1"
                style={{ minWidth: "260px" }}
              >
                <div className="widget px-3">
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
              </Dropdown.Menu>
            </Dropdown>

            {/* <!-- Price range-->*/}
            <Dropdown className="dropdown mb-lg-3 mb-2 me-lg-3 me-2">
              <Dropdown.Toggle
                id="purple"
                className="btn btn-outline-accent dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Price range
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu mt-lg-2 mt-1 p-3"
                style={{ minWidth: "260px" }}
              >
                <form>
                  <select className="form-select form-select-sm mb-3">
                    <option>ETH</option>
                    <option>BNB</option>
                    <option>BUSD</option>
                  </select>
                  <div className="d-flex align-items-center">
                    <div className="w-50">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="From"
                      />
                    </div>
                    <span className="d-inline-block mx-2">–</span>
                    <div className="w-50">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="To"
                      />
                    </div>
                  </div>
                </form>
              </Dropdown.Menu>
            </Dropdown>

            {/* <!-- Collections-->*/}
            <Dropdown className="dropdown mb-lg-3 mb-2 me-lg-3 me-2">
              <Dropdown.Toggle
                id="purple"
                className="btn btn-primary dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Collections
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu mt-lg-2 mt-1"
                style={{ minWidth: "260px" }}
              >
                <div className="widget px-3">
                  <ul className="widget-list list-unstyled">
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="contemporary-art-collage"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="contemporary-art-collage"
                        >
                          Contemporary art collage
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="3d-digital-abstract-art"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="3d-digital-abstract-art"
                        >
                          3D digital abstract art
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="clone-x-mini-monsters"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="clone-x-mini-monsters"
                        >
                          Clone X Mini Monsters
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="ocean-and-sky"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ocean-and-sky"
                        >
                          Ocean and sky
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="aesthetic-art-collage"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="aesthetic-art-collage"
                        >
                          Aesthetic art collage
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            {/* <!-- Creators-->*/}
            <Dropdown className="dropdown mb-lg-3 mb-2 me-lg-3 me-2">
              <Dropdown.Toggle
                id="purple"
                className="btn btn-outline-dark dropdown-toggle w-100 "
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Creators
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu mt-lg-2 mt-1"
                style={{ minWidth: "260px" }}
              >
                <div className="widget px-3">
                  <ul className="widget-list list-unstyled">
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="foxnet_creator"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="foxnet_creator"
                        >
                          @foxnet_creator
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="YunusKullebi"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="YunusKullebi"
                        >
                          @YunusKullebi
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="lulucollages"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="lulucollages"
                        >
                          @lulucollages
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="DistroKid"
                        />
                        <label className="form-check-label" htmlFor="DistroKid">
                          @DistroKid
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Sharan_Pagadala"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Sharan_Pagadala"
                        >
                          @Sharan_Pagadala
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Simonlee"
                        />
                        <label className="form-check-label" htmlFor="Simonlee">
                          @Simonlee
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Shubham_Dhage"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Shubham_Dhage"
                        >
                          @Shubham_Dhage
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* <!-- Total-->*/}
          <div className="mb-3 fs-sm text-muted">1240 results</div>
        </div>

        {/* <!-- Products grid-->*/}
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3 pt-lg-4 pt-2">
          {/* <!-- Product-->*/}
          <div className="col">
            <article>
              <div className="card mb-3">
                <div className="card-body p-3">
                  {/* <!-- Author-->*/}
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
                  {/* <!-- Collage-->*/}
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
              {/* <!-- Collection title-->*/}
              <h3 className="h5 mb-1">
                <Link className="nav-link-style" to="nft-catalog-v2.html">
                  Lagos, Nigeria
                </Link>
              </h3>
              <span className="fs-sm text-muted">$ 12180.95</span>
            </article>
          </div>
          {/* <!-- Collection item-->*/}
          <div className="col">
            <article>
              <div className="card mb-3">
                <div className="card-body p-3">
                  {/* <!-- Author-->*/}
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
                  {/* <!-- Collage-->*/}
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
                            src={Nft10}
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
              {/* <!-- Collection title-->*/}
              <h3 className="h5 mb-1">
                <Link className="nav-link-style" to="nft-catalog-v2.html">
                  Anambra, Nigeria
                </Link>
              </h3>
              <span className="fs-sm text-muted">$ 1520.18</span>
            </article>
          </div>
          {/* <!-- Collection item-->*/}
          <div className="col">
            <article>
              <div className="card mb-3">
                <div className="card-body p-3">
                  {/* <!-- Author-->*/}
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
                  {/* <!-- Collage-->*/}
                  <Link className="d-block" to="nft-catalog-v2.html">
                    <div className="row row-cols-2 g-2">
                      <div className="col">
                        <img
                          className="rounded-1"
                          src={Nft7}
                          alt="Collection item"
                        />
                      </div>
                      <div className="col">
                        <div className="mt-n2">
                          <img
                            className="rounded-1 mt-2"
                            src={Nft2}
                            alt="Collection item"
                          />
                          <img
                            className="rounded-1 mt-2"
                            src={Nft16}
                            alt="Collection item"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- Collection title-->*/}
              <h3 className="h5 mb-1">
                <Link className="nav-link-style" to="nft-catalog-v2.html">
                  Kano, Nigeria
                </Link>
              </h3>
              <span className="fs-sm text-muted">$ 1520.18</span>
            </article>
          </div>
          {/* <!-- Collection item-->*/}
          <div className="col">
            <article>
              <div className="card mb-3">
                <div className="card-body p-3">
                  {/* <!-- Author-->*/}
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
                  {/* <!-- Collage-->*/}
                  <Link className="d-block" to="nft-catalog-v2.html">
                    <div className="row row-cols-2 g-2">
                      <div className="col">
                        <img
                          className="rounded-1"
                          src={Nft15}
                          alt="Collection item"
                        />
                      </div>
                      <div className="col">
                        <div className="mt-n2">
                          <img
                            className="rounded-1 mt-2"
                            src={Nft14}
                            alt="Collection item"
                          />
                          <img
                            className="rounded-1 mt-2"
                            src={Nft13}
                            alt="Collection item"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- Collection title-->*/}
              <h3 className="h5 mb-1">
                <Link className="nav-link-style" to="nft-catalog-v2.html">
                  Benin, Nigeria
                </Link>
              </h3>
              <span className="fs-sm text-muted">$ 1520.18</span>
            </article>
          </div>
          {/* <!-- Collection item-->*/}
          <div className="col">
            <article>
              <div className="card mb-3">
                <div className="card-body p-3">
                  {/* <!-- Author-->*/}
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
                  {/* <!-- Collage-->*/}
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
                            src={Nft11}
                            alt="Collection item"
                          />
                          <img
                            className="rounded-1 mt-2"
                            src={Nft10}
                            alt="Collection item"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- Collection title-->*/}
              <h3 className="h5 mb-1">
                <Link className="nav-link-style" to="nft-catalog-v2.html">
                  Enugu, Nigeria
                </Link>
              </h3>
              <span className="fs-sm text-muted">$ 1520.18</span>
            </article>
          </div>
          {/* <!-- Collection item-->*/}
          <div className="col">
            <article>
              <div className="card mb-3">
                <div className="card-body p-3">
                  {/* <!-- Author-->*/}
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
                  {/* <!-- Collage-->*/}
                  <Link className="d-block" to="nft-catalog-v2.html">
                    <div className="row row-cols-2 g-2">
                      <div className="col">
                        <img
                          className="rounded-1"
                          src={Nft9}
                          alt="Collection item"
                        />
                      </div>
                      <div className="col">
                        <div className="mt-n2">
                          <img
                            className="rounded-1 mt-2"
                            src={Nft8}
                            alt="Collection item"
                          />
                          <img
                            className="rounded-1 mt-2"
                            src={Nft7}
                            alt="Collection item"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- Collection title-->*/}
              <h3 className="h5 mb-1">
                <Link className="nav-link-style" to="nft-catalog-v2.html">
                  Imo, Nigeria
                </Link>
              </h3>
              <span className="fs-sm text-muted">$ 1520.18</span>
            </article>
          </div>
          {/* <!-- Collection item-->*/}
          <div className="col">
            <article>
              <div className="card mb-3">
                <div className="card-body p-3">
                  {/* <!-- Author-->*/}
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
                  {/* <!-- Collage-->*/}
                  <Link className="d-block" to="nft-catalog-v2.html">
                    <div className="row row-cols-2 g-2">
                      <div className="col">
                        <img
                          className="rounded-1"
                          src={Nft6}
                          alt="Collection item"
                        />
                      </div>
                      <div className="col">
                        <div className="mt-n2">
                          <img
                            className="rounded-1 mt-2"
                            src={Nft5}
                            alt="Collection item"
                          />
                          <img
                            className="rounded-1 mt-2"
                            src={Nft4}
                            alt="Collection item"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- Collection title-->*/}
              <h3 className="h5 mb-1">
                <Link className="nav-link-style" to="nft-catalog-v2.html">
                  Kaduna, Nigeria
                </Link>
              </h3>
              <span className="fs-sm text-muted">$ 1520.18</span>
            </article>
          </div>
          {/* <!-- Collection item-->*/}
          <div className="col">
            <article>
              <div className="card mb-3">
                <div className="card-body p-3">
                  {/* <!-- Author-->*/}
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
                  {/* <!-- Collage-->*/}
                  <Link className="d-block" to="nft-catalog-v2.html">
                    <div className="row row-cols-2 g-2">
                      <div className="col">
                        <img
                          className="rounded-1"
                          src={Nft3}
                          alt="Collection item"
                        />
                      </div>
                      <div className="col">
                        <div className="mt-n2">
                          <img
                            className="rounded-1 mt-2"
                            src={Nft2}
                            alt="Collection item"
                          />
                          <img
                            className="rounded-1 mt-2"
                            src={Nft1}
                            alt="Collection item"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <!-- Collection title-->*/}
              <h3 className="h5 mb-1">
                <Link className="nav-link-style" to="nft-catalog-v2.html">
                  Ekiti, Nigeria
                </Link>
              </h3>
              <span className="fs-sm text-muted">$ 1520.18</span>
            </article>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        {/* <!-- Pagination-->*/}
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

export default CollectionsBody;
