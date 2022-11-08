const NFT_CONTRACT_NAME = 'WNS';
const NFT_CONTRACT_ADDRESS = "0xDA002B42645F9C1eB009D074BE3e86Dd6861C4A0"

const MARKET_CONTRACT_NAME = "Marketplace"
export const MARKET_CONTRACT_ADDRESS = "0x2F9393e814a0f19876D65650EF4A5d894f11AE56"

const loadContract = async (name, address, web3) => {
  const abi = require(`../ABI/${name}.ABI.json`);

  let contract = null;
  try {
    contract = new web3.eth.Contract(abi, address);
  } catch {
    console.log(`contract ${name} cannot be loaded`);
  }
  return contract;
};

export const loadNFTContract = async (web3) => {
  return await loadContract(NFT_CONTRACT_NAME, NFT_CONTRACT_ADDRESS, web3);
};

export const loadMarketContract = async (web3) => {
  return await loadContract(MARKET_CONTRACT_NAME, MARKET_CONTRACT_ADDRESS, web3);
};
