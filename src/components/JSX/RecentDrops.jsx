import "../CSS/theme.min.css";
import "../CSS/styles.css";
import { Link } from "react-router-dom";
import MyCard from "../Common/MyCard";

function RecentDrops() {
  const nums = [3, 6, 7, 1];
  const CardElement = nums.map((num) => {
    return (
      <MyCard
        className={"col py-3"}
        artClass={"card h-100 border-0 shadow"}
        key={num}
        id={num}
        img={require(`../img/Switch/n${num}.jpg`)}
        lg={require("../img/Switch/switch.jpg")}
      />
    );
  });
  return (
    <div className="recent">
      <section className="mx-xl-auto mx-n2 px-xl-auto px-1">
        <div className="d-flex align-items-center justify-content-between mb-sm-3 mb-2">
          <h2 className="h3 mb-0 mx-5">Recently Projects </h2>
          <Link
            className="btn btn-outline-accent ms-3"
            to="/marketplace"
          >
            Explore more<i className="ci-arrow-right ms-2"></i>
          </Link>
        </div>
        {/* <!-- Product carousel--> */}
        <div className="  mx-xl-auto mx-n1 px-xl-5 px-0 ">
          <div className=" row gx-xl-4 gx-3 mx-0">
            {/* <!-- Product item--> */}
            {CardElement}
            {/* <!-- Product item--> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecentDrops;
