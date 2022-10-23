import React from "react";

function HandheldToolbar() {
  return (
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
  );
}

export default HandheldToolbar;
