import React from "react";
import { Link } from "react-router-dom";
import Nft1 from "./img/Switch/n1.jpg";
import Nft2 from "./img/Switch/n2.jpg";
import Nft3 from "./img/Switch/n3.jpg";
import Nft4 from "./img/Switch/n4.jpg";
import Nft5 from "./img/Switch/n5.jpg";
import Nft6 from "./img/Switch/n6.jpg";

function Activity() {
  return (
    <div className="" id="activity" role="tabpanel">
      {/* <!-- Orders list--> */}
      <div className="table-responsive fs-md mb-4 pb-1">
        <table className="table mb-0" style={{ minWidth: "880px" }}>
          <thead className="text-uppercase bg-secondary">
            <tr>
              <th>Item</th>
              <th>Type</th>
              <th>Price</th>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4">
                <div className="d-flex align-items-center position-relative">
                  <img
                    className="rounded me-2"
                    src={Nft4}
                    width="48"
                    alt="Product thumbnail"
                  />
                  <div className="ps-1">
                    <h6 className="mb-0 fs-base text-body">
                      <Link
                        className="nav-link-style d-block stretched-link"
                        to="#"
                      >
                        Switch Project 4
                      </Link>
                    </h6>
                    <span className="fs-sm text-muted">by @freeross</span>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className="badge bg-success">Sales</span>
              </td>
              <td className="py-4">
                <h6 className="mb-1 fs-sm text-darker">0.1 ETH</h6>
                <span className="fs-sm text-muted">(≈ $ 400.19)</span>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @freeross
                </Link>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @Switch Electric
                </Link>
              </td>
              <td className="py-4">
                <span className="fs-sm text-muted">4 hours ago</span>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <div className="d-flex align-items-center position-relative">
                  <img
                    className="rounded me-2"
                    src={Nft5}
                    width="48"
                    alt="Product thumbnail"
                  />
                  <div className="ps-1">
                    <h6 className="mb-0 fs-base text-body">
                      <Link
                        className="nav-link-style d-block stretched-link"
                        to="#"
                      >
                        Switch Project 5
                      </Link>
                    </h6>
                    <span className="fs-sm text-muted">
                      by @Switch Electric
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className="badge bg-info">Listings</span>
              </td>
              <td className="py-4">
                <h6 className="mb-1 fs-sm text-darker">0.4 ETH</h6>
                <span className="fs-sm text-muted">(≈ $ 649.82)</span>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @Switch Electric
                </Link>
              </td>
              <td className="py-4">—</td>
              <td className="py-4">
                <span className="fs-sm text-muted">1 day ago</span>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <div className="d-flex align-items-center position-relative">
                  <img
                    className="rounded me-2"
                    src={Nft6}
                    width="48"
                    alt="Product thumbnail"
                  />
                  <div className="ps-1">
                    <h6 className="mb-0 fs-base text-body">
                      <Link
                        className="nav-link-style d-block stretched-link"
                        to="#"
                      >
                        Switch Project 6
                      </Link>
                    </h6>
                    <span className="fs-sm text-muted">by @lulucollages</span>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className="badge bg-danger">Bids</span>
              </td>
              <td className="py-4">
                <h6 className="mb-1 fs-sm text-darker">0.25 ETH</h6>
                <span className="fs-sm text-muted">(≈ $ 493.24)</span>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @Switch Electric
                </Link>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @lulucollages
                </Link>
              </td>
              <td className="py-4">
                <span className="fs-sm text-muted">
                  Dec 22 <br />
                  at 3:41 pm
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <div className="d-flex align-items-center position-relative">
                  <img
                    className="rounded me-2"
                    src={Nft3}
                    width="48"
                    alt="Product thumbnail"
                  />
                  <div className="ps-1">
                    <h6 className="mb-0 fs-base text-body">
                      <Link
                        className="nav-link-style d-block stretched-link"
                        to="#"
                      >
                        Switch Project 3
                      </Link>
                    </h6>
                    <span className="fs-sm text-muted">by @YunusKullebi</span>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className="badge bg-danger">Bids</span>
              </td>
              <td className="py-4">
                <h6 className="mb-1 fs-sm text-darker">0.1 ETH</h6>
                <span className="fs-sm text-muted">(≈ $ 400.19)</span>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @Switch Electric
                </Link>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @unusKullebi
                </Link>
              </td>
              <td className="py-4">
                <span className="fs-sm text-muted">
                  Nov 15 <br />
                  at 11:20 am
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <div className="d-flex align-items-center position-relative">
                  <img
                    className="rounded me-2"
                    src={Nft2}
                    width="48"
                    alt="Product thumbnail"
                  />
                  <div className="ps-1">
                    <h6 className="mb-0 fs-base text-body">
                      <Link
                        className="nav-link-style d-block stretched-link"
                        to="#"
                      >
                        Switch Project 2
                      </Link>
                    </h6>
                    <span className="fs-sm text-muted">
                      by @Switch Electric
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className="badge bg-warning">Transfers</span>
              </td>
              <td className="py-4">
                <h6 className="mb-1 fs-sm text-darker">—</h6>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @Switch Electric
                </Link>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @DistroKid
                </Link>
              </td>
              <td className="py-4">
                <span className="fs-sm text-muted">
                  Nov 4 <br />
                  at 5:16 pm
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <div className="d-flex align-items-center position-relative">
                  <img
                    className="rounded me-2"
                    src={Nft1}
                    width="48"
                    alt="Product thumbnail"
                  />
                  <div className="ps-1">
                    <h6 className="mb-0 fs-base text-body">
                      <Link
                        className="nav-link-style d-block stretched-link"
                        to="#"
                      >
                        Switch Project 1
                      </Link>
                    </h6>
                    <span className="fs-sm text-muted">by @MihailGreen</span>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className="badge bg-success">Sales</span>
              </td>
              <td className="py-4">
                <h6 className="mb-1 fs-sm text-darker">2.8 ETH</h6>
                <span className="fs-sm text-muted">(≈ $ 1360.75)</span>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @MihailGreen
                </Link>
              </td>
              <td className="py-4">
                <Link className="nav-link-style fw-medium" to="#">
                  @Switch Electric
                </Link>
              </td>
              <td className="py-4">
                <span className="fs-sm text-muted">
                  Oct 29 <br />
                  at 6:29 pm
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-outline-accent d-block w-100">
        <i className="ci-reload me-2"></i>Load more
      </button>
    </div>
  );
}

export default Activity;
