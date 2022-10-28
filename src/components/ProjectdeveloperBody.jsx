import React from "react";
import { useState } from "react";
import SwitchLg from "./img/Switch/switch.jpg";
import Avatar from "./img/nft/vendor/avatar.png";
import { Link } from "react-router-dom";
import Created from "./Created";
import DevCollections from "./DevCollections";
import Liked from "./Liked";
import Activity from "./Activity";

function ProjectdeveloperBody() {
  const [activeTab, setActiveTab] = useState("created");
  const theTab = function () {
    if (activeTab === "created") return <Created />;
    else if (activeTab === "devcollections") return <DevCollections />;
    else if (activeTab === "liked") return <Liked />;
    else if (activeTab === "activity") return <Activity />;
  };
  function handleClick1() {
    setActiveTab("created");
  }
  function handleClick2() {
    setActiveTab("devcollections");
  }
  function handleClick3() {
    setActiveTab("liked");
  }
  function handleClick4() {
    setActiveTab("activity");
  }
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
                      onClick={handleClick1}
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
                      onClick={handleClick2}
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
                      onClick={handleClick3}
                      data-bs-toggle="tab"
                      role="tab"
                    >
                      Liked <span className="opacity-60">(3)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={handleClick4}
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
            <div className="tab-content">{theTab()}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectdeveloperBody;
