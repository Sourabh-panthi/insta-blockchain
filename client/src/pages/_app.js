import { Toaster } from "react-hot-toast";
import { InstaProvider } from "../context/InstaContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <InstaProvider>
        <Toaster />
        <Component {...pageProps} />
      </InstaProvider>
    </>
  );
}

export default MyApp;
