import Image from "next/image";
import React from "react";

const MiniProfile = () => {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
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
          <p className="text-sm font-semibold">Sourabh Panthi</p>
        </div>
        {<button className="text-xs font-bold text-[#0095f6]">SignOut</button>}
      </div>
    </div>
  );
};

export default MiniProfile;
