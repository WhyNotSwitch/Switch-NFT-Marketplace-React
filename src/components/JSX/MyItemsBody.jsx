import React from "react";
import "../CSS/styles.css";
import MyCard from "./MyCard";
import SideBar from "./SideBar";
import PageTitle from "./PageTitle";

function MyItemsBody() {
  const nums = [1, 3, 6, 7, 8];
  const CardElement = nums.map((num) => {
    return (
      <MyCard
        className={"col mb-2"}
        artClass={"card h-100 border-0 shadow"}
        key={num}
        id={num}
        img={require(`../img/Switch/n${num}.jpg`)}
        lg={require("../img/Switch/switch.jpg")}
      />
    );
  });
  return (
    <div id="my-items">
      <PageTitle />
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            {/* <!-- Sidebar--> */}
            <SideBar />
            {/* <!-- Content--> */}
            <section className="col-lg-9 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <div className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between mb-4">
                  <h1 className="h3 mb-sm-0 mb-2 pb-1 text-sm-start text-center">
                    My Items
                  </h1>
                  <div className="pb-1" style={{ overflowX: "auto" }}>
                    <ul className="nav nav-tabs nav-fill flex-nowrap text-nowrap mb-0">
                      <li className="nav-item">
                        <a className="nav-link active" href="/">
                          All <span className="opacity-70">(5)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Sold <span className="opacity-70">(3)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Live auctions <span className="opacity-70">(2)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Items grid--> */}
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3 gx-3 mb-4">
                  {/* <!-- Product--> */}
                  {CardElement}
                </div>
                {/* <!-- Create new item--> */}
                <div className="d-flex flex-sm-row flex-column">
                  <a className="btn btn-accent" href="/">
                    Create new item
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyItemsBody;
