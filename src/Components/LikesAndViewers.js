import React, { useState, useEffect } from "react";
import "./styling/LikesAndViewers.css";
import { getLikes, setLike, getViewers, addViewer, likesListener } from "../firesbase";

import Reactions from "./Reactions";
import { isLogged } from "../Utils/globalHelpers";

const LikesAndViewers = ({ eventId, organizationId, setShowPhone }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(null);
  const [viewers, setViewers] = useState(null);
  const [animation, setAnimation ] = useState(false);
  const top = `${window.screen.height - (window.screen.height * 0.9)}px`;

  const onReceptNewLike = () => {
    setAnimation(true);
    setTimeout(() => setAnimation(false), 3000);
  };

  const setRTforListener = () => {
    setInterval(() => 
      getViewers(organizationId, eventId).then(data => setViewers(data.size + 1)), 
      60000
    );
  };

  useEffect(() => {
    getLikes(organizationId, eventId).then(data => setLikes(data.size));
    getViewers(organizationId, eventId).then(data => setViewers(data.size));
    addViewer(organizationId, eventId);
    setRTforListener();
    setTimeout(() => likesListener(organizationId, eventId, onReceptNewLike), 3000);
  }, []);

  const onLike = () => {
    if (!isLogged()) setShowPhone(true);
    else setVideoLike();
  };

  const setVideoLike = () => {
    if (!liked) {
      setLike(organizationId, eventId);
      setLiked(true);
      setLikes(likes + 1);
    } else setLiked(false);
  };
  
  return (
    <>
      <Reactions isOpen={animation} />
      <div className="actCont" style={{ marginTop: top }}>
        <div className="itemEye">
          <i className="fas fa-eye itemEye"/>
          <span className="itemText"> {viewers} </span>
        </div>
      </div>
    </>
  );
};

export default LikesAndViewers;
