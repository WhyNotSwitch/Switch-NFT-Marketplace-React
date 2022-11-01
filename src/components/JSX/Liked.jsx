import React from "react";
import MyCard from "./MyCard";

function Liked() {
  const nums = [4, 7, 8];
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
    <div className="" id="liked" role="tabpanel">
      {/* <!-- Liked items grid--> */}
      <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3">
        {/* <!-- Product--> */}
        {CardElement}
      </div>
    </div>
  );
}

export default Liked;
