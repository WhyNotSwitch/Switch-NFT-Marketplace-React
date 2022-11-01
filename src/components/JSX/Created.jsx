import React from "react";
import MyCard from "../Common/MyCard";

function Created() {
  const nums = [1, 2, 3, 6, 7, 8];
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
    <div className="tab-pane fade show active" id="created" role="tabpanel">
      <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3">
        {/* <!-- Product--> */}
        {CardElement}
      </div>
      {/* <!-- Load more--> */}
      <button className="btn btn-outline-accent d-block w-100 mt-sm-4 mt-3">
        <i className="ci-reload me-2"></i>Load more
      </button>
    </div>
  );
}

export default Created;
