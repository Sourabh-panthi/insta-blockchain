import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiBookmark, FiSend } from "react-icons/fi";

const Post = ({ image }) => {
  let likesCount = 3;
  let isLiked = false;
  return (
    <div className="flex flex-col w-full border border-gray-200">
      <div className="flex items-center justify-between w-full p-2 ">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-10 h-10 bg-black border-2 rounded-full" />
          <div>Sourabh Panthi</div>
        </div>
        <div className="w-4 select-none">
          <BsThreeDots className="text-lg" />
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-black aspect-square">
        <Image src={image} layout="fill" alt="boy" className="object-contain" />
      </div>
      <div className="flex justify-between p-2 text-lg">
        <div className="flex space-x-4">
          <div>
            {isLiked ? (
              <AiFillHeart
                size={25}
                className="text-red-500 cursor-pointer hover:text-red-500/50"
              />
            ) : (
              <AiOutlineHeart
                size={25}
                className="text-black cursor-pointer hover:text-black/50"
              />
            )}
          </div>
          <div>
            <FaRegComment
              size={22}
              className="text-black cursor-pointer hover:text-black/50"
            />
          </div>
          <div>
            <FiSend
              size={22}
              className="text-black cursor-pointer hover:text-black/50"
            />
          </div>
        </div>
        <div>
          <FiBookmark
            size={20}
            className="text-black cursor-pointer hover:text-black/50"
          />
        </div>
      </div>
      <div className="px-2">
        {likesCount ? `${likesCount} likes` : "Be the first to like"}
      </div>
      <div className="px-2">funcky boy</div>
      <div className="p-2">
        <div className="flex flex-col space-y-1">
          <div className="flex space-x-2">
            <div className="font-medium">yassi</div>
            <div>Looking Nice</div>
          </div>
        </div>
      </div>
      <div className="px-2">3 hours ago</div>
      <div className="flex items-center px-2 py-4 mt-1 space-x-3 border-t border-gray-200">
        <div>
          <BsEmojiSmile className="text-xl" />
        </div>
        <form className="flex w-full px-2">
          <div className="w-full">
            <input
              type="text"
              name={`comment`}
              id={`comment `}
              className="w-full bg-white outline-none"
              placeholder="Add a comment..."
              //   ref={comment}
            />
          </div>
          <div>
            <button className="text-sm font-semibold text-blue-600">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
