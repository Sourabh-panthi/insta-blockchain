import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import HeaderIcon from "./HeaderIcon/HeaderIcon";
import {
  AiOutlineHome as Home,
  AiOutlinePlusCircle as Add,
  AiOutlineHeart as Heart,
} from "react-icons/ai";
import { FaTimesCircle as Cross } from "react-icons/fa";
import { FiCompass as Compass } from "react-icons/fi";
import { BsSearch as Search } from "react-icons/bs";
import { RiMessengerLine as Messenger } from "react-icons/ri";
import { IoPersonCircleOutline as Profile } from "react-icons/io5";

const HEADER_ITEMS = [
  {
    icon: Home,
    url: "/",
    name: "Home",
    idHide: true,
  },
  {
    icon: Messenger,
    url: "/messenger",
    name: "Messenger",
    idHide: true,
  },
  {
    icon: Add,
    url: "/",
    name: "Add",
    idHide: true,
  },
  {
    icon: Compass,
    url: "/",
    name: "Discover",
    idHide: true,
  },
  {
    icon: Heart,
    url: "/",
    name: "Likes",
    idHide: true,
  },
  {
    icon: Profile,
    url: "/profile",
    name: "Profile",
    idHide: true,
  },
];

const Header = () => {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <header className="fixed top-0 z-10 flex items-center justify-around w-full h-16 bg-white shadow-md ">
      <Link href="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png"
          alt="logo"
          className="h-12"
        />
      </Link>
      <div className=" hidden lg-flex  items-center px-2 space-x-4 bg-gray-100 border border-gray-400 rounded-lg group group-focus:border-gray-400">
        <label htmlFor="search" className="">
          <BsSearch className="text-lg text-gray-400" />
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="w-full px-2 py-1 transition bg-gray-100 rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm "
          placeholder="Search"
        />
      </div>
      <div className=" flex items-center space-x-2">
        <div className="flex space-x-4">
          {HEADER_ITEMS.map((item) => (
            <HeaderIcon
              Icon={item.icon}
              name={item.name}
              key={item.name}
              url={item.url}
              idHide={item.idHide}
            />
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="hidden md:flex bg-[#0095F6] py-1 h-4/5 text-white active:scale-95 transform transition disabled:bg-opacity-50 px-6 disabled:scale-100 rounded text-sm font-semibold"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
