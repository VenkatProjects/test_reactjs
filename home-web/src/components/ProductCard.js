import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={'./images/product.png'} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
    <button>Add to Cart</button>
  </div>
);

export default ProductCard;
