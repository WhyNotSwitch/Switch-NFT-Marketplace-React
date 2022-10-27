import React from "react";

function MetaData() {
  return (
    <ul className="list-unstyled row row-cols-sm-2 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
      <div className="col">
        <li className="d-flex pb-3 border-bottom">
          <i className="ci-battery fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Capacity:</span>
            <a to="#" className="d-block text-heading fs-sm">
              15kWp solar + 13.5kWh storage
            </a>
          </div>
        </li>
        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-sun fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Peak Sunlight Hours:</span>
            <a to="#" className="d-block text-heading fs-sm">
              8
            </a>
          </div>
        </li>

        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-target fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Solar Irradiance:</span>
            <a to="#" className="d-block text-heading fs-sm">
              4.5 kW/m²/day
            </a>
          </div>
        </li>

        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-key fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Commissioned On:</span>
            <a to="#" className="d-block text-heading fs-sm">
              15 - 04 - 2022
            </a>
          </div>
        </li>
      </div>
      <div className="col">
        <li className="d-flex pt-xs-2 pb-3 border-bottom">
          <i className="ci-dollar fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Total Revenue:</span>
            <a to="#" className="d-block text-heading fs-sm">
              74250.15 IOTX
            </a>
          </div>
        </li>

        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-idea fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Solar:</span>
            <a to="#" className="d-block text-heading fs-sm">
              15kWh, Felicity solar
            </a>
          </div>
        </li>

        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-server-alt fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Storage:</span>
            <a to="#" className="d-block text-heading fs-sm">
              3.5kWh, Tesla powerwall
            </a>
          </div>
        </li>
        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-star-filled fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Rating:</span>
            <a to="#" className="d-block text-heading fs-sm">
              🌕🌕🌕🌗🌑
            </a>
          </div>
        </li>
      </div>
    </ul>
  );
}

export default MetaData;
