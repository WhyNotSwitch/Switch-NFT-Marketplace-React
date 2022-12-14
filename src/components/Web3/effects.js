import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { loadMarketContract, loadNFTContract } from "./useContract";

// ############################################################
//
// this effect is responsible for loading connection to Metamask
// using this connection, the effect can load our contacts
// also keeps track of loaded state of the wallet for other components
// logs error on connection fail
// ############################################################

export const loadProvider = async (setWeb3Api) => {
  const provider = await detectEthereumProvider();

  if (provider) {
    const web3 = new Web3(provider);
    const MarketContract = await loadMarketContract(web3);
    const NFTContract = await loadNFTContract(web3);

    setWeb3Api((_web3Api_) => ({
      ..._web3Api_,
      MarketContract,
      NFTContract,
      isLoading: false,
      provider,
      web3,
    }));
  } else {
    setWeb3Api((_web3Api_) => ({ ..._web3Api_, isLoading: false }));
    console.error("Please install Metamask");
  }
};

// ############################################################
//
// ############################################################

export const getAccount = async (web3, setWeb3Api) => {
  const accounts = await web3.eth.getAccounts();
  setWeb3Api((_web3Api_) => ({ ..._web3Api_, account: accounts[0] }));
};

// ############################################################
//
// ############################################################

export const getNetwork = async (web3, setWeb3Api) => {
  const chainID = await web3.eth.getChainId();
  const networkStatus =
    chainID === 4689
      ? "IoTeX Mainnet \u2713"
      : chainID === 4690
      ? "IoTeX Testnet \u26A0"
      : "Use IoTeX Mainnet \u26A0";
  const statusColor =
    chainID === 4689 ? "#0c7d" : chainID === 4690 ? "#f50d" : "#f00d";
  setWeb3Api((_web3Api_) => ({ ..._web3Api_, networkStatus, statusColor }));
};
