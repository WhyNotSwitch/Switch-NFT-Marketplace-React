import React from "react";
import "./styles.css";
import Button from "./Button";

function Footer(props) {
  return (
    <div className="footer">
      <footer className="footer bg-darker" id="footer">
        <div className={props.className}>
          <div className="container py-5">
            <div className="row py-lg-4">
              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="widget pb-0 mb-lg-4">
                  <h3 className="widget-title text-light pb-1">
                    Stay informed
                  </h3>
                  <form
                    rel="noreferrer"
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
                  <div className="widget widget-links widget-light mt-4 px-lg-0 px-sm-n2">
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
    </div>
  );
}

export default Footer;
