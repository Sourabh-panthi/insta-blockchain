import React from "react";
import { AiOutlineHeart, AiOutlineSmile } from "react-icons/ai";
import { BsImage } from "react-icons/bs";

const styles = {
  icons: "text-2xl text-gray-700 cursor-pointer",
};
const ChatInput = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="border border-gray-400 rounded-full m-3">
        <div className="flex justify-between items-center px-3 py-2 ">
          <div className="flex flex-grow items-center space-x-3">
            <AiOutlineSmile className={styles.icons} />
            <input
              type="text"
              placeholder="Messages..."
              className="outline-none bg-transparent text-gray-700 flex-1 pr-3 "
            />
          </div>
          <div className="flex space-x-3">
            <BsImage className={styles.icons} />
            <AiOutlineHeart className={styles.icons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
