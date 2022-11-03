import Footer from "./Footer";
import NavBar from "./Nav";

// import {Web3Provider, useWeb3 } from "../Web3/context";


function BaseLayout({ children, navProp, footerProp }) {
  return (
    //<Web3Provider>
    <>
      <NavBar style={navProp}/>
      {children}
      <Footer className={footerProp} />
    </>
    //</Web3Provider>
  );
}

export default BaseLayout;
