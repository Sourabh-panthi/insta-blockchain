import React from "react";
import Lottie from "react-lottie-player";
import AuthAnimation from "../../public/assets/animations/auth-page-animation.json";
import { AiFillFacebook } from "react-icons/ai";
import { toast } from "react-hot-toast";
// import LoadingOverlay from "../LoadingOverlay";

const Auth = ({ connectWallet }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="flex w-4/5 h-4/5">
        <div className="w-full h-full">
          <Lottie
            play
            loop
            animationData={AuthAnimation}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col w-full my-auto ">
          <div className="relative flex flex-col w-full p-10 space-y-5 bg-white border border-gray-300">
            {
              <form className="flex flex-col items-center space-y-5">
                <div className="my-5 text-5xl tracking-wider">Instagram</div>

                <button
                  type="submit"
                  className="bg-[#0095F6] py-3 px- text-white active:scale-95 transform transition w-48 disabled:bg-opacity-50 disabled:scale-100 rounded  font-semibold"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
                <div className="flex items-center justify-center w-full  space-x-2">
                  <div className="h-[0.8px] my-5 w-full bg-slate-400" />
                </div>
                <div className="flex items-center justify-center w-full text-center text-indigo-900">
                  <AiFillFacebook className="inline-block mr-2 text-2xl" />
                  <span className="text-sm font-semibold">
                    Powered by Facebook
                  </span>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
