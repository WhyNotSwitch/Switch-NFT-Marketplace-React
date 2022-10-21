import React from "react";

function MyCard() {
  return (
    <div className="col py-3">
      <article className="card h-100 border-0 shadow">
        <div className="card-img-top position-relative overflow-hidden">
          <a className="d-block" href="nft-single-buy.html">
            <img src="n6.jpg" alt="Product image" />
          </a>
          {/* <!-- Wishlist button--> */}
        </div>
        <div className="card-body">
          <h3 className="product-title mb-2 fs-base">
            <a
              className="d-block text-truncate"
              href="nft-single-auction-live.html"
            >
              Switch Project 6
            </a>
          </h3>
          <span className="fs-sm text-muted">Reserve price:</span>
          <div className="d-flex align-items-center flex-wrap">
            <h4 className="mt-1 mb-0 fs-base text-darker">0.6 ETH</h4>
            <span className="mt-1 ms-1 fs-xs text-muted">(≈ $ 2,400.65)</span>
          </div>
        </div>
        <div className="card-footer mt-n1 py-0 border-0">
          <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
            <img
              className="me-2 rounded-circle"
              src="img/Switch/switch.jpg"
              width="32"
              alt="Avatar"
            />
            <a
              className="nav-link-style fs-sm stretched-link"
              href="projectDeveloper.html"
            >
              @Switch Electric
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MyCard;

// <button
// className="btn-wishlist btn-sm position-absolute top-0 end-0"
// type="button"
// data-bs-toggle="tooltip"
// data-bs-placement="left"
// title="Add to Favorites"
// style="margin: 12px"
// >
// <i className="ci-heart"></i>
// </button>
