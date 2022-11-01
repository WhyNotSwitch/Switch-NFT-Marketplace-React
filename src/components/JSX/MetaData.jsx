import React from "react";

function MetaData() {
  return (
    <ul className="list-unstyled row row-cols-sm-2 row-cols-1 gy-3 gx-4 mb-4 pb-md-2">
      <div className="col">
        <li className="d-flex pb-3 border-bottom">
          <i className="ci-battery fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Capacity:</span>
            <span className="d-block text-heading fs-sm">
              15kWp solar + 13.5kWh storage
            </span>
          </div>
        </li>
        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-sun fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Peak Sunlight Hours:</span>
            <span className="d-block text-heading fs-sm">8</span>
          </div>
        </li>

        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-target fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Solar Irradiance:</span>
            <span className="d-block text-heading fs-sm">4.5 kW/m²/day</span>
          </div>
        </li>

        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-key fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Commissioned On:</span>
            <span className="d-block text-heading fs-sm">15 - 04 - 2022</span>
          </div>
        </li>
      </div>
      <div className="col">
        <li className="d-flex pt-xs-2 pb-3 border-bottom">
          <i className="ci-dollar fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Total Revenue:</span>
            <span className="d-block text-heading fs-sm">74250.15 IOTX</span>
          </div>
        </li>

        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-idea fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Solar:</span>
            <span className="d-block text-heading fs-sm">
              15kWh, Felicity solar
            </span>
          </div>
        </li>

        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-server-alt fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Storage:</span>
            <span className="d-block text-heading fs-sm">
              3.5kWh, Tesla powerwall
            </span>
          </div>
        </li>
        <li className="d-flex pt-2 pb-3 border-bottom">
          <i className="ci-star-filled fs-lg mt-2 mb-0 text-primary"></i>
          <div className="ps-3">
            <span className="fs-ms text-muted">Rating:</span>
            <span className="d-block text-heading fs-sm">🌕🌕🌕🌗🌑</span>
          </div>
        </li>
      </div>
    </ul>
  );
}

export default MetaData;
