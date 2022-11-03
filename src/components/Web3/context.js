import { useContext, createContext } from "react";

const Web3Context = createContext(null);

// a wrapper component.
export function Web3Provider({ child }) {
  return (
    <Web3Context.Provider value={{ test: "Hello" }}>
      {child}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
