import { Link } from "react-router-dom";

function Provenance() {
  return (
    <div className="" id="provenance" role="tabpanel">
      <ul className="list-unstyled mb-4">
        {/* <!-- Provenance item--> */}
        <li className="position-relative mb-0 ps-4 pb-4 border-start">
          <span
            className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
            style={{ transform: "translateX(-50%)" }}
          ></span>
          <h6 className="mb-1 fs-sm">
            Listed by
            <Link
              to="/project-developer"
              className="text-decoration-none text-accent"
            >
              @distrokid
            </Link>
          </h6>
          <span className="fs-sm text-muted">Oct 3 at 9:36 am</span>
        </li>
        {/* <!-- Provenance item--> */}
        <li className="position-relative mb-0 ps-4 pb-4 border-start">
          <span
            className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
            style={{ transform: "translateX(-50%)" }}
          ></span>
          <h6 className="mb-1 fs-sm">
            Purchased by{" "}
            <Link
              to="/project-developer"
              className="text-decoration-none text-accent"
            >
              @distrokid
            </Link>
          </h6>
          <span className="fs-sm text-muted">Sept 15 at 11:20 am</span>
        </li>
        {/* <!-- Provenance item--> */}
        <li className="position-relative mb-0 ps-4 pb-4 border-start">
          <span
            className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
            style={{ transform: "translateX(-50%)" }}
          ></span>
          <h6 className="mb-1 fs-sm">
            Listed by{" "}
            <Link
              to="/project-developer"
              className="text-decoration-none text-accent"
            >
              @Switch Electric
            </Link>
          </h6>
          <span className="fs-sm text-muted">Aug 29 at 6:29 pm</span>
        </li>
        {/* <!-- Provenance item--> */}
        <li className="position-relative mb-0 ps-4 border-start">
          <span
            className="d-inline-block position-absolute start-0 top-0 mt-1 p-1 bg-primary rounded-circle"
            style={{ transform: "translateX(-50%)" }}
          ></span>
          <h6 className="mb-1 fs-sm">
            Minted by{" "}
            <Link
              to="/project-developer"
              className="text-decoration-none text-accent"
            >
              @Switch Electric
            </Link>
          </h6>
          <span className="fs-sm text-muted">Aug 29 at 3:41 pm</span>
        </li>
      </ul>
      <button className="btn btn-outline-accent d-block w-100">
        <i className="ci-loading me-2"></i>Load more
      </button>
    </div>
  );
}

export default Provenance;
