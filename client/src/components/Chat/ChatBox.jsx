import Image from "next/image";
import React from "react";

const ChatBox = () => {
  return (
    <div className="h-[80vh] m-3 flex flex-col-reverse">
      <div className="flex justify-start  items-center space-x-2">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQjrF-hsZQm06rGDcKRFFRs2FYzwJ71KpLA&usqp=CAU"
          alt="profile"
          width={25}
          height={25}
          layout="fixed"
          className="rounded-full m-2 "
        />
        <p className=" py-[5px] px-3 border text-center text-[18px] text-gray-700 border-gray-300 rounded-full">
          hello
        </p>
      </div>
      <div className="flex justify-end items-center ">
        <p className="  py-[5px] px-3 border text-center text-[18px] text-gray-700 border-gray-300 rounded-full bg-gray-100">
          hi
        </p>
      </div>
    </div>
  );
};

export default ChatBox;
