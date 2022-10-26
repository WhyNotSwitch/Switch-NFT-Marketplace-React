import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside className="col-lg-3 pe-xl-5">
      {/* <!-- Account menu toggler (hidden on screens larger 992px)--> */}
      <div className="d-block d-lg-none p-4">
        <a
          className="btn btn-outline-accent d-block"
          href="#account-menu"
          data-bs-toggle="collapse"
        >
          <i className="ci-menu me-2"></i>Account menu
        </a>
      </div>
      {/* <!-- Actual menu--> */}
      <div className="h-100 border-end mb-2">
        <div className="d-lg-block collapse" id="account-menu">
          <ul className="list-unstyled mb-0">
            <li className="border-bottom mb-0">
              <Link
                className="nav-link-style d-flex align-items-center px-4 py-3"
                to="/account-settings"
              >
                <i className="ci-settings opacity-60 me-2"></i>Profile Settings
              </Link>
            </li>
            <li className="border-bottom mb-0">
              <Link
                className="nav-link-style d-flex align-items-center px-4 py-3"
                to="/my-items"
              >
                <i className="ci-image opacity-60 me-2"></i>My Items
                <span className="fs-sm text-muted ms-auto">5</span>
              </Link>
            </li>
            <li className="border-bottom mb-0">
              <Link
                className="nav-link-style d-flex align-items-center px-4 py-3"
                to="/my-collections"
              >
                <i className="ci-view-list opacity-60 me-2"></i>My Collections
                <span className="fs-sm text-muted ms-auto">2</span>
              </Link>
            </li>
            <li className="border-bottom mb-0">
              <Link
                className="nav-link-style d-flex align-items-center px-4 py-3"
                to="/favorites"
              >
                <i className="ci-heart opacity-60 me-2"></i>Favorites
                <span className="fs-sm text-muted ms-auto">3</span>
              </Link>
            </li>
            <li className="border-bottom mb-0">
              <Link
                className="nav-link-style d-flex align-items-center px-4 py-3"
                to="/notifications"
              >
                <i className="ci-bell opacity-60 me-2"></i>Notifications
              </Link>
            </li>
            <li className="border-bottom mb-0">
              <Link
                className="nav-link-style d-flex align-items-center px-4 py-3"
                to="/signout"
              >
                <i className="ci-sign-out opacity-60 me-2"></i>Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
