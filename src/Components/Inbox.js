import React, { useState, useEffect } from "react";
import { chatListener, getChat } from "../firesbase";
import "./styling/Inbox.css";

const Inbox = ({ author, organizationId, eventId }) => {
  const [chats, setChats] = useState([]);
  const [updateder, setUpdater] = useState(false);

  const onNewMessage = () => setUpdater(!updateder);
  
  useEffect(() => {
    const allChat = [];
    getChat(organizationId, eventId).then(data => {
      data.forEach (doc => allChat.push(doc.data()));
      setChats(allChat);
      chatListener(organizationId, eventId, onNewMessage);
    });
  }, [updateder]);

  return (
    <div className="chatBody">
      {chats.map((chat, index) => (
        <div className="chatView" key={index}>
          <p className="">
            <span className="chatName">{chat.name}</span>
            <span className="chatMessage"> {chat.message}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
