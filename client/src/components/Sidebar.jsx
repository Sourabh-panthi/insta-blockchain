import React from "react";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

const Sidebar = () => {
  return (
    <div className="w-full hidden lg:flex md:flex-col">
      {/* Mini profile */}
      <MiniProfile />
      {/* Suggestions */}
      <Suggestions />
    </div>
  );
};

export default Sidebar;
