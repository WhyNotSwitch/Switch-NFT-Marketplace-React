import "../CSS/styles.css";
import SquareAvatar from "../img/nft/vendor/avatar-square.jpg";
import SideBar from "./SideBar";
import PageTitle from "../Common/PageTitle";

function AccountBody() {
  return (
    <div id="page">
      <PageTitle />
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            {/* <!-- Sidebar--> */}
            <SideBar />
            {/* <!-- Content--> */}
            <section className="col-lg-9 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h1 className="h3 mb-4 pt-2 text-center text-sm-start">
                  Profile Settings
                </h1>
                <div className="bg-secondary rounded-3 p-4 mb-4 text-center text-sm-start">
                  <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center">
                    <img
                      className="rounded mb-sm-0 mb-3"
                      src={SquareAvatar}
                      width="90"
                      alt="Createx Studio"
                    />
                    <div className="ms-n2 ps-sm-4">
                      <button
                        className="btn btn-outline-accent mb-2 ms-2"
                        type="button"
                      >
                        <i className="ci-loading me-2"></i>Change{" "}
                        <span className="d-none d-sm-inline">avatar</span>
                      </button>
                      <button
                        className="btn btn-outline-danger mb-2 ms-2"
                        type="button"
                      >
                        <i className="ci-trash me-2"></i>Delete
                      </button>
                      <div className="pt-1 mb-0 fs-sm text-muted">
                        We recommend an image of at least 400x400. Gifs work too
                        :
                      </div>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="row gy-3 mb-4 pb-md-3 mb-2">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-name">
                        Full name
                      </label>
                      <input
                        className="form-control"
                        id="profile-name"
                        type="text"
                        placeholder="Robert Fox"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-username">
                        Username
                      </label>
                      <input
                        className="form-control"
                        id="profile-username"
                        type="text"
                        placeholder="@enter_name"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-uid">
                        UID
                      </label>
                      <input
                        className="form-control"
                        id="profile-uid"
                        type="text"
                        placeholder="374702749"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="profile-email"
                        type="email"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="profile-bio">
                        Short bio
                      </label>
                      <textarea
                        className="form-control"
                        id="profile-bio"
                        rows="4"
                        placeholder="Tell about yourself in few words"
                      ></textarea>
                      <span className="form-text">
                        0 of 500 characters used.
                      </span>
                    </div>
                  </div>
                  <h3 className="h5 mb-3">Social media profiles</h3>
                  <div className="row gy-3 mb-4 pb-2">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-website">
                        Website
                      </label>
                      <input
                        className="form-control"
                        id="profile-website"
                        type="url"
                        placeholder="Enter URL"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-twitter">
                        Twitter
                      </label>
                      <input
                        className="form-control"
                        id="profile-twitter"
                        type="url"
                        placeholder="Enter URL"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-facebook">
                        Facebook
                      </label>
                      <input
                        className="form-control"
                        id="profile-facebook"
                        type="url"
                        placeholder="Enter URL"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="profile-instagram">
                        Instagram
                      </label>
                      <input
                        className="form-control"
                        id="profile-instagram"
                        type="url"
                        placeholder="Enter URL"
                      />
                    </div>
                    <div className="col-12">
                      <a href="/account-settings">
                        <i className="ci-add me-2"></i>
                        <ins>Add more</ins>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Submit--> */}
                  <div className="d-flex flex-sm-row flex-column">
                    <button className="btn btn-accent" type="submit">
                      Update profile
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountBody;
