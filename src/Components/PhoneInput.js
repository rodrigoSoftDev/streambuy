import React from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import es from "react-phone-input-2/lang/es.json";

import "./styling/PhoneInput.css";

const phoneConfigs = {
  masks: {
    ar: " .............",
    co: " .............",
    bo: " .............",
    it: " .............",
    uy: " ..............",
    br: " .............",
    uy: " ..............",
    es: " .............",
    us: " .............",
    cl: " .............",
    pe: " .............",
    ve: " .............",
    mx: " .............",
    py: " ..............",
  },
  countriesIncluded: ["ar", "bo", "co", "cl", "br", "ve", "pe", "uy", "py", "mx", "us", "es", "it"],
  inputStyle: {
    marginBottom: "17px",
  }
};

const PhoneInput = ({ phone, onChange, pattern, helpText, initialCountry }) => {
  return (
    <>
      <ReactPhoneInput
        containerClass="containerClass"
        country={initialCountry}
        inputStyle={!helpText ? phoneConfigs.inputStyle : null}
        isValid={pattern}
        localization={es}
        masks={phoneConfigs.masks}
        onlyCountries={phoneConfigs.countriesIncluded}
        placeholder="Ingrese su telefono"
        searchPlaceholder="Buscar"
        value={phone}
        onChange={onChange}
      />
      {helpText && <div className="helpText">{helpText}</div>}
    </>
  );
};

export default PhoneInput;