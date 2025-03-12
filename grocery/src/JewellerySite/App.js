import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './JewellerySite/Navbar';
import Home from './JewellerySite/Home';
import Collection from './JewellerySite/Collection';
import True from './JewellerySite/True';
import CertificateSlider from './JewellerySite/CertificateSlider';
import Bracelet from './JewellerySite/Bracelet'
import Pendant from './JewellerySite/Pendant'
import Rings from './JewellerySite/Rings'; 
import Earrings from './JewellerySite/Earrings'; 
import TennisBracelet from './JewellerySite/TennisBracelet'; 
import MensCollection from './JewellerySite/MensCollection'; 
import  CartProvider  from './JewellerySite/CartContext'; 
import CartPage from './JewellerySite/CartPage';



const App = () => {
  
   
  return (
    <CartProvider>
    <Router>
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} /> 
          <Route path="/true" element={<True />} /> 
          <Route path="/certificates" element={<CertificateSlider />} />
          <Route path="/bracelet" element={<Bracelet /> } /> 
          <Route path="/pendant" element={<Pendant/>} />
          <Route path="/rings" element={<Rings/>} />
          <Route path="/earrings" element={<Earrings/>} />
          <Route path="/tennis-bracelets" element={<TennisBracelet />} />
          <Route path="/mens-collection" element={<MensCollection/>} />
          <Route path="/cart" element={<CartPage />} />
       
         
        </Routes>
        
      </div>
    </Router>
    </CartProvider> 
  );
};

export default App;
