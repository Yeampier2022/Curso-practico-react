import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
  return (
    <aside className="productDetail">
      <div className="productDetail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>

      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
