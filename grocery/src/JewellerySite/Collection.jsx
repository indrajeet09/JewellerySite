import React from 'react';
import './Collection.css';
import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <div className='container'>
      <div className='heading'> <h2>OUR COLLECTION</h2></div>
       
      <div className='Ring'>
        <div className="image-container">
        <Link to="/rings">
            <img src="img/ring.jpg" alt="" height={'400px'} width={'500px'} style={{ borderRadius: '20px', position: 'relative' }} />
            <div className="image-title">RINGS</div>
          </Link>
        </div>
        <div className="image-container">
        <Link to="/earrings">
          <img src="img/earring.jpg" alt="" height={'400px'} width={'500px'} style={{ borderRadius: '20px', position: 'relative' }} />
          <div className="image-title">EARRINGS</div>
          </Link>
        </div>
        
      </div>
      <div className='bing'>
        <div className="image-container">
        <Link to="/pendant">
          <img src="img/3.webp" alt="" height={'400px'} width={'500px'} style={{ borderRadius: '20px', position: 'relative' }} />
          <div className="image-title">PENDENTS</div>
          </Link>
        </div>
        <div className="image-container">
        <Link to="/bracelet">
          <img src="img/bracelet.jpg" alt="" height={'400px'} width={'500px'} style={{ borderRadius: '20px', position: 'relative' }} />
          <div className="image-title">BRACELETS</div>
          </Link>
        </div>
      </div>
      <div className='sing'>
     
        <div className="image-container1">
        <Link to="/tennis-bracelets">
          <img src="img/5.webp" alt="" height={'400px'} width={'1020px'} style={{ borderRadius: '20px', position: 'relative' }} />
          <div className="image-title1">TENNIS BARCELETS</div>
          </Link>
        </div>
        <div className="image-container1">
        <Link to="/mens-collection">
          <img src="img/6.webp" alt="" height={'400px'} width={'1020px'} style={{ borderRadius: '20px', position: 'relative' }} />
          <div className="image-title1">MENS COLLECTION</div>
          </Link>
        </div>
        </div>
      
     

      <div className='ping'>
        <center><img src="img/7.webp" alt="" /></center>
      </div>
      
      
       <center className='bespoke'><h2>BESPOKE JEWELLERY</h2></center>  
       <div className='video-container '>
       <center><video src="img/ring.mp4" autoPlay loop muted></video></center>  
      </div>

    </div>
  )
}

export default  Collection
