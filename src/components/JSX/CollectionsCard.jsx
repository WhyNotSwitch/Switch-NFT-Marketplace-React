import { Link } from "react-router-dom";
import BaseUrl from "../Common/BaseUrl";

function CollectionsCard(props) {
  return (
    <div className="col">
      <article>
        <div className="card mb-3">
          <div className="card-body p-3">
            {/* <!-- Author-->*/}
            <div className="d-flex align-items-center position-relative mb-3">
              <img
                className="rounded-circle me-2"
                src={props.ThmbNl}
                width="32"
                alt="Avatar"
              />
              <div className="fs-sm">
                by
                <Link
                  className="ms-1 fw-medium text-accent stretched-link"
                  to={`${BaseUrl}/project-developer`}
                >
                  @Developer's name
                </Link>
              </div>
            </div>
            {/* <!-- Collage-->*/}
            <Link className="d-block" to="nft-catalog-v2.html">
              <div className="row row-cols-2 g-2">
                <div className="col">
                  <img
                    className="rounded-1"
                    src={props.img}
                    alt="Collection item"
                  />
                </div>
                <div className="col">
                  <div className="mt-n2">
                    <img
                      className="rounded-1 mt-2"
                      src={props.img}
                      alt="Collection item"
                    />
                    <img
                      className="rounded-1 mt-2"
                      src={props.img}
                      alt="Collection item"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* <!-- Collection title-->*/}
        <h3 className="h5 mb-1">
          <Link className="nav-link-style" to="nft-catalog-v2.html">
            {`${props.Area}, Nigeria`}
          </Link>
        </h3>
        <span className="fs-sm text-muted">$ 12180.95</span>
      </article>
    </div>
  );
}

export default CollectionsCard;
