import React, { useEffect, useState } from "react";

import "./styling/ProductOption.css";
import { Select } from "react-onsenui";

const ProductOption = ({ name, list, addVariation }) => {
    const [selected, setSelected] = useState(null);
    const [selected3, setSelected3] = useState(null);

    const onSelectType2 = (name, cateogory) => {
        addVariation(name, cateogory);
        setSelected(cateogory.value);
    };

    const onSelectyType3 = (name, cateogory) => {
        addVariation(name, cateogory)
        setSelected(cateogory.value);
    };

    const classType2 = value => selected === value ? "itemSelected" : "itemUnselected";
    
    if (!list[0] || list[0].type === 1) return null 
    if (list[0].type === 2) return (
        <div className="prodSize">
            <div className="prodOptionName"> {name} </div>
            <div className="prodTalles">
                {list && list.map(option => (
                    <div
                        className={classType2(option.value)}
                        key={option.value}
                        onClick={() => onSelectType2(name, option)}
                    >
                        {option.value}
                    </div>
                ))}
            </div>
        </div>
    );
    if (list[0].type > 2) return (
        <div className="prodSize">
            <div className="prodOptionName"> {name} </div>
            <Select 
                value={selected3}
                modifier="prodOptionSelector"
                onChange={e => onSelectyType3(name, JSON.parse(e.target.value))}
            >
                {list && list.map(option => 
                    <option className value={JSON.stringify(option)}> {option.value} </option>)}
            </Select>
        </div>
    );
};

export default ProductOption