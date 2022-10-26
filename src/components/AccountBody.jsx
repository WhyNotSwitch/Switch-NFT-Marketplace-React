import React from "react";
import Avatar from "./img/nft/vendor/avatar.png";
import SquareAvatar from "./img/nft/vendor/avatar-square.jpg";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function AccountBody() {
  return (
    <div id="account">
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
                <h1 className="h3 mb-4 pt-2 text-center text-sm-start">
                  Profile Settings
                </h1>
                <div className="bg-secondary rounded-3 p-4 mb-4 text-center text-sm-start">
                  <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center">
                    <img
                      className="rounded mb-sm-0 mb-3"
                      src={SquareAvatar}
                      width="90"
                      alt="Createx Studio"
                    />
                    <div className="ms-n2 ps-sm-4">
                      <button
                        className="btn btn-outline-accent mb-2 ms-2"
                        type="button"
                      >
                        <i className="ci-loading me-2"></i>Change{" "}
                        <span className="d-none d-sm-inline">avatar</span>
                      </button>
                      <button
                        className="btn btn-outline-danger mb-2 ms-2"
                        type="button"
                      >
                        <i className="ci-trash me-2"></i>Delete
                      </button>
                      <div className="pt-1 mb-0 fs-sm text-muted">
                        We recommend an image of at least 400x400. Gifs work too
                        :)
                      </div>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="row gy-3 mb-4 pb-md-3 mb-2">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-name">
                        Full name
                      </label>
                      <input
                        className="form-control"
                        id="profile-name"
                        type="text"
                        value="Robert Fox"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-username">
                        Username
                      </label>
                      <input
                        className="form-control"
                        id="profile-username"
                        type="text"
                        placeholder="@enter_name"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-uid">
                        UID
                      </label>
                      <input
                        className="form-control"
                        id="profile-uid"
                        type="text"
                        value="374702749"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="profile-email"
                        type="email"
                        value="example@gmail.com"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="profile-bio">
                        Short bio
                      </label>
                      <textarea
                        className="form-control"
                        id="profile-bio"
                        rows="4"
                        placeholder="Tell about yourself in few words"
                      ></textarea>
                      <span className="form-text">
                        0 of 500 characters used.
                      </span>
                    </div>
                  </div>
                  <h3 className="h5 mb-3">Social media profiles</h3>
                  <div className="row gy-3 mb-4 pb-2">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-website">
                        Website
                      </label>
                      <input
                        className="form-control"
                        id="profile-website"
                        type="url"
                        placeholder="Enter URL"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-twitter">
                        Twitter
                      </label>
                      <input
                        className="form-control"
                        id="profile-twitter"
                        type="url"
                        placeholder="Enter URL"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-facebook">
                        Facebook
                      </label>
                      <input
                        className="form-control"
                        id="profile-facebook"
                        type="url"
                        placeholder="Enter URL"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-instagram">
                        Instagram
                      </label>
                      <input
                        className="form-control"
                        id="profile-instagram"
                        type="url"
                        placeholder="Enter URL"
                      />
                    </div>
                    <div className="col-12">
                      <a href="#">
                        <i className="ci-add me-2"></i>
                        <ins>Add more</ins>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Submit--> */}
                  <div className="d-flex flex-sm-row flex-column">
                    <button className="btn btn-accent" type="submit">
                      Update profile
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountBody;
