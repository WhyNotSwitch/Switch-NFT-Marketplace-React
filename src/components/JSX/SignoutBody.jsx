import React from "react";
import Torus from "../img/nft/connect-wallet/torusmin.svg";
import WalletConnect from "../img/nft/connect-wallet/walletconnectmin.svg";
import Coinbase from "../img/nft/connect-wallet/coinbasemin.svg";
import Portis from "../img/nft/connect-wallet/portismin.svg";
import Formatic from "../img/nft/connect-wallet/formaticmin.svg";
import Metamask from "../img/nft/connect-wallet/metamaskmin.svg";
import { Link } from "react-router-dom";
import BaseUrl from "./BaseUrl";

function SignoutBody() {
  return (
    <div>
      {/* <!-- Page title--> */}
      <div className="bg-accent mb-4 py-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link className="text-nowrap" to={BaseUrl}>
                    <i className="ci-home"></i>Home
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <Link to={`${BaseUrl}/marketplace`}>NFT Marketplace</Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Connect Wallet
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Connect Wallet</h1>
          </div>
        </div>
      </div>
      {/* <!-- Page content--> */}
      <section className="container mb-5 pt-1 pb-md-5 pb-4">
        <div className="mb-4 pb-3">
          <p className="mb-2 fs-lg">
            Choose the most suitable blockchain wallet for your needs.
          </p>
          <Link to={`${BaseUrl}/signout`}>
            <ins>Learn more about wallets</ins>
          </Link>
        </div>
        {/* <!-- Payment items grid--> */}
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-sm-grid-gutter gy-3">
          {/* <!-- Payment item--> */}
          <div className="col">
            <article className="card border-0 shadow position-relative h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <img src={Metamask} width="60" alt="Meta Mask" />
                  <span className="badge bg-success ms-3">Popular</span>
                </div>
                <h2 className="h5 mb-2">
                  <Link
                    className="nav-link-style stretched-link"
                    to={`${BaseUrl}/signout`}
                  >
                    Meta Mask
                  </Link>
                </h2>
                <p className="mb-0 fs-sm text-muted">
                  MetaMask provides an essential utility for blockchain
                  newcomers, token traders, crypto gamers and developers.
                </p>
              </div>
            </article>
          </div>
          {/* <!-- Payment item--> */}
          <div className="col">
            <article className="card border-0 shadow position-relative h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <img src={Coinbase} width="60" alt="Coinbase" />
                </div>
                <h2 className="h5 mb-2">
                  <Link
                    className="nav-link-style stretched-link"
                    to={`${BaseUrl}/signout`}
                  >
                    Coinbase Wallet
                  </Link>
                </h2>
                <p className="mb-0 fs-sm text-muted">
                  Coinbase Wallet is your passport to the decentralized web.
                  Harness the power of DeFi to earn yield, grow your NFT
                  collection, and much more.
                </p>
              </div>
            </article>
          </div>
          {/* <!-- Payment item--> */}
          <div className="col">
            <article className="card border-0 shadow position-relative h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <img src={WalletConnect} width="60" alt="Wallet connect" />
                </div>
                <h2 className="h5 mb-2">
                  <Link
                    className="nav-link-style stretched-link"
                    to={`${BaseUrl}/signout`}
                  >
                    Wallet Connect
                  </Link>
                </h2>
                <p className="mb-0 fs-sm text-muted">
                  WalletConnect is the web3 standard to connect blockchain
                  wallets to dapps. Hundreds of dapp’s use WalletConnect to
                  connect with wallets.
                </p>
              </div>
            </article>
          </div>
          {/* <!-- Payment item--> */}
          <div className="col">
            <article className="card border-0 shadow position-relative h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <img src={Formatic} width="60" alt="Fortmatic" />
                </div>
                <h2 className="h5 mb-2">
                  <Link
                    className="nav-link-style stretched-link"
                    to={`${BaseUrl}/signout`}
                  >
                    Fortmatic
                  </Link>
                </h2>
                <p className="mb-0 fs-sm text-muted">
                  Fortmatic is SOC 2 Type 1 compliant with a non-custodial HSM
                  architecture. Fortmatic is a collaborative effort from the
                  best.
                </p>
              </div>
            </article>
          </div>
          {/* <!-- Payment item--> */}
          <div className="col">
            <article className="card border-0 shadow position-relative h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <img src={Portis} width="60" alt="Portis" />
                </div>
                <h2 className="h5 mb-2">
                  <Link
                    className="nav-link-style stretched-link"
                    to={`${BaseUrl}/signout`}
                  >
                    Portis
                  </Link>
                </h2>
                <p className="mb-0 fs-sm text-muted">
                  Portis is non-sustodial blockchain wallet that makes apps
                  simple for everyone. Boost conversions by accepting cards
                  worldwide.
                </p>
              </div>
            </article>
          </div>
          {/* <!-- Payment item--> */}
          <div className="col">
            <article className="card border-0 shadow position-relative h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <img src={Torus} width="60" alt="Torus" />
                </div>
                <h2 className="h5 mb-2">
                  <Link
                    className="nav-link-style stretched-link"
                    to={`${BaseUrl}/signout`}
                  >
                    Torus
                  </Link>
                </h2>
                <p className="mb-0 fs-sm text-muted">
                  Torus is built and designed to be trustless, users' identities
                  are not controlled by any central authority. One-click login
                  for Web 3.0.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignoutBody;
