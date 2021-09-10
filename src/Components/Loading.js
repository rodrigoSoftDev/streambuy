import React from "react";
import Loader from "react-loader-spinner";

import "./styling/Loading.css"

const Loading = () => (
    <div className="loaderContainer">
        <Loader
            type="Rings"
            color="#00BFFF"
            height={300}
            width={300} 
        />
        <img src="/streamBuy_logo.png" alt="logo" width={300}/>
  </div>
);

export default Loading;