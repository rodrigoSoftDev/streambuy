import { React, useState } from "react";
import "../../Components/styling/Checkout.css";

import Button from "../Button";
import Card from "./Card";
import User from "./User";
import OrderStatus from "./OrderStatus";
import { ActionSheet } from "react-onsenui";
import BackButton from "../BackButton";

const Checkout = ({ showCheckout, setShowCheckout, setShowCart }) => {
  const [cardCollapse, setCardCollapse] = useState(false);
  const [step, setStep] = useState("step1");
  const [succes, setSucces] = useState(true);

  const goPrevious = () => {
    if (step === "step2") setStep("step1");
    else setStep("step2");
  };

  const goNext = () => {
    if (step === "step1") setStep("step2");
    else setStep("step3");
  };

  return (
    <ActionSheet  isCancelable={false} isOpen={showCheckout}> 
  
    <BackButton title="Resumen de la compra"  onClick={() => {
            setShowCheckout(false);
            setStep("step1");
          }}/>
    <div className="containerRoutes">

      <div className="checkoutDetails ">
        <img
          width="60px"
          heigth="auto"
          src="/RickySarkanylogo.png"
          alt=""
          mar
        />
        <span>Cantidad de productos</span>
        <span>3</span>
      </div>

      <div className="checkoutAmount">
        <p>Sub total:</p>
        <p>$ 27690</p>
      </div>
      <div className="iconsCheckout">
        <i
          className="far fa-user-circle"
          style={{
            fontSize: "24px",
            color: step === "step1" ? "#EF7463" : "grey",
          }}
        ></i>
        <i
          className="fa fa-credit-card"
          style={{
            fontSize: "24px",
            color: step === "step2" ? "#EF7463" : "grey",
          }}
        ></i>
        {succes ? (
          <i className="fa fa-check-circle-o" style={{ fontSize: "24px" }}></i>
        ) : (
          <i className="fa fa-warning" style={{ fontSize: "24px" }}></i>
        )}
      </div>

      {step === "step1" && (
        <div className="checkoutStep">
          <User goNext={goNext} />
        </div>
      )}

      {step === "step2" && (
        <div>
          <Card
            setCardCollapse={setCardCollapse}
            goNext={goNext}
            goPrevious={goPrevious}
          />
        </div>
      )}
      {step === "step3" &&  (
        <div>
          <OrderStatus
            goPrevious={goPrevious}
            setShowCheckout={setShowCheckout}
            setStep={setStep}
          />
        </div>
      )}

     {
      ( step === "step1" || step === "step2") && (
      <Button
        backgroundColor={"#EF7463"}
        borderRadius={"5px"}
        color={"white"}
        width={"40%"}
        fontSize={"12px"}
        onClick={() => {setShowCheckout(false); setShowCart(true)}
        }
      >
        <p>Volver al Carrito</p>
      </Button>

       )
     }
    </div>
    </ActionSheet>
  );
};

export default Checkout;
