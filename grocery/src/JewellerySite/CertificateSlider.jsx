import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CertificateSlider.css'

const CertificateSlider = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
    
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
             
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
             
            }
          }
        ]
      };



  return (
    <div>
        <div className="container">
      <Slider {...settings}>
        <div className='card'>
         <img src='/img/12.webp' alt='' className='w-100' height={'300px'}></img>
         
        </div>
        <div className='card'>
         <img src='/img/13.webp' alt='' className='w-100' height={'300px'}></img>
         
        </div>
        <div className='card'>
         <img src='/img/14.webp' alt='' className='w-100' height={'300px'}></img>
        
        </div>
        <div className='card'>
         <img src='/img/15.webp' alt='' className='w-100' height={'300px'}></img>
        
        </div>
        <div className='card'>
         <img src='/img/16.webp' alt='' className='w-100' height={'300px'}></img>
        
        </div>
      </Slider>
    </div>
    <center className='head'><h2>ARE LAB DIAMONDS REAL?</h2></center>
       <div className='labimage'>
        
        <img src="img/lab.webp" alt="" width={'100%'}/>
       </div>
       <h2>SHOP YOUR VIBE</h2>
       <div className='videocard'>
                        <video controls autoPlay loop muted width={'330px'} height={'600px'}>
                            <source src='img/vid2.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='videocard'>
                        <video controls autoPlay loop muted width={'330px'} height={'600px'}>
                            <source src='img/vid1.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='videocard'>
                        <video controls autoPlay loop muted width={'330px'} height={'600px'}>
                            <source src='img/vid.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='videocard'>
                        <video controls autoPlay loop muted width={'330px'} height={'600px'}>
                            <source src='img/VID3.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>

    </div>
  )
}

export default CertificateSlider