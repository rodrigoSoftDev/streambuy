import React from "react";
import "./styling/Reactions.css"

const Reactions = ({ style, isOpen }) => {
  const top = `${window.screen.height - (window.screen.height * 0.9) - 50}px`;
  return !isOpen ? null : (
    < >
      <i 
        className="fas fa-heart fadeInUp heartReactions"
        style={{ top: top }} 
      >
      </i>
      <div style={{ top: top }} className="fadeInUp textReactions"> +1 </div>
    </>
  );
};

export default Reactions;