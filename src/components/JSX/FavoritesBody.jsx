import React from "react";
import MyCard from "../Common/MyCard";
import SideBar from "./SideBar";

function FavoritesBody() {
  const nums = [3, 6, 7, 8];
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
    <div>
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            {/* <!-- Sidebar--> */}
            <SideBar />
            {/* <!-- Content--> */}
            <section className="col-lg-9 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h1 className="h3 mb-4 pb-2 text-sm-start text-center">
                  Favorites
                </h1>
                {/* <!-- Items grid--> */}
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3 gx-3 mb-4">
                  {/* <!-- Product--> */}
                  {CardElement}
                </div>
                <button className="btn btn-outline-danger">
                  <i className="ci-trash me-2"></i>Delete all
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesBody;
