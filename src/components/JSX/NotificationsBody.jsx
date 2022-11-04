import SideBar from "./SideBar";

function NotificationsBody() {
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
                  Notifications
                </h1>
                <div className="bg-secondary rounded-3 p-4">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="nf-disable-all"
                      data-master-checkbox-htmlFor="#notification-settings"
                    />
                    <label
                      className="form-check-label fw-medium"
                      htmlFor="nf-disable-all"
                    >
                      Enable/disable all notifications
                    </label>
                  </div>
                </div>
                <div id="notification-settings">
                  <div className="border-bottom p-4">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="nf-product-sold"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="nf-product-sold"
                      >
                        Product sold notifications
                      </label>
                    </div>
                    <div className="form-text">
                      Send an email when someone purchased one of my products
                    </div>
                  </div>
                  <div className="border-bottom p-4">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="nf-product-updated"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="nf-product-updated"
                      >
                        Product update notifications
                      </label>
                    </div>
                    <div className="form-text">
                      Send an email when a product I've purchased is updated
                    </div>
                  </div>
                  <div className="border-bottom p-4">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="nf-product-comment"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="nf-product-comment"
                      >
                        Product comment notifications
                      </label>
                    </div>
                    <div className="form-text">
                      Send an email when someone comments on one of my products
                    </div>
                  </div>
                  <div className="border-bottom p-4">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="nf-product-review"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="nf-product-review"
                      >
                        Product review notification
                      </label>
                    </div>
                    <div className="form-text">
                      Send an email when someone leaves a review with their
                      rating
                    </div>
                  </div>
                  <div className="border-bottom p-4">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="nf-daily-summary"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="nf-daily-summary"
                      >
                        Daily summary emails
                      </label>
                    </div>
                    <div className="form-text">
                      Send me a daily summary of all products sold, commented or
                      reviewed
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-sm-row flex-column mt-4">
                  <button className="btn btn-accent" type="button">
                    Save changes
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsBody;
