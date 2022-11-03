import Image from "next/image";
import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { GoInfo } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";

const styles = {
  icons: "text-2xl text-gray-700 cursor-pointer ",
};

const ChatBoxHeader = () => {
  return (
    <div className="border-b border-gray-300">
      <div className="flex items-center m-3 justify-between  ">
        <div className="flex  items-center space-x-3 ">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQjrF-hsZQm06rGDcKRFFRs2FYzwJ71KpLA&usqp=CAU"
            alt="profile"
            height={30}
            width={30}
            className="rounded-full  stretch-0"
          />
          <div>
            <p className="text-sm font-semibold">Sourabh Panthi</p>
            <p className="text-gray-500 text-xs">Active Now</p>
          </div>
        </div>
        <div className="flex justify-center text-center space-x-5">
          <IoCallOutline className={styles.icons} />
          <BsCameraVideo className={styles.icons} />
          <GoInfo className={styles.icons} />
        </div>
      </div>
    </div>
  );
};

export default ChatBoxHeader;
