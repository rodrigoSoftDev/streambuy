import React, { useState } from "react";
import Count from "./Count";
import "./styling/ItemCount.css";

const ItemCount = () => {
  return (
    <div className="itemCount">
      <Count />
    </div>
  );
};

export default ItemCount;
