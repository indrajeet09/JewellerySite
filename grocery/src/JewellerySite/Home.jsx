import React,{useState,useEffect} from 'react'
import './Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from './Collection';
import True from './True';
import CertificateSlider from './CertificateSlider';
import Footer from './Footer';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#a987a2" }}
        onClick={onClick}
      />
    );
  }

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState("https://cdn.shopify.com/s/files/1/1115/6326/files/B1007_Diamond_Pendants_1002_thumb_cdacec1a-3aec-487f-b9be-4c723c3801ca.jpg?v=1602840981");

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment current image index in a loop
            setCurrentImageIndex(index => (index + 1) % images.length);
            // Change the image source
            setImageSrc(images[currentImageIndex]);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex]); // Include currentImageIndex in the dependency array

    const images = [
        "https://cdn.shopify.com/s/files/1/1115/6326/files/B1007_Diamond_Pendants_1002_thumb_cdacec1a-3aec-487f-b9be-4c723c3801ca.jpg?v=1602840981",
        "https://www.swashaa.com/cdn/shop/collections/woMen_s_Bracelet_Banner__-min.jpg?v=1689078127&width=5760",
        "https://www.swashaa.com/cdn/shop/collections/WORK_DAY_WOW.png?v=1689575706&width=2540",
        "https://blog.zcova.com/wp-content/uploads/2022/04/5-Ways-To-Personalise-Name-Jewellery-Blog-Banner-1.png",
       
    ];


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <Arrow/>,
        prevArrow: <Arrow/>,
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
    <div className='home'>
        <div className='homeimg'>
        <img src={imageSrc} alt="" height={'90%'} width={'100%'} />
        </div>
        <div className='cardhead'>
            <h2>BEST SELLERS</h2>
            </div>
            <div className="container">
      <Slider {...settings}>
        <div className='card'>
         <img src='https://i.pinimg.com/564x/0f/59/ac/0f59ac6038204fde17752f9ef2e6d1da.jpg' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
         <h3>Bracelet</h3>
            <p>Price :₹1999 /-</p>
         </div>
        </div>
        <div className='card'>
         <img src='https://i.pinimg.com/564x/34/af/6c/34af6c7c457bcb1013aa968ecdc5deb2.jpg' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
         <h3>Earring</h3>
            <p>Price :₹2999 /-</p>
         </div>
        </div>
        <div className='card'>
         <img src='/img/123.webp' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
         <h3>Rings</h3>
            <p>Price :₹5999 /-</p>
         </div>
        </div>
        <div className='card'>
         <img src='/img/img4.webp' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
            <h3>Bead Bracelet</h3>
            <p>Price :₹6999 /-</p>
         </div>
        </div>
        <div className='card'>
         <img src='https://i.pinimg.com/564x/66/95/0a/66950a28626f70b5e14038666b0ed9ea.jpg' alt='' className='w-80' height={'300px'}></img>
         <div className='card-body'>
            <h3>Mens Ring</h3>
            <p>Price :₹8999 /-</p>
         </div>
        </div>
      </Slider>
    </div>
    <Collection/>
        <True/>
        <CertificateSlider/>
        <Footer />
    </div>
  )
}

export default Home