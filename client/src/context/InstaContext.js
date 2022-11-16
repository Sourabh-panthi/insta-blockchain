import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { client } from "../lib/client";

export const InstaContext = createContext();

export const InstaProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appStatus, setAppStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
    checkWalletIsConnceted();
  }, []);

  const checkWalletIsConnceted = async () => {
    if (!window.ethereum) return setAppStatus("noMetamask");
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        //connected
        setAppStatus("connected");
        setAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      } else {
        //notConnected
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (error) {
      console.log("twitterContext check wallet connect", error);
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };

  const accountChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setAppStatus("connected");
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
      setAppStatus("notConnected");
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus("noMetamask");
    try {
      setAppStatus("loading");
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("twitterContext addressArray: ", addressArray);
      if (addressArray.length > 0) {
        setAccount(addressArray[0]);
        createUserAccount(addressArray[0]);
      } else {
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (err) {
      console.log("twitterContext wallet connect", err);
      setAppStatus("error");
    }
  };

  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus("noMetamask");

    try {
      const userDoc = {
        _type: "users",
        _id: userAddress,
        name: "Unnamed",
        profileImage:
          "https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg",
        walletAddress: userAddress,
      };

      await client.createIfNotExists(userDoc);

      setAppStatus("connected");
    } catch (error) {
      router.push("/");
      setAppStatus("error");
    }
  };

  return (
    <InstaContext.Provider
      value={{
        setIsModalOpen,
        closeModal,
        connectWallet,
        isModalOpen,
        appStatus,
        errorMessage,
        account,
        balance,
      }}
    >
      {children}
    </InstaContext.Provider>
  );
};
