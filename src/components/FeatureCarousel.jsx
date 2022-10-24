import React from "react";
import "./styles.css";
import Wallet from "./img/nft/features/result.svg";
import Cart from "./img/nft/features/shop-cart.svg";
import Add from "./img/nft/features/addresult.svg";
import Img from "./img/nft/features/result-1.svg";

function FeatureCarousel() {
  return (
    <section className="container py-lg-5 py-4">
      <h2 className="mb-4 pb-md-3 pb-2">
        Begin your SOLAR & NFT journey with us!
      </h2>
      {/* <!-- Features carousel--> */}
      <div className="mb-4">
        <div
          className="features"
          data-carousel-options='{"items": 2, "nav": true, "gutter": 30, "responsive": {"0":{"items":1,"controls": false},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true}}}'
        >
          {/* <!-- Carousel item--> */}
          <div>
            <img className="mb-4" src={Wallet} width="60" alt="Icon" />
            <h4 className="mb-2 fs-lg text-body">Set up your wallet</h4>
            <p className="mb-0 fs-sm text-muted">
              Quam nulla in id nibh. Morbi eget elit eget dui est pretium,
              blandit penatibus blandit. Amet mattis blandit urna volutpat.
            </p>
          </div>
          {/* <!-- Carousel item--> */}
          <div>
            <img className="mb-4" src={Add} width="60" alt="Icon" />
            <h4 className="mb-2 fs-lg text-body">
              Submit your project prospal
            </h4>
            <p className="mb-0 fs-sm text-muted">
              Fringilla ullamcorper aenean tellus ullamcorper neque, malesuada.
              Aliquam consequat nunc.
            </p>
          </div>
          {/* <!-- Carousel item--> */}
          <div>
            <img className="mb-4" src={Img} width="60" alt="Icon" />
            <h4 className="mb-2 fs-lg text-body">
              List approved projects as NFTs
            </h4>
            <p className="mb-0 fs-sm text-muted">
              Platea eu aliquam pellentesque parturient. Volutpat, fermentum
              suspendisse at nisi cras mattis augue.
            </p>
          </div>
          {/* <!-- Carousel item--> */}
          <div>
            <img className="mb-4" src={Cart} width="60" alt="Icon" />
            <h4 className="mb-2 fs-lg text-body">
              Land Funding from Nfts collectors
            </h4>
            <p className="mb-0 fs-sm text-muted">
              In eget nulla id feugiat ut placerat sapien malesuada. Sed id
              risus non accumsan eu amet ut pellentesque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureCarousel;
