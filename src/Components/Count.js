import React, { useState } from "react";

import { addOneMoreOf, deleteOneOf } from "../Utils/globalHelpers";
import { readObject } from "../Utils/localStorage";

const Count = ({ product, update, updateValue }) => {
  const getInitialCounter = () => {
    if (product) {
      const cart = readObject("cart");
      const productAmount =  cart.find(prod => prod.id === product.id).amount;
      if (productAmount) return productAmount;
      else return 1;
    };
  };
  const [count, setCount] = useState(getInitialCounter());

  const onAdd = () => {
    setCount(count + 1);
    addOneMoreOf(product);
    if (update) update(!updateValue);
  };

  const onSubtract = () => {
    setCount(count - 1);
    deleteOneOf(product);
    if (update) update(!updateValue);
  };

  return (
    <div className=" itemCountButtons">
      <div className="itemCountButton" onClick={onAdd}>
        +
      </div>
      <input type="number" value={count || 1} />
      <div className="itemCountButton" onClick={onSubtract}>
        -
      </div>
    </div>
  );
};

export default Count;
