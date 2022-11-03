import { useRouter } from "next/router";
import React, { useContext } from "react";
import { InstaContext } from "../../context/InstaContext";

const HeaderIcon = ({ Icon, name, isHide, url }) => {
  const { setIsModalOpen, isModalOpen } = useContext(InstaContext);
  const router = useRouter();
  const handleClickIcon = () => {
    if (name === "Add") {
      setIsModalOpen(!isModalOpen);
    }

    router.push(`${url}`);
  };
  console.log(isHide);
  return (
    <div
      onClick={handleClickIcon}
      className={
        isHide
          ? `hidden md:flex `
          : `p-2 text-black transition rounded cursor-pointer hover:bg-black hover:text-white`
      }
    >
      <Icon className="" size={25} />
    </div>
  );
};

export default HeaderIcon;
