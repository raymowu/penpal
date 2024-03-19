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
import Language from "../img/language.png";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { dispatch } = useContext(ChatContext);

  const changeLanguage = () => {
    var e = document.getElementById("languages");
    console.log(e.value);
    dispatch({ type: "CHANGE_LANGUAGE", payload: e.value });
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        {Object.keys(data.user).length !== 0 && (
          <div className="chatIcons">
            <img className="speechIcon" src={Language} />
            <select name="languages" onChange={changeLanguage} id="languages">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="zh-cn">Chinese (Simplified)</option>
              <option value="zh-tw">Chinese (Traditional)</option>
            </select>
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
