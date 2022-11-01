
import { useEffect, useState, React } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";



const [account, setAccount] = useState(null);
const [web3Api, setWeb3Api] = useState({
  provider: null,
  web3: null,
  isLoading: true,
});

useEffect(() => {
  const loadProvider = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      const web3 = new Web3(provider);
      setWeb3Api({
        web3,
        provider,
        isLoading: false,
      });
      //console.log("loading Provider");
    } else {
      setWeb3Api((api) => ({ ...api, isLoading: false }));
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
