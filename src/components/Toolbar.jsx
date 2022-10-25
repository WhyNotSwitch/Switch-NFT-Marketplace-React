import React from "react";

function ToolBar() {
  return (
    <div className="bg-light shadow-lg rounded-3 p-4 mt-n5 mb-4">
      <div className="row gy-3 gx-4 justify-content-between">
        <div className="col-lg-2 col-md-3 col-sm-5 col-12 order-md-1 order-sm-2 order-3">
          <div className="dropdown">
            <a
              className="btn btn-outline-secondary dropdown-toggle w-100"
              href="#shop-filters"
              data-bs-toggle="collapse"
            >
              <i className="ci-filter me-2"></i>Filters
            </a>
          </div>
        </div>
        <div className="col-md col-12 order-md-2 order-sm-1 order-1">
          <div className="input-group">
            <input
              className="form-control pe-5 rounded"
              type="text"
              placeholder="Search collection, title or user..."
            />
            <i className="ci-search position-absolute top-50 end-0 translate-middle-y zindex-5 me-3"></i>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-7 col-12 order-md-3 order-sm-3 order-2">
          <div className="d-flex align-items-center flex-shrink-0">
            <label className="form-label mb-0 me-2 pe-1 fw-normal text-nowrap d-sm-block d-none">
              Sort by:
            </label>
            <select className="form-select">
              <option value="selected">Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
      </div>
      {/* <!-- Toolbar with expandable filters--> */}
      <div className="collapse" id="shop-filters">
        <div className="row g-4 pt-4">
          <div className="col-lg-4 col-sm-6">
            {/* <!-- Categories--> */}
            <div className="card">
              <div className="card-body px-4">
                <div className="widget">
                  <h3 className="widget-title mb-2 pb-1">Project Locations</h3>
                  <ul className="widget-list list-unstyled">
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="all"
                        />
                        <label className="form-check-label" htmlFor="all">
                          Enugu, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">10</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="premium"
                        />
                        <label className="form-check-label" htmlFor="premium">
                          Anambra, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">5</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="art"
                        />
                        <label className="form-check-label" htmlFor="art">
                          Lagos, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">12</span>
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
                          Ebony, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">3</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="music"
                        />
                        <label className="form-check-label" htmlFor="music">
                          Jos, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">8</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gaming"
                        />
                        <label className="form-check-label" htmlFor="gaming">
                          Kaduna, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">2</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="sports"
                        />
                        <label className="form-check-label" htmlFor="sports">
                          Abuja, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">9</span>
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
                          Kogi, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">4</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="utility"
                        />
                        <label className="form-check-label" htmlFor="utility">
                          Ekiti, Nigeria
                        </label>
                      </div>
                      <span className="fs-xs text-muted">3</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* <!-- Sale Types--> */}
            <div className="card mb-4">
              <div className="card-body px-4">
                <div className="widget">
                  <h3 className="widget-title mb-2 pb-1">Sale Types</h3>
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
              </div>
            </div>
            {/* <!-- Blockchain--> */}
            <div className="card">
              <div className="card-body px-4">
                <div className="widget">
                  <h3 className="widget-title mb-2 pb-1">Blockchain</h3>
                  <ul className="widget-list list-unstyled">
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="eth"
                        />
                        <label className="form-check-label" htmlFor="eth">
                          ETH
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="bnb"
                        />
                        <label className="form-check-label" htmlFor="bnb">
                          BNB
                        </label>
                      </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center mb-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="busd"
                        />
                        <label className="form-check-label" htmlFor="busd">
                          BUSD
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* <!-- Price range--> */}
            <div className="card">
              <div className="card-body px-4">
                <div className="widget">
                  <h3 className="widget-title">Price range</h3>
                  <div
                    className="range-slider"
                    data-start-min="10"
                    data-start-max="20"
                    data-min="0"
                    data-max="30"
                    data-step="1"
                    data-currency="ETH "
                  >
                    <div className="range-slider-ui"></div>
                    <div className="d-flex pb-1">
                      <div className="w-50 pe-2 me-2">
                        <div className="input-group input-group-sm">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                          >
                            ETH
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              BNB
                            </a>
                            <a className="dropdown-item" href="#">
                              BUSD
                            </a>
                          </div>
                          <input
                            className="form-control range-slider-value-min"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="w-50 ps-2">
                        <div className="input-group input-group-sm">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                          >
                            ETH
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              BNB
                            </a>
                            <a className="dropdown-item" href="#">
                              BUSD
                            </a>
                          </div>
                          <input
                            className="form-control range-slider-value-max"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
