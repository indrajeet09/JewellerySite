// AddToCart.js
import React from 'react';
import './Bracelet.css'

const AddToCart = ({ product, addToCart }) => {
  return (
    <div>
      <button onClick={() => addToCart(product)} className='add'>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
