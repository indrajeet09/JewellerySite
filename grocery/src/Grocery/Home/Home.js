import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State for hamburger menu
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this width according to your design
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle hamburger menu
  };

  const closeMenu = () => {
    setShowMenu(false); // Close hamburger menu
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems, { name: product.name, price: product.price }];
    setCartItems(updatedCart);
    console.log(`Added ${product.name} to cart. Price: ${product.price}`);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    console.log('Total Price:', totalPrice); // Add this line to check the total price
    return totalPrice;
  };

  return (
    <div>
      <header className="header">
        <a href="#" className="logo"> Grocery </a>
        <div className="navbar">
          {/* Render navigation links in navbar */}
          <div className="nav-links">
            <a href="#home">home</a>
            <a href="#product">product</a>
            <a href="#about">about</a>
            <a href="#review">review</a>
            <a href="#blog">blog</a>
            <a href="#contact">contact</a>
          </div>
        </div>
        <div className="icons">
          <div><FontAwesomeIcon className="search-icon" icon={faSearch} /></div>
          <div onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingBasket} />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </div>
          {isMobile && (
            <div className="hamburger-menu" onClick={toggleMenu}>
              {showMenu ? (
                <FontAwesomeIcon icon={faTimes} onClick={closeMenu} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
              {/* Menu options */}
              <div className="menu-options">
                <a href="#home">home</a>
                <a href="#product">product</a>
                <a href="#about">about</a>
                <a href="#review">review</a>
                <a href="#blog">blog</a>
                <a href="#contact">contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {showCart && (
        <div className="cart-section">
          {cartItems.length > 0 ? (
            <div className="cart-box">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name}</span> - <span>{item.price}</span>
                  <button className='remove' onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))}
              <div className="total-price">
                <p>Total Price: ₹{calculateTotalPrice()}</p>
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      <section className="home" id="home">
        <div className="content">
          <h3>buy best <span>organic product</span> online </h3>
          <a href="#product" className="btn">get yours now</a>
        </div>
      </section>
      <section className="banner-container">
        <div className="banner">
          <img src="images/banner1.png" alt="" />
          <div className="content">
            <span>limited sales</span>
            <h3>Vegetables</h3>
            <a href="#" className="btn">shop now</a>
          </div>
        </div>
        <div className="banner">
          <img src="images/banner2.png" alt="" />
          <div className="content">
            <span>limited sales</span>
            <h3>fruits</h3>
            <a href="#" className="btn">shop now</a>
          </div>
        </div>
        <div className="banner">
          <img src="images/banner3.png" alt="" />
          <div className="content">
            <span>limited sales</span>
            <h3>assorted</h3>
            <a href="#" className="btn">shop now</a>
          </div>
        </div>
      </section>
      <Product addToCart={addToCart} />
    </div>
  );
}

export default Home;
