import React from 'react';
import { Link } from 'react-router-dom';
import './True.css';

const True = () => {
  return (
    <div>
      <div className='heading'><h2>TRUE DIAMOND PROMISE</h2></div>
      <div className='image-container'>
        <img src="img/8.webp" alt="" className="diamond-image" />
        <img src="img/9.webp" alt="" className="diamond-image" />
        <img src="img/10.webp" alt="" className="diamond-image" />
      </div>
     
      <Link to='/certificate' className='button'>VIEW SAMPLE CERTIFICATE</Link>
        
      <div className='offerimg'>
        <img src='img/offer.webp' alt='offerdeal' />
      </div>
    </div>
  );
}

export default True;
