import React from "react";
import "../CSS/styles.css";
import Avatar from "../img/nft/vendor/avatar.png";

function PageTitle() {
  return (
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
          <a className="text-light" href="#empty">
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
  );
}

export default PageTitle;
