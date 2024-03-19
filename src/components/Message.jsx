/*
 *  Individual message chat bubble
 */

import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import Translate from "../img/translate.png";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [translatedText, setTranslatedText] = useState("");
  const [enableTranslate, setEnableTranslate] = useState(false);
  const ref = useRef();

  // google translate api
  const API_KEY = "AIzaSyCqv9DPoSA96cCQJn5AaRv2e_eTxMCl7BA";
  const targetLang = data.language;
  const text = message.text;
  const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&target=${targetLang}&q=${text}`;
  const translate = () => {
    setEnableTranslate(!enableTranslate);
    fetch(url)
      .then((response) => response.json())
      .then((tdata) => {
        const translatedText = tdata.data.translations[0].translatedText;
        setTranslatedText(translatedText);
      });
  };

  // scroll down all the way when new message
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{enableTranslate ? translatedText : message.text}</p>
        <input type="image" src={Translate} onClick={translate} />
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
