import React, { useState, useEffect } from "react";
import "./styling/Chat.css";
import Inbox from "./Inbox";
import { isLogged } from "../Utils/globalHelpers";
import { sendChat } from "../firesbase";
import { readObject } from "../Utils/localStorage";
import { isEmpty } from "lodash";

const Chat = ({ organizationId, eventId, setShowPhone }) => {
  const [message, setMessage] = useState("");
  const author = !isEmpty(readObject("user")) && readObject("user").data && readObject("user").data.name;
  const userLogged = isLogged();

  const sendMessage = () => {
    if (message !== ""){
      sendChat(organizationId, eventId, message, author);
      setMessage("");
    };
  };
  
  const checkForLogin = () => {
    if (!userLogged) setShowPhone(true)
  };

  return (
    <>
      <Inbox 
        organizationId={organizationId}
        eventId={eventId}
        author={author} 
      />
      <div className="chatCont">
        <div className="chatMessage ">
          <div className="sendMessage">
              <input
                className="inputChat"
                value={message}
                onChange={e => setMessage(e.target.value)}
                type="text"
                placeholder="Escribí algo..."
                onFocus={checkForLogin}
              />
        <div onClick={sendMessage}>
          <i className="fa fa-paper-plane chatItem" />
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
