/*
 *  Left panel
 */

import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import GameNavbar from "./GameNavbar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <GameNavbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
