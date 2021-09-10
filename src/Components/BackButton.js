import React from "react"
import Button from "./Button";

import "./styling/BackButton.css";

const BackButton = ({ onClick, title }) => (
    <div className="backContainer">
        <div className="backTitle">{title}</div>
        <Button backgroundColor="transparent" position="fixed" right="15px" width="30px"> 
            <i onClick={onClick} className="fa fa-angle-down backIcon" />
        </Button>
    </div>
);

export default BackButton;