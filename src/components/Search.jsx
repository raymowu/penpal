/*
 *  Search chats in left panel
 */

import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a pen pal" />
      </div>
      <div className="userChat">
        <img src="" />
        <div className="userChatInfo">
          <span>Kirara</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
