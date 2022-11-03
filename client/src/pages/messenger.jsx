import React from "react";
import Header from "../components/Header";
import ChatSidebar from "../components/Chat/ChatSidebar";
import ChatInput from "../components/Chat/ChatInput";
import ChatBox from "../components/Chat/ChatBox";
import ChatBoxHeader from "../components/Chat/ChatBoxHeader";

const style = {
  wrapper: " ",
  ChatWrapper:
    "flex h-[85vh] mt-20 border border-gray-300 w-3/4 rounded-lg mx-auto",
  chatbox: "",
};
const Messenger = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.ChatWrapper}>
        <ChatSidebar />
        <div className="flex flex-col w-3/4">
          <ChatBoxHeader />
          <ChatBox />
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
