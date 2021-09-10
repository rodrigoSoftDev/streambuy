import React, { useEffect, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import { ActionSheet } from "react-onsenui";
import BackButton from "./BackButton";

import "animate.css"
import "./styling/Cart.css";

import { readObject } from "../Utils/localStorage";
import { calculatetotal } from "../Utils/globalHelpers";
import { isEmpty } from "lodash";

const Cart = ({ showCart, setShowCart, setShowCheckout }) => {
  const [update, setUpdate] = useState(false);
  const cart = !isEmpty(readObject("cart")) && readObject("cart");

  const goCheckout = () => {
    setShowCart(false)
    setShowCheckout(true)
  };

  useEffect(() => {}, [update]);

  const getPriceProduct = product => {
    if (product.amount && product.amount > 0) return product.price * product.amount;
    else return product.price
  };

  return showCart ? (
    <ActionSheet  isCancelable={false} isOpen={showCart}> 
    <BackButton title="Carrito"  onClick={() => setShowCart(false)}/>
    <div className="containerRoutes">
      {cart && cart.map(product => (
        <div className="cartDetails" key={product.name}>
          <img src={product.image_1} alt="cartPic" className="prodPic"/>
          <div className="cartInfo">
            <div className="cartName">{product.name}</div>
            <div className="cartPrice">${getPriceProduct(product)}</div>
          </div>
          <div className="cartCount">
              <i className="fas fa-trash-alt" style={{ color:"grey", marginBottom: "20px" }}></i>
              <Count 
                product={product} 
                update={setUpdate} 
                updateValue={update}
              />
          </div>
        </div>
      ))}

      <Button 
        borderRadius="10px"
        children="Ingresar"
        backgroundColor="#EF7463"
        borderRadius="5px"
        color="white"
        fontSize="12px"
        margin="auto"
        height="50px"
        onClick={goCheckout}
      >
        {`Pagar $ ${calculatetotal()}`}
      </Button>
    </div>
    </ActionSheet>

   
  ) : null;
};

export default Cart;
