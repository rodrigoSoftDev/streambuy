import React, { useState } from "react";
import Button from "../Button";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import "../../Components/styling/Card.css";

const Card = ({ setCardCollapse, goNext, goPrevious }) => {
  const initualStateValues = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };
  const [values, setValues] = useState(initualStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleInputFocus = (e) => {
    const value = e.target.name;
    setValues({ ...values, focus: value });
  };

  console.log(values);
  return (
    <div className="card">
      <div className="">
        <Cards
          cvc={values.cvc}
          expiry={values.expiry}
          focused={values.focus}
          name={values.name}
          number={values.number}
        />
      </div>
      <form className="cardInput">
        <input
         
          type="number"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          /* onFocus={handleInputFocus} */
        />
        <input
          
          type="text"
          name="name"
          placeholder="Nombre del titular"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div className="cardExpiry">
          <input
            type="number"
            name="expiry"
            placeholder="Fecha de Vencimiento"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            style={{marginRight:"2px"}}
          />
          <input
            type="number"
            name="cvc"
            placeholder="Codigo de segurdidad"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            style={{marginLeft:"2px"}}
          />
        </div>
      </form>
      <div className="checkOutButtons">
    
          <Button
         backgroundColor={"#EF7463"}
         borderRadius={"5px"}
         color={"white"}
         width={"40%"}
         fontSize={"12px"}
          onClick={goPrevious}
          >
            <p>Anterior</p>
          </Button>
      
        {values.cvc !== "" &&
          values.expiry !== "" &&
          values.number !== "" &&
          values.name !== "" && (
            <Button
            backgroundColor={"#EF7463"}
            borderRadius={"5px"}
            color={"white"}
            width={"40%"}
            fontSize={"12px"}
              onClick={goNext}
            >
              <p>Siguiente</p>
            </Button>
          )}
      </div>
    </div>
  );
};

export default Card;
