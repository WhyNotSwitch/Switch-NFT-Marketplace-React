import Button from "./Button";
import "../CSS/theme.min.css";
import navLogo from "../img/Switch/Switch Electric PNG croped.png";
import "../CSS/styles.css";
import BaseUrl from "./BaseUrl";
import { Link } from "react-router-dom";

import { useEffect, useState, React } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

function NavBar(props) {
  const [account, setAccount] = useState(null);
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api({
          web3,
          provider,
        });
      } else {
        console.log("Please install Metamask");
      }
    };

    loadProvider();
  }, []);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0] ?? null);
    };
    web3Api.web3 && getAccount();
    web3Api.provider &&
      web3Api.provider.on("accountsChanged", async () => getAccount());
  }, [web3Api.web3, web3Api.provider]);

  return (
    <div style={props.style}>
      <header
        className="navbar d-block fixed-top navbar-expand-lg navbar-light w-100"
        id="header"
      >
        <div className="container">
          <Link
            className="navbar-brand d-none d-sm-block me-4 order-lg-1"
            to={BaseUrl}
          >
            <img src={navLogo} width="142" alt="Switch" />
          </Link>
          <Link className="navbar-brand d-sm-none me-2 order-lg-1" to={BaseUrl}>
            <img
              src={require("../img/Switch/Switch Electric PNG croped.png")}
              width="74"
              alt="Switch"
            />
          </Link>
          <div className="navbar-toolbar d-flex align-items-center order-lg-3">
            <Button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <a
              className="navbar-tool d-none d-lg-flex"
              href="#!!"
              data-bs-toggle="collapse"
              data-bs-target="#searchBox"
              role="button"
              aria-expanded="false"
              aria-controls="searchBox"
            >
              <span className="navbar-tool-tooltip">Search</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-search"></i>
              </div>
            </a>
            <Link
              className="navbar-tool ms-lg-2"
              to={`${BaseUrl}/signin`}
              data-bs-toggle="modal"
            >
              <span className="navbar-tool-tooltip">Account</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-user"></i>
              </div>
            </Link>
            <Link
              className="btn btn-sm btn-accent rounded-1 ms-lg-4 ms-2"
              //to={`${BaseUrl}/signout`}
              onClick={() =>
                web3Api.provider.request({ method: "eth_requestAccounts" })
              }
            >
              {account ? account : "Connect Metamask"}
            </Link>
          </div>
          <div
            className="collapse navbar-collapse me-auto order-lg-2"
            id="navbarCollapse"
          >
            {/* <!-- Search (mobile)--> */}
            <div className="d-lg-none py-3">
              <div className="input-group">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <input
                  className="form-control rounded-start"
                  type="text"
                  placeholder="What do you need?"
                />
              </div>
            </div>
            {/* <!-- Primary menu--> */}
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to={BaseUrl}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${BaseUrl}/marketplace`}>
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${BaseUrl}/collections`}>
                  Collections
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#nav">
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Search collapse--> */}
        <div className="search-box collapse" id="searchBox">
          <div className="container py-2">
            <div className="input-group">
              <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input
                className="form-control rounded-start"
                type="text"
                placeholder="What do you need?"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
