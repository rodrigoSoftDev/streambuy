import React, { useState } from "react";
import ReactCodeInput from "react-verification-code-input";
import { Collapse } from "react-collapse";
import { ActionSheet } from "react-onsenui";

import PhoneInput from "./PhoneInput";
import Button from "./Button";
import BackButton from "./BackButton";
import { login, validateToken, getUser } from "../api";

import "./styling/Phone.css";
import { readObject, setObject } from "../Utils/localStorage";

const Phone = ({
  organizationId,
  setShowPhone,
  showPhone,
}) => {
  const [phone, setPhone] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const [code, setCode] = useState("");
  const [secondaryToken, setSecondaryToken] = useState(null);
  const [status, setStatus] = useState({});

  const onSuccessLogin = data => {
    setSecondaryToken(data.token);
    setShowValidation(true);
  };

  const onSuccessTokenValidation = data => {
    setObject("user", { token: data.token })
    setStatus({ type: "success", message: "Logeado exitosamente."});
    setShowValidation(false);
    setShowPhone(false);
    getUser().then(({ response, success}) => onSuccesGetUser(success, response));
  };

  const onSuccesGetUser = (status, data) => {
    if (status) setObject("user", {...readObject("user"), data});
    else setStatus({ type: "error", message: "Info de usuario no encontrada"});
  };

  const onLogin = () => login(`+${phone}`, "r", organizationId).then(({ success, response }) => {
    if (success) {
      onSuccessLogin(response);
    } else setStatus({ type: "error", message: "Número de teléfono invalido." });
  });

  const tokenValidation = () => validateToken(code, secondaryToken).then(({ response, success }) => {
    if (success) onSuccessTokenValidation(response) ;
    else setStatus({ type: "error", message: "Codigo invalido."});
  });

  return (
    <ActionSheet isCancelable={false} isOpen={showPhone}> 
      <BackButton title="Ingresar" onClick={() => setShowPhone(false)}/>
      
      <Collapse isOpened={!showValidation}>
        <div style={{width:"100%", textAlign:"center"}}>
          <PhoneInput
            phone={phone}
            onChange={(phone) => setPhone(phone)}
            initialCountry="ar"
          />
          <Button
            borderRadius="10px"
            children="Ingresar"
            backgroundColor="#EF7463"
            borderRadius="5px"
            color="white"
            fontSize="12px"
            margin="auto"
            height="50px"
            disabled={phone.length < 13}
            onClick={onLogin}
          />
        </div>
      </Collapse>
      <Collapse isOpened={showValidation}>
        <div className="containerValidation">
          <div className="containerCode">
            <ReactCodeInput 
                className="reactCodeInput" 
                fields={6} 
                type="number" 
                onChange={code => setCode(code)} 
            />
          </div>
          <Button
              borderRadius="10px"
              children="Ingresar"
              backgroundColor="#EF7463"
              borderRadius="5px"
              color="white"
              fontSize="12px"
              margin="auto"
              height="50px"
              disabled={code.length < 6}
              onClick={tokenValidation}
          />
      </div>
      </Collapse>

     
    </ActionSheet>
  );
};

export default Phone;
