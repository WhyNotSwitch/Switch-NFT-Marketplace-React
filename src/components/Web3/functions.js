import { MARKET_CONTRACT_ADDRESS } from "./useContract";

export const getBalance = async (NFTContract, account, id) => {
  const balance = await NFTContract.methods.balanceOf(account, id).call();
  return balance;
};

export const approveMarketplace = async (NFTContract, account) => {
  const _isApproved = await isApproved(NFTContract, account);
  _isApproved
    ? console.log("already approved")
    : await NFTContract.methods
        .setApprovalForAll(MARKET_CONTRACT_ADDRESS, true)
        .send({ from: account });
};

export const isApproved = async (NFTContract, account) => {
  const approved = await NFTContract.methods
    .isApprovedForAll(account, MARKET_CONTRACT_ADDRESS)
    .call();
  return approved;
};
