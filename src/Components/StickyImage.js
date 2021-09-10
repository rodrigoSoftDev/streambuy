import React from "react";

const StickyImage = ({ image, onClick}) => (
    <div style={{ display: "flex" }}> 
        <img src={image} alt="productPic" className="pfpic" onClick={onClick} />
        <i className="fas fa-star sticky"></i>
  </div>
);

export default StickyImage;