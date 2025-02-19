import React from 'react';

export const Products = (props) => {
  return (
    <div>
      <h1>Products</h1>
      <p>Features: {props.features}</p>
      <p>Prize: {props.prize}</p>
      <p>Product ID: {props.id}</p>
    </div>
  );
};

export default Products;
