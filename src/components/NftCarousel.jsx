import React from "react";
import NftOne from "./images/n1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Nft2 from "./images/n2.jpg";

function NftCarousel() {
  return (
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item-active">
          <img src={NftOne} alt="Product" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={Nft2} alt="Product" />
        </div>
      </div>
    </div>
  );
}

export default NftCarousel;
