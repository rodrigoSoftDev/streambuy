import React, { useEffect, useState } from "react";

import ProductImage from "./ProductImage";
import ProductOption from "./ProductOption";
import ItemCount from "./ItemCount";
import Button from "./Button";
import "./styling/Product.css";
import { ActionSheet } from "react-onsenui";
import { uniq, uniqBy, isEmpty } from "lodash";
import { readObject, setObject } from "../Utils/localStorage";

const Product = ({ product, setShowProduct }) => {
  const [variation, setVariation] = useState({});
  const [availableOptions, setAvaialableOptions] = useState(null);
  const [productSelected, setProductSelected] = useState(null);
  const [enableButton, setEnabledButton] = useState(false);
  const [images, setImages] = useState({
    main: product.image_1,
    second: product.image_2,
    third: product.image_3,
  });
  const [status, setStatus] = useState({});

  const addVariation = (variationName, variationValue) => 
    setVariation({...variation, [variationName]: variationValue})
  
  const getAllAvailableOptions = () => {
    return product && uniq([].concat.apply([], product.item_variation.map(item => {
      if (item.options_categories) return Object.keys(item.options_categories);
    })));
  };

  const getAvaiableOptionsValuesOf = option => {
    return product && uniqBy(product.item_variation.map(item => {
      if (item.options_categories[option]) return item.options_categories[option][0];
    }), "value");
  };

  const matcher = () => {
    var filter = product.item_variation;
    product && availableOptions.forEach(option => {
      filter = product.item_variation.filter(item => {
        const a1 = item.options_categories[option][0].item_option_category;
        const a2 = variation[option].item_option_category;
        return a2 === a1
      });
    });
    return filter[0];
  };

  const onSuccesMatch = product => {
    setImages({ main: product.image_1, second: product.image_2, third: product.image_3 });
    setProductSelected(product);
    setVariation({});
  };

  useEffect(() => {
    if (availableOptions && variation) {
      const allVariationsSelected = availableOptions.length === Object.keys(variation).length;
      if (allVariationsSelected) {
        setEnabledButton(true);
        const variationSelected = matcher();
        if (variationSelected) onSuccesMatch(variationSelected);
        else {
          setStatus({ type: "error", message: "product not founded"});
          alert("Producto no disponible");
        };
      };
    };
  }, [variation]);

  useEffect(() => {
    const allOptions = getAllAvailableOptions();
    setAvaialableOptions(allOptions);
    setImages({
      main: product.image_1,
      second: product.image_2,
      third: product.image_3
    })
  }, [product]);

  const onClickAddToCart = () => {
    if (!isEmpty(readObject("cart"))) setObject("cart", [...readObject("cart"), productSelected]);
    else setObject("cart", [productSelected]);
    setShowProduct(false);
  };


  return (
    <ActionSheet  isCancelable={false} isOpen={product ? true : false}> 
        <Button backgroundColor="transparent" position="fixed" right="15px" width="30px"> 
          <i 
            class="fa fa-angle-down" style={{ fontSize:"30px", color: "#5d5d5d"}} 
            onClick={() => setShowProduct(false)}
          />
        </Button>
        <ProductImage 
          addVariation={addVariation} 
          availableColors={getAvaiableOptionsValuesOf("Color")} 
          images={images} 
        />
        <div className="prodSubCon ">

          <div className="prodInfo">
            <div className="prodName">{product.name}</div>
            <div className="prodPrice">${product.price}</div>
          </div>
          <div className="prodDesc">{product.description}</div>
          {availableOptions && availableOptions.map(option => (
            <ProductOption 
              name={option} 
              list={getAvaiableOptionsValuesOf(option)}
              addVariation={addVariation} 
            />
          ))};
        </div>
        <div className="cartButton">
          <Button
              backgroundColor="#EF7463"
              borderRadius="5px"
              color="white"
              width="50%"
              margin="15px 15px 5px 0px"
              height="50px"
              fontSize="1em"
              disabled={!enableButton}
              onClick={onClickAddToCart}
          >
            Añadir al carrito
          </Button>
          <Button
              borderRadius="5px"
              color="#EF7463"
              width="50%"
              margin="15px 15px 5px 0px"
              border="solid 2px #EF7463"
              fontSize="1em"
              height="50px"
              onClick={() => setShowProduct(false)}
          > Seguir viendo
          </Button>
        </div>
      </ActionSheet>
  );
};

export default Product;
