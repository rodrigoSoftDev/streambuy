import React from 'react';
import "./styling/Settings.css";
import { isLogged } from '../Utils/globalHelpers';

const Settings = ({ setShowCart, setShowPhone }) => {
  const userLogged = isLogged();

  const handleClick = () => {
    if (!userLogged) setShowPhone (true);
    else  setShowCart(true);
  };

  const heartIconStyle = {
    color: "white",
    fontSize: "1.5em",
    marginBottom: "2px",
  };
  
  const cartIconStyle = { ...heartIconStyle, marginBottom: "2px"}

  return (
    <div className="settingsIcons">
      <div className="settingsBag" onClick={handleClick}>
        <i className="fas fa-shopping-bag" style={heartIconStyle}/>
      </div>
      <div className="settingsUser">
        <i className="fas fa-heart" style={cartIconStyle}/>
      </div>
    </div>
  );
};

export default Settings
