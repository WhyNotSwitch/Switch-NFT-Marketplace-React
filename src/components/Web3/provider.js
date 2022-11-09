import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loadProvider, getAccount, getNetwork } from "./effects";
import { approveMarketplace } from "../Web3/functions";

const Web3Context = createContext(null);

// ############################################################
//
// this function is a wrapper for all other components
// used in this project. I allows web3 states and effects
// to be accessible from anywhere in the site
// ############################################################

export function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState({});

  useEffect(() => {
    loadProvider(setWeb3Api);
  }, []);

  // ############################################################
  //
  // This effect gets wallet accounts from metamask for our web3
  // interactions. Also detects account switches, retrieves latest
  // account value and passes them to the web3Api object
  // ############################################################

  useEffect(() => {
    if (web3Api.web3 && web3Api.provider) {
      getAccount(web3Api.web3, setWeb3Api);
      getNetwork(web3Api.web3, setWeb3Api);
      web3Api.provider.on("accountsChanged", () =>
        getAccount(web3Api.web3, setWeb3Api)
      );
      web3Api.provider.on("chainChanged", () =>
        getNetwork(web3Api.web3, setWeb3Api)
      );
    }
  }, [web3Api.web3, web3Api.provider]);



  // ############################################################
  //
  // This effect approves marketplace contract to operate user 
  // tokens 
  // ############################################################

  useEffect(() => {
    if (web3Api.NFTContract && web3Api.account) {
       approveMarketplace(web3Api.NFTContract, web3Api.account)
      web3Api.provider.on("accountsChanged", () =>
        approveMarketplace(web3Api.NFTContract, web3Api.account)
      );
    }
  }, [web3Api.NFTContract, web3Api.account]);


  // ############################################################
  //
  // This memo is created after a change is observed in web3Api
  // It is responsible for setting up the click event used for
  // requesting user account info from metamask
  // logs messages on request failures
  // ############################################################

  const _web3Api = useMemo(() => {
    return {
      ...web3Api,
      requireInstall: !web3Api.isLoading && !web3Api.web3,
      connect: async () => {
        try {
          await web3Api.provider.request({ method: "eth_requestAccounts" });
        } catch {
          console.error("failed to connect to wallet");
        }
      },
    };
  }, [web3Api]);

  // ############################################################
  //
  // Returns the actual web3 context for wrapping all components
  // ############################################################
  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
