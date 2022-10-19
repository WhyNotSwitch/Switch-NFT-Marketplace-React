import "./theme.min.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer bg-darker">
      <div className="mt-n10 pt-10 bg-dark">
        <div className="container py-5">
          <div className="row py-lg-4">
            <div className="col-lg-4 mb-lg-0 mb-4">
              <div className="widget pb-3 mb-lg-4">
                <h3 className="widget-title text-light pb-1">Stay informed</h3>
                <form
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
                    <button
                      className="btn btn-accent"
                      type="submit"
                      name="suscribe"
                    >
                      Subscribe*
                    </button>
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
                      <a className="widget-list-link" href="#list">
                        About Us
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        How It Works
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Transform Projects into NFTs
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Support
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Blog
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        My Account
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                  <h3 className="widget-title text-light">Project Locations</h3>
                  <ul className="widget-list">
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Enugu, Nigeria
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Anambra, Nigeria
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Lagos, Nigeria
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Abuja, Nigeria
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Imo, Nigeria
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Kaduna, Nigeria
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                  <h3 className="widget-title text-light">Help</h3>
                  <ul className="widget-list">
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Terms and Conditions
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="widget-list-item">
                      <a className="widget-list-link" href="#widget-list">
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
      <div className="bg-darker">
        <div className="container my-lg-4 my-3 py-2 ">
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
      </div>
    </footer>
  );
}

export default Footer;
