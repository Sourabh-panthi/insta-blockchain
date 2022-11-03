import Image from "next/image";
import React from "react";

const ChatProfile = () => {
  return (
    <div className="flex items-center  m-3 justify-between border-b border-gray-200 ">
      <div className="flex items-center ">
        <div className="h-14 w-14 rounded-full mr-4">
          {
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQjrF-hsZQm06rGDcKRFFRs2FYzwJ71KpLA&usqp=CAU"
              alt="profile"
              height={50}
              width={50}
              className="rounded-full  stretch-0"
            />
          }
        </div>
        <div>
          <p className="text-sm font-semibold">Sourabh Panthi</p>
          <p className="text-gray-500">Active Now</p>
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
