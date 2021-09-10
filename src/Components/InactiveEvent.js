import React from "react";
import "./styling/InactiveEvent.css";

import { deletMinus } from "../Utils/globalHelpers";
import Button from "./Button";
import Powered from "./Powered"

const InactiveEvent = ({ logo, cover, time, text}) => {
  const days = time._data.days !== 0 ? time._data.days : "";
  return (
    <div style={{ textAlign: "center" }}>
      <div className="nextStream" style={{ backgroundImage: `url(${cover})` }}>
        <div className="nextStreamBody">
          <img alt="logo_Marca" height="auto" src={logo} width="250" />
          <h2 className="nextStreamTitle">{text}</h2>
          <h2 className="nextStreamCount">
            {deletMinus(`${days} dias `)}
            {deletMinus(`${time._data.hours}:`)}
            {deletMinus(`${time._data.minutes}:`)}
            {deletMinus(`${time._data.seconds}`)}
          </h2>
          <div className="buttonsContainer">
            <Button children="Agendar" backgroundColor="#ef6040" borderRadius="5px" color="white" width="65%" margin="auto" height="50px"/>
            <Button children="Compartir" backgroundColor="white" borderRadius="5px" color="#ef6040" width="65%" margin="auto" height="50px" border="solid 1px #ef6040"/>
          </div>
        </div>
      </div>
      <Powered />
    </div>
  );
};

export default InactiveEvent;
