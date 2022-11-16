import { useContext } from "react";
import Auth from "../components/Auth";
import Feed from "../components/Feed";
import { InstaContext } from "../context/InstaContext";
import metamask from "../assets/metamask.png";
import errorImg from "../assets/error.png";
import Image from "next/image";

const styles = {
  wrapper: `flex justify-center h-screen w-screen  select-none bg-[#15202b] text-white overflow-hidden `,
  content: `max-w-[1400px] w-3/4 flex justify-between `,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};

const HomePage = () => {
  const { appStatus, connectWallet } = useContext(InstaContext);

  const app = (status = appStatus) => {
    switch (status) {
      case "connected":
        return <Feed />;
        break;
      case "notConnected":
        return <Auth connectWallet={connectWallet} />;
        break;
      case "noMetamask":
        return noMetamaskFound;
        break;

      case "error":
        return error;

      default:
        return loading;
        break;
    }
  };

  const noMetamaskFound = (
    <div className={styles.loginContainer}>
      <Image src={metamask} height={200} width={200} />
      <div>
        <a
          target="_blank"
          rel=" noreferrer"
          href={`https://metamask.io/download.html`}
          className={styles.loginContent}
        >
          You must download the Metamask, a <br /> virtual Ethereum wallet for
          this browser
        </a>
      </div>
    </div>
  );

  const error = (
    <div className={styles.loginContainer}>
      <Image src={errorImg} width={250} height={200} />
      <div className={styles.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  );

  const loading = (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>Loading...</div>
    </div>
  );

  return app(appStatus);
};

export default HomePage;
