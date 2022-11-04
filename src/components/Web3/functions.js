export const getBalance = async (NFTContract, account, id ) => {
    const balance = await NFTContract.methods.balanceOf(account, id).call();
    return balance;
  };
  