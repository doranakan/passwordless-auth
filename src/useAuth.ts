import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useCallback } from "react";

const useAuth = () => {
  const { account, activate } = useWeb3React<Web3Provider>();

  const connect = useCallback(
    () => activate(new InjectedConnector({})),
    [activate]
  );

  return { account, connect };
};

export { useAuth };
