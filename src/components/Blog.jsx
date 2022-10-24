import React from "react";
import Button from "./Button";
import "./styles.css";
import Blog1 from "./img/nft/blog/01.jpg";
import Blog2 from "./img/nft/blog/02.jpg";
import Blog3 from "./img/nft/blog/03.jpg";

function Blog() {
  return (
    <div className="pt-4 bg-secondary">
      {/* <!-- Blog recent posts--> */}
      <section className="container py-lg-3 py-3 ">
        <div className="d-flex align-items-center justify-content-between mb-sm-4 mb-2 pb-2">
          <h2 className="h3 mb-0">Resources for getting started</h2>
          <a className="btn btn-outline-accent ms-3" href="blog-grid.html">
            All articles<i className="ci-arrow-right ms-2"></i>
          </a>
        </div>
        {/* <!-- Blog (carousel)--> */}

        <div
          className=""
          data-carousel-options='{"items": 2, "controls": false, "nav": true, "gutter": 30, "responsive": {"0":{"items":1},"576":{"items":2},"992":{"items":3}}}'
        >
          {/* <!-- Carousel item--> */}

          {/* <!-- Carousel item--> */}
          <div className="row row-cols-md-3">
            <article className="col col-sm-1">
              <a className="d-block mb-3" href="blog-single.html">
                <img className="rounded-3" src={Blog2} alt="Blog" />
              </a>
              <div className="d-flex align-items-center fs-sm pb-2">
                <a className="blog-entry-meta-link" href="#flex">
                  by Kathryn Murphy
                </a>
                <span className="blog-entry-meta-divider"></span>
                <a className="blog-entry-meta-link" href="#flex">
                  Sep 18
                </a>
              </div>
              <h2 className="h6 blog-entry-title mb-0">
                <a href="blog-single.html">
                  A chance to win a variety of common, rare and unique NFTs
                </a>
              </h2>
            </article>

            {/* <!-- Carousel item--> */}
            <article className="col-sm-1">
              <a className="d-block mb-3" href="blog-single.html">
                <img className="rounded-3" src={Blog1} alt="Blog" />
              </a>
              <div className="d-flex align-items-center fs-sm pb-2">
                <a className="blog-entry-meta-link" href="#flex">
                  by Wade Warren
                </a>
                <span className="blog-entry-meta-divider"></span>
                <a className="blog-entry-meta-link" href="#flex">
                  Aug 15
                </a>
              </div>
              <h2 className="h6 blog-entry-title mb-0">
                <a href="blog-single.html">
                  The complete guide to NFTs art for creators and investors
                </a>
              </h2>
            </article>

            {/* <!-- Carousel item--> */}
            <article className="col-sm-1">
              <a className="d-block mb-3" href="blog-single.html">
                <img className="rounded-3" src={Blog3} alt="Blog" />
              </a>
              <div className="d-flex align-items-center fs-sm pb-2">
                <a className="blog-entry-meta-link" href="empty">
                  by Devon Lane
                </a>
                <span className="blog-entry-meta-divider"></span>
                <a className="blog-entry-meta-link" href="empty">
                  Nov 26
                </a>
              </div>
              <h2 className="h6 blog-entry-title mb-0">
                <a href="blog-single.html">
                  Exclusive premium events, from exhibitions to unique
                  collectibles
                </a>
              </h2>
            </article>
          </div>
        </div>
      </section>
      {/* <!-- Mail subscription--> */}
      <section className="container">
        <div className="card py-5 border-0 shadow">
          <div className="card-body py-md-4 py-3 px-4 text-center">
            <h3 className="mb-3">Never miss a drop!</h3>
            <p className="mb-4 pb-2">
              Subscribe to our ultra-exclusive drop list and be the first to
              know about upcoming drops.
            </p>
            <div className="widget mx-auto" style={{ maxWidth: "500px" }}>
              <form
                className="subscription-form validate"
                action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
              >
                <div className="input-group flex-nowrap">
                  <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                  <input
                    className="form-control rounded-start"
                    type="email"
                    name="EMAIL"
                    placeholder="Your email"
                    required
                  />
                  <Button
                    className="btn btn-accent"
                    type="submit"
                    name="subscribe"
                  >
                    Subscribe*
                  </Button>
                </div>
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div
                  style={{ position: "absolute; left: -5000px" }}
                  aria-hidden="true"
                ></div>
                <div className="form-text mt-3">
                  *Receive early discount offers, updates and new products info.
                </div>
                <div className="subscription-status"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
