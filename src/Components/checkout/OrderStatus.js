import React, { useState } from "react";
import Button from "../Button";

import "../../Components/styling/OrderStatus.css";

const OrderStatus = ({ setStep, setShowCheckout }) => {
  const [success, setsuccess] = useState(true);

  return (
    <div className="orderStatus">
      {success ? (
        <div className="orderStatus" success={success} setsuccesss={setsuccess}>
          <div className="orderStatusIcon">
            <i
              className="fa fa-check-circle"
              style={{ fontSize: "150px", color: "green" }}
            ></i>
          </div>
          <div className="orderStatusTitle">
            <h5>Tu compra fue realizada con exito</h5>
          </div>
          <div>
            <Button
              backgroundColor={"#EF7463"}
              borderRadius={"5px"}
              color={"white"}
              width={"80%"}
              margin={"15px"}
              fontSize={"12px"}
              textAlign={"center"}
              onClick={() => {
                setShowCheckout(false);
                setStep("step1");
              }}
            >
              Seguir Viendo{" "}
            </Button>
          </div>
        </div>
      ) : (
        <div className="orderStatus">
          <div className="orderStatusIcon">

          <i
            className="fa fa-exclamation-circle"
            style={{ fontSize: "150px", color: "red" }}
          ></i>
          </div>
          <div className="orderStatusTitle">

          <h5 >Ocurrio un erorr con el pago volver a intentarlo</h5>
          </div>
          <Button
            backgroundColor={"#EF7463"}
            borderRadius={"5px"}
            color={"white"}
            width={"50%"}
            margin={"15px"}
            fontSize={"16px"}
            onClick={() => setStep("step2")}
            textAlign={"center"}
          >
            Volver atras{" "}
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderStatus;
