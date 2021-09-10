import React from "react";

import "./styling/ProductImage.css"
import ColorChosser from "./ColorChosser";

const ProductImage = ({ images, availableColors, addVariation }) => {
    return (
        <div className="prodDetails">
            <div className="productImages">
                <img src={images.second} alt="..." className=" prodDetailsItem" />
                <img src={images.third} alt="..." className=" prodDetailsItem" />
            </div>
            <img src={images.main} alt="..." className="productPic" />
            <ColorChosser addVariation={addVariation} availableColors={availableColors} />
        </div>
    );
};

export default ProductImage;