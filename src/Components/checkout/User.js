import React, { useState } from "react";
import "../../Components/styling/User.css";
import Button from "../Button";

const User = ({goNext}) => {
  const initualStateValues = {
    name: "",
    lastname: "",
    address: "",
    postalCode: "",
  };
  const [values, setValues] = useState(initualStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="user">
      <form className="userForm">
        <input
          className=""
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleInputChange}
        />
        <input
          className=""
          type="text"
          name="lastname"
          placeholder="Apellido"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Direccion"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="postalCode"
          placeholder="Codigo Postal"
          onChange={handleInputChange}
        />
      </form>
      {values.name !== "" &&
        values.address !== "" &&
        values.lastname !== "" &&
        values.postalCode !== "" && (
            <div className="checkOutButtons">
            <Button>
              <p></p>
            </Button>
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
          </div>
        )}
    </div>
  );
};

export default User;
