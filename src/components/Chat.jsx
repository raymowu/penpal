/*
 *  Chat window
 *   bug: doesnt empty/reset on page load
 */

import React, { useContext, useEffect } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log(data.user);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        {Object.keys(data.user).length !== 0 && (
          <div className="chatIcons">
            <img src={Cam} alt=""></img>
            <img src={Add} alt=""></img>
            <img src={More} alt=""></img>
          </div>
        )}
      </div>
      {Object.keys(data.user).length !== 0 ? (
        <>
          <Messages />
          <Input />
        </>
      ) : (
        <div className="noChat">Select someone to chat with</div>
      )}
    </div>
  );
};

export default Chat;
