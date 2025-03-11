import React from 'react';
import ProductCard from './ProductCard';

const Menu = () => {
  const products = [
    { id: 1, name: 'Chocolate Cake', image: './images/product.png', price: '$15' },
    { id: 2, name: 'Croissant', image: '/images/product2.jpg', price: '$3' },
    { id: 3, name: 'Baguette', image: '/images/product3.jpg', price: '$2' },
  ];

  return (
    <section>
      <h2>Our Menu</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
