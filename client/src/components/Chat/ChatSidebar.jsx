import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ChatProfile from "./ChatProfile";

const styles = {
  icons: "text-2xl text-gray-700 cursor-pointer",
};
const ChatSidebar = () => {
  return (
    <div className=" w-1/3  border-r border-gray-200">
      <div className="flex justify-between text-center py-4 px-8 border-b border-gray=200">
        <div className="flex space-x-2">
          <p className="font-semibold text-lg ">sourabhpanthi</p>
          <MdOutlineKeyboardArrowDown className={styles.icons} />
        </div>
        <BiEdit className={styles.icons} />
      </div>
      <ChatProfile />
      <ChatProfile />
      <ChatProfile />
    </div>
  );
};

export default ChatSidebar;
