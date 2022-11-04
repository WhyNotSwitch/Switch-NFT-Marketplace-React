import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getAccount, loadProvider } from "./effects";

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

  useEffect(() => {
    if (web3Api.web3 && web3Api.provider) {
      getAccount(web3Api.web3, setWeb3Api);
      web3Api.provider.on("accountsChanged", () => getAccount(web3Api.web3, setWeb3Api));
    }
  }, [web3Api.web3, web3Api.provider]);

  // ############################################################
  //
  // This memo is created after a change is observed in web3Api
  // It is responsible for setting up the click event used for
  // requesting user account info from metamask
  // logs messages on request failures
  // ############################################################

  const _web3Api = useMemo(() => {
    const { web3, provider, isLoading } = web3Api;
    return {
      ...web3Api,
      requireInstall: !isLoading && !web3,
      connect: provider
        ? async () => {
            try {
              await provider.request({ method: "eth_requestAccounts" });
            } catch {
              console.log("failed to connect to wallet");
              window.location.reload();
            }
          }
        : () => console.error("couldn't connect to metamask, reload browser"),
    };
  }, [web3Api]);

  // returns the actual web3 context for wrapping all components
  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
