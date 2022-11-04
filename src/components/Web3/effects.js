import detectEthereumProvider from "@metamask/detect-provider";
import { useMemo } from "react";
import Web3 from "web3";
import { loadMarketContract, loadNFTContract } from "./useContract";

// ############################################################
//
// this effect is responsible for loading connection to Metamask
// using this connection, the effect can load our contacts
// also keeps track of loaded state of the wallet for other components
// logs error on connection fail
// ############################################################

export const loadProvider = async (web3Api, setWeb3Api) => {
  const provider = await detectEthereumProvider();

  if (provider) {
    const web3 = new Web3(provider);
    const MarketContract = await loadMarketContract(web3);
    const NFTContract = await loadNFTContract(web3);

    setWeb3Api({
      ...web3Api,
      MarketContract,
      NFTContract,
      isLoading: false,
      provider,
      web3,
    });
  } else {
    setWeb3Api((api) => ({ ...api, isLoading: false }));
    console.error("Please install Metamask");
  }
};

// ############################################################
//
// ############################################################

export const getAccount = async (web3Api, setWeb3Api) => {
  const accounts = await web3Api.web3.eth.getAccounts();
  setWeb3Api({ ...web3Api, account: accounts[0] });
};
