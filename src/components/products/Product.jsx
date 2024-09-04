import React from "react";
import ProductCard from "./ProductCard";
import "./Product.scss"

const Product = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((ürün) => (
        <ProductCard key={ürün.id} {...ürün} />
      ))}
    </div>
  );
};
export default Product;
