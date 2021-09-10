import React, { useEffect, useState } from "react";
import "./styling/ProductList.css"
import { getFeatured } from "../firesbase";

import StickyImage from "./StickyImage";

const ProductList = ({ productList, showProduct, eventId, organizationId }) => {
  const [products, setProducts] = useState(productList);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const top = `${window.screen.height - (window.screen.height * 0.9)}px`;

  const extractFeatured = (data, list) => {
    data.forEach (doc => {
      const fproduct = products.find(p => p.id === doc.id);
      if (fproduct) {
        fproduct.created = doc.data().created;
        fproduct.sticky = true;
        list.push(fproduct)
      };
    });
  };

  const deleteFeaturedFromProducts = featured =>
   products.filter(p => !featured.map(f => f.id).includes(p.id));
  
  
  useEffect(() => {
    getFeatured(organizationId, eventId).then(data => {
      var tempFeatured = [];
      extractFeatured(data, tempFeatured);
      setFeatured(tempFeatured);
      setProducts(deleteFeaturedFromProducts(tempFeatured))
      setLoading(false);
    });
  }, []);

  useEffect(() => [loading]);

  const firstItem = product => products[0].id === product.id;

  return(
    <div className="productsList" style={{ marginTop: top }}>
    {(featured.concat(products)).map(product => 
          <div key={product.id}>
            {!firstItem(product) && <div className="productSeparator"/>}
              {product.sticky 
                ? <StickyImage image={product.image_1} onClick={() => showProduct(product)}/>
                :  <img src={product.image_1} alt="..." className="pfpic" onClick={() => showProduct(product)} />  
              }
          </div>
      )}
    </div>
  );
};

export default ProductList;
