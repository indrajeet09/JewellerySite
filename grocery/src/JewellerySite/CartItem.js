import React, { useState } from 'react';
import './CartItem.css';

const CartItem = ({ product, removeFromCart, updateQuantity }) => {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    updateQuantity(product.id, quantity + 1); 
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQuantity(product.id, quantity - 1); 
    }
  };

  return (
    <div className="cart-item">
      <img src={product.imageUrl} alt={product.name} width={'200px'} />
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <h4>Price: ₹{product.price} /-</h4>
        <div className='qty'>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <button onClick={() => removeFromCart(product.id)} className="btn1">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
