import Button from "./Button";
import { Link } from "react-router-dom";
import BaseUrl from "./BaseUrl";

function MyCard(props) {
  return (
    <div className={props.className}>
      <article className={props.artClass}>
        <div className="card-img-top position-relative overflow-hidden">
          <Link className="d-block" to={`${BaseUrl}/marketplace/single-buy`}>
            <img src={props.img} alt="Product" />
          </Link>
          {/* <!-- Wishlist button--> */}
          <Button
            className="btn-wishlist btn-sm position-absolute top-0 end-0"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Add to Favorites"
            style={{ margin: "12px" }}
          >
            <i className="ci-heart"></i>
          </Button>
        </div>
        <div className="card-body">
          <h3 className="product-title mb-2 fs-base">
            <Link
              className="d-block text-truncate"
              to={`${BaseUrl}/marketplace/single-buy`}
            >
              {`Switch Project ${props.id}`}
            </Link>
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
              src={props.lg}
              width="32"
              alt="Avatar"
            />
            <Link
              className="nav-link-style fs-sm stretched-link"
              to={`${BaseUrl}/project-developer`}
            >
              @Switch Electric
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MyCard;
