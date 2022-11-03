const {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} = require("react");
// import { loadContract } from "@utils/contract.utils";
// import { setupHooks } from "./hooks/setupHooks";

// import { useEffect, useState } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

import { loadNFTContract, loadMarketContract } from "./useContract";

export default function Web3Provider({ children }) {
  const [account, setAccount] = useState(null);
  const [web3Api, setWeb3Api] = useState({
    MarketContract: null,
    NFTContract: null,
    provider: null,
    web3: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        const web3 = new Web3(provider);
        const MarketContract = await loadMarketContract(web3);
        const NFTContract = await loadNFTContract(web3);

        setWeb3Api({
          MarketContract,
          NFTContract,
          provider,
          web3,
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

    if (web3Api.web3 && web3Api.provider) {
      getAccount();
      web3Api.provider.on("accountsChanged", getAccount);
    }
  }, [web3Api]);

}

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks(callback) {
  const { hooks } = useWeb3();
  return callback(hooks);
}
