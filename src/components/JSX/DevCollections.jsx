import React from "react";
import Nft11 from "../img/Switch/n11.jpg";
import Nft12 from "../img/Switch/n12.jpg";
import Nft9 from "../img/Switch/n9.jpg";
import ThmbNl1 from "../img/nft/thumbnails/01.png";
import Nft13 from "../img/Switch/n13.jpg";
import Nft14 from "../img/Switch/n14.jpg";
import ThmbNl3 from "../img/nft/thumbnails/03.png";
import { Link } from "react-router-dom";
import BaseUrl from "../Common/BaseUrl";

function DevCollections() {
  return (
    <div className="" id="collections" role="tabpanel">
      {/* <!-- Collections grid--> */}
      <div className="row row-cols-md-2 row-cols-1 g-4">
        {/* <!-- Collection item--> */}
        <div className="col">
          <article>
            <div className="card mb-3">
              <div className="card-body p-3">
                {/* <!-- Author--> */}
                <div className="d-flex align-items-center position-relative mb-3">
                  <img
                    className="rounded-circle me-2"
                    src={ThmbNl1}
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
                {/* <!-- Collage--> */}
                <Link className="d-block" to="nft-catalog-v2.html">
                  <div className="row row-cols-2 g-2">
                    <div className="col">
                      <img
                        className="rounded-1"
                        src={Nft12}
                        alt="Collection item"
                      />
                    </div>
                    <div className="col">
                      <div className="mt-n2">
                        <img
                          className="rounded-1 mt-2"
                          src={Nft13}
                          alt="Collection item"
                        />
                        <img
                          className="rounded-1 mt-2"
                          src={Nft14}
                          alt="Collection item"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* <!-- Collection title--> */}
            <h3 className="h5 mb-1">
              <Link className="nav-link-style" to="nft-catalog-v2.html">
                Lagos, Nigeria
              </Link>
            </h3>
            <span className="fs-sm text-muted">$ 12180.95</span>
          </article>
        </div>
        {/* <!-- Collection item--> */}
        <div className="col">
          <article>
            <div className="card mb-3">
              <div className="card-body p-3">
                {/* <!-- Author--> */}
                <div className="d-flex align-items-center position-relative mb-3">
                  <img
                    className="rounded-circle me-2"
                    src={ThmbNl3}
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
                {/* <!-- Collage--> */}
                <Link className="d-block" to="nft-catalog-v2.html">
                  <div className="row row-cols-2 g-2">
                    <div className="col">
                      <img
                        className="rounded-1"
                        src={Nft11}
                        alt="Collection item"
                      />
                    </div>
                    <div className="col">
                      <div className="mt-n2">
                        <img
                          className="rounded-1 mt-2"
                          src="././img/Switch/n10.jpg"
                          alt="Collection item"
                        />
                        <img
                          className="rounded-1 mt-2"
                          src={Nft9}
                          alt="Collection item"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* <!-- Collection title--> */}
            <h3 className="h5 mb-1">
              <Link className="nav-link-style" to="nft-catalog-v2.html">
                Anambra, Nigeria
              </Link>
            </h3>
            <span className="fs-sm text-muted">$ 1520.18</span>
          </article>
        </div>
      </div>
    </div>
  );
}

export default DevCollections;
