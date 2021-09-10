import React, { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";

import LikesAndViewers from "./LikesAndViewers";
import Product from "./Product";
import Chat from "./Chat";
import ProductList from "./ProductList";
import Settings from "./Settings";
import Cart from "./Cart";
import Phone from "./Phone";
import Checkout from "../Components/checkout/Checkout";
import Live
 from "./Live";
const PortraitScreen = ({ eventInfo }) => {
  const [showProduct, setShowProduct] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout]= useState(false)
  const [showPhone, setShowPhone]=useState(false)
  const heightPx = `${window.screen.height + 2}px`;
  return (
    <div
      style={{
        height: heightPx,
        width: "100%",
        overflow: "hidden",
        marginTop: "-1px",
      }}
    >

      <Live />
      
      <LikesAndViewers 
        eventId={eventInfo.id}
        organizationId={eventInfo.organization.guid}
        setShowPhone={setShowPhone}
      />

      <ProductList 
        productList={eventInfo.catalog.item}
        showProduct={setShowProduct} 
        eventId={eventInfo.id}
        organizationId={eventInfo.organization.guid}
      />

      <Chat 
        organizationId={eventInfo.organization.guid} 
        eventId={eventInfo.id}
        showPhone={showPhone}
        setShowPhone={setShowPhone}
      />

      <Settings 
        setShowCart={setShowCart} 
        showPhone={showPhone}
        setShowPhone={setShowPhone}
      /> 

      {showProduct && (
        <Product
          product={showProduct}
          setShowProduct={setShowProduct}
        />
      )}

      {showCart && (
        <Cart
          showCart={showCart}
          setShowCart={setShowCart}
          showCheckout={showCheckout}
          setShowCheckout={setShowCheckout}
        />
      )}

      {showCheckout && (
        <Checkout
          showCheckout={showCheckout}
          setShowCheckout={setShowCheckout}
          setShowCart={setShowCart}
        />
      )}

      {showPhone && (
        <Phone
          showPhone={showPhone}
          setShowPhone={setShowPhone}
          organizationId={eventInfo.organization.guid}
        />
      )}

      <img
        src="https://img.global.news.samsung.com/cl/wp-content/uploads/2020/09/Ecommerce.jpg"
        style={{height: "100vh"}}
      />
    </div>
  );
};

export default PortraitScreen;
