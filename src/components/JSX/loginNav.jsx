import React from "react";

function LoginNav() {
  return (
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
                    <input className="password-toggle-check" type="checkbox" />
                    <span className="password-toggle-indicator"></span>
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
                    <input className="password-toggle-check" type="checkbox" />
                    <span className="password-toggle-indicator"></span>{" "}
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
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
                    <input className="password-toggle-check" type="checkbox" />
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
  );
}

export default LoginNav;
