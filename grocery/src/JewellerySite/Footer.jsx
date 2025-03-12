import React from 'react';
import './Footer.css'



const Footer = () => {
  return (
    <div>
      <footer>
     <div className="footer-info">
  <h2>MIMILUX Pvt. Ltd.</h2>
  <div>
    <p><i class="fas fa-map-marker-alt"></i> Awfis, Adani Inspire, unit 304, Bandra Kurla Complex Rd,</p>
    <p>G Block BKC, Bandra East, Mumbai - 400051</p>
  </div>
  <div>
    <p><i class="fas fa-envelope"></i> Email: darayus@truediamond.in</p>
    <p><i class="fas fa-phone"></i> Phone: +91 90760 09085</p>
  </div>
</div>
      <div className="footer-links">
        <h2>Categories</h2>
        <ul>
          <li><a href="/bracelet">Bracelets</a></li>
          <li><a href="/rings">Rings</a></li>
          <li><a href="/pendant">Pendants</a></li>
          <li><a href="/earrings">Earrings</a></li>
          <li><a href="/tennis-bracelets">Tennis Bracelets</a></li>
          <li><a href="/mens-collection">Men's Collection</a></li>
        </ul>
      </div>
      <div className="footer-info">
        <h2>Information</h2>
        <ul>
          <li><a href="/about">About us</a></li>
          <li><a href="/return-policy">Return policy</a></li>
          <li><a href="/buyback-policy">Buyback policy</a></li>
          <li><a href="/shipping-policy">Shipping Policy</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-conditions">Terms & Conditions</a></li>
        </ul>
      </div>
    </footer>
    <div className='copy'>Copyright © 2024 <span>Mimilux Diamonds Private Limited</span> </div>
    </div>
  
  );
}

export default Footer;
