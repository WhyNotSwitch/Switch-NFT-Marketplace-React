import React from "react";
import "../CSS/styles.css";
import Button from "../Common/Button";

function JumboTron() {
  return (
    <section className="container" id="jumbotron">
      <div className="card py-5 border-0 shadow">
        <div className="card-body py-md-4 py-3 px-4 text-center">
          <h3 className="mb-3">Never miss a drop!</h3>
          <p className="mb-4 pb-2">
            Subscribe to our ultra-exclusive drop list and be the first to know
            about upcoming drops.
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
  );
}

export default JumboTron;
