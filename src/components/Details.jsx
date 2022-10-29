import React from "react";

function Details() {
  return (
    <div className="" id="details" role="tabpanel">
      <ul className="list-unstyled mb-0">
        <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
          <span>Contract Address</span>
          <div>
            <a className="text-decoration-none" to="#empty">
              <span className="fw-medium text-body">0x1dDB2C08s97...9Ec</span>
              <i className="ci-external-link ms-3 text-accent"></i>
            </a>
          </div>
        </li>
        <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
          <span>Token ID</span>
          <div>
            <a className="text-decoration-none" to="#empty">
              <span className="text-body">8508550793340827...</span>
              <i className="ci-copy ms-3 text-accent"></i>
            </a>
          </div>
        </li>
        <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
          <span>Token Standard</span>
          <div>
            <span className="text-body">ERC-1155</span>
          </div>
        </li>
        <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
          <span>Blockchain</span>
          <div>
            <span className="text-body">Ethereum</span>
          </div>
        </li>
        <li className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-2 fs-sm">
          <span>Metadata</span>
          <div>
            <span className="text-body">Editable</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Details;
