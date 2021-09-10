import React, { useState } from 'react';
import "./styling/ColorChosser.css"

const ColorChooser = ({ availableColors, addVariation }) => {
  const [selected, setSelected] = useState(null);

  const onSelectType = (color) => {
    addVariation("Color", color);
    setSelected(color.value);
};

  const classType1 = value => selected === value ? "color-itemSelected" : "color-itemUnselected";

  return !availableColors ? null : (
    <div className="colorContainer">
      {availableColors.map(color => (
        <div
          className={classType1(color.value)}
          key={color.value}
          style={{ backgroundColor: color.value }}
          role="presentation"
          onClick={() => onSelectType(color)}
        /> 
      ))}
    </div>
  );
};


export default ColorChooser;