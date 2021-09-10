import React from 'react'
import "./styling/Button.css"


const Button = ({ 
    children, 
    backgroundColor, 
    borderRadius, 
    color, 
    onClick, 
    width,
    margin, 
    height, 
    border, 
    fontSize, 
    textAlign, 
    position,
    disabled, 
    right 
}) => (
    <div className="globalButton"
        style={{ 
            width: width || "30%",
            backgroundColor: disabled ? "#d6d6d6" : backgroundColor || "White", 
            borderRadius: borderRadius || "5px", 
            color: color || "Black",
            margin: margin || "none",
            height: height || "30px",
            border: border || "none",
            fontSize: fontSize || "16px",
            textAlign: textAlign,
            position: position || "relative",
            right: right || "none",
        }} 
        onClick={() => !disabled && onClick && onClick() }
    >
        {children}
    </div>
);


export default Button
