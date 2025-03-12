import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; // Import the faShoppingCart icon from the free-solid-svg-icons package

const CartPage = ({ cart, removeFromCart }) => {
  // Calculate total price initially
  const initialTotalPrice = cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  function calculateTotalPrice(cart) {
    return cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
  }

  function updateQuantity(productId, newQuantity) {
    const updatedCart = cart.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setTotalPrice(calculateTotalPrice(updatedCart));
    // Here, you can also update the state of your cart with the updatedCart if needed
  }

  return (
    <div className="cart">
      <h2><ShoppingCartOutlinedIcon  fontSize="large"/>  Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty " Shop Now ".</p>
      ) : (
        <div>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <div className="total-price">
            <p>Total Price: ₹{totalPrice.toFixed(2)} /-</p>
          </div>
          <div className='add1'>
            ORDER NOW
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
