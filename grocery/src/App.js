import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './JewellerySite/Navbar';
import Home from './JewellerySite/Home';
import Collection from './JewellerySite/Collection';
import True from './JewellerySite/True';
import CertificateSlider from './JewellerySite/CertificateSlider'; 
import CartPage from './JewellerySite/CartPage';
import BraceletProducts from './JewellerySite/BraceletProducts';
import EarringProducts from './JewellerySite/EarringProducts';
import MensCollectionProducts from './JewellerySite/MensCollectionProducts';
import RingProducts from './JewellerySite/RingProducts';
import TennisBraceletProducts from './JewellerySite/TennisBraceletProducts';
import PendantProducts from './JewellerySite/PendantProducts';
import Certificate from './JewellerySite/Certificate';
import SignIn from './JewellerySite/SignIn';
import Registration from './JewellerySite/Registration'
import Wishlist from './JewellerySite/Wishlist';
import About from './JewellerySite/Info/About';
import Return from './JewellerySite/Info/Return';
import ShippingPolicy from './JewellerySite/Info/ShippingPolicy'
import BuybackPolicy from './JewellerySite/Info/BuybackPolicy'
import PrivacyPolicy from './JewellerySite/Info/PrivacyPolicy'
import TermsConditons from './JewellerySite/Info/TermsCondition'



const App = () => {
   const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartCount, setCartCount] = useState(0);
  


  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    const savedCartCount = localStorage.getItem('cartCount');
    if (savedCartCount !== null) {
      setCartCount(parseInt(savedCartCount));
    }
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    const newCartCount = cartCount + 1;
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1; // Assuming each product object has a 'quantity' property
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, {...product, quantity: 1}]); // Assuming each product object has a 'quantity' property
  
      // Update the cart count only if a new product is added
      const newCartCount = cartCount + 1;
      setCartCount(newCartCount);
      localStorage.setItem('cartCount', newCartCount);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    setCartCount(cartCount - 1);
    const productToRemove = cart.find((item) => item.id === productId);
    if (!productToRemove) return;
  
  
    // Decrease the cart count by the quantity of the removed product
    const newCartCount = cartCount - productToRemove.quantity;
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  };
 

  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem('wishlistItems')) || []
  );

  // Update localStorage whenever wishlistItems changes
  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };
 
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(updatedWishlist);
  };


  const productsPage1 = [
    {
      id: 1,
      name: "Gold Chain Bracelet",
      description: "Elegant gold chain bracelet for a classic look.",
      price: 299.99,
      imageUrl: "https://i.pinimg.com/564x/0f/59/ac/0f59ac6038204fde17752f9ef2e6d1da.jpg"
    },
    {
      id: 2,
      name: "Pearl Strand Bracelet",
      description: "Timeless pearl bracelet for a sophisticated style.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/b9/0f/27/b90f27e80cd1acb49fa9acbaa28917a9.jpg"
    },
    {
      id: 3,
      name: "Silver Cuff Bracelet",
      description: "Chic silver cuff bracelet for a modern touch.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/b4/5b/a7/b45ba7563961a2344576bba9c51d55b2.jpg"
    },
    {
      id: 4,
      name: "Rose Gold Bangle",
      description: "Beautiful rose gold bangle with intricate design.",
      price: 349.99,
      imageUrl: "https://i.pinimg.com/564x/94/ee/30/94ee30595c87704ae36ff10e7e223fad.jpg"
    },
    {
      id: 5,
      name: "Crystal Bead Bracelet",
      description: "Delicate bracelet adorned with shimmering crystal beads.",
      price: 79.99,
      imageUrl: "https://i.pinimg.com/564x/d4/19/5b/d4195be3e2077794b31140673e1c88aa.jpg"
    },
    {
      id: 6,
      name: "Leather Wrap Bracelet",
      description: "Trendy leather wrap bracelet for a casual yet stylish look.",
      price: 89.99,
      imageUrl: "https://i.pinimg.com/564x/c8/91/57/c89157823928e95be1ceb151be1b2032.jpg"
    },
    {
      id: 7,
      name: "Sapphire Tennis Bracelet",
      description: "Exquisite tennis bracelet featuring stunning sapphires.",
      price: 1299.99,
      imageUrl: "https://i.pinimg.com/564x/ed/18/ba/ed18bad861fb5798988d849fb2d55e85.jpg"
    },
    {
      id: 8,
      name: "Emerald Cuff Bracelet",
      description: "Luxurious cuff bracelet adorned with vibrant emeralds.",
      price: 1799.99,
      imageUrl: "https://i.pinimg.com/564x/dc/47/da/dc47da85af1dbb98f5d1d82b65b7ae18.jpg"
    },
    {
      id: 9,
      name: "Sterling Silver Charm Bracelet",
      description: "Charming sterling silver bracelet with assorted charms.",
      price: 119.99,
      imageUrl: "https://i.pinimg.com/564x/63/01/ef/6301ef69fa9039ca9d54f2889dfe91bd.jpg"
    },
    {
      id: 10,
      name: "Gemstone Link Bracelet",
      description: "Elegant link bracelet featuring various gemstones.",
      price: 399.99,
      imageUrl: "https://i.pinimg.com/564x/b2/c2/ac/b2c2ac0ea0b1e1fb2175a24daef0e601.jpg"
    },
    {
      id: 11,
      name: "Charm Bangle Bracelet",
      description: "Adorable bangle bracelet with an assortment of charms.",
      price: 69.99,
      imageUrl: "https://i.pinimg.com/564x/da/b2/3e/dab23e9b4eaea8d847ae50cac1ac0085.jpg"
    },
    {
      id: 12,
      name: "Infinity Symbol Bracelet",
      description: "Trendy bracelet featuring the infinity symbol.",
      price: 59.99,
      imageUrl: "https://i.pinimg.com/564x/e2/e2/14/e2e214d95af8dd12b12e56800eba2b54.jpg"
    },
    {
      id: 13,
      name: "Tanzanite Tennis Bracelet",
      description: "Exquisite tennis bracelet featuring rare tanzanite gemstones.",
      price: 1599.99,
      imageUrl: "https://i.pinimg.com/564x/9c/a8/88/9ca888382a87a5b1611edc3e3d188adc.jpg"
    },
    {
      id: 14,
      name: "Chunky Chain Bracelet",
      description: "Bold and stylish chunky chain bracelet.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/a0/bc/cd/a0bccd16a26e92c520a238e7ebac603c.jpg"
    },
    {
      id: 15,
      name: "Engraved Cuff Bracelet",
      description: "Personalized cuff bracelet with custom engraving.",
      price: 89.99,
      imageUrl: "https://i.pinimg.com/564x/69/71/a1/6971a13e0e29c58e7fcbc9ac144e8a68.jpg"
    },
    {
      id: 16,
      name: "Birthstone Charm Bracelet",
      description: "Charming bracelet featuring birthstone charms for each month.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/10/0d/15/100d15b3ca355fafb228232fc01ffcaa.jpg"
    },
    {
      id: 17,
      name: "Hematite Bead Bracelet",
      description: "Stylish bracelet made with hematite beads.",
      price: 49.99,
      imageUrl: "https://i.pinimg.com/564x/17/5f/0f/175f0f835edbb897324dbc56a34f4d98.jpg"
    },
    {
      id: 18,
      name: "Vintage Pearl Bracelet",
      description: "Timeless vintage-inspired pearl bracelet.",
      price: 219.99,
      imageUrl: "https://i.pinimg.com/564x/66/09/1b/66091bb5b8346ba65299665635dc1b52.jpg"
    },
    {
      id: 19,
      name: "Diamond Halo Bracelet",
      description: "Elegant bracelet featuring diamonds surrounded by halos of smaller diamonds.",
      price: 1899.99,
      imageUrl: "https://i.pinimg.com/564x/34/e9/0f/34e90f2e8b4e0d995ce4cb3ef178c26f.jpg"
    },
    {
      id: 20,
      name: "Diamond Tennis Bracelet",
      description: "Stunning tennis bracelet featuring sparkling diamonds.",
      price: 999.99,
      imageUrl: "https://i.pinimg.com/564x/5a/ab/46/5aab46b2967c2cf831f40bec6e5ec31c.jpg"
    },
  ];

  const productsPage2 = [
    {
      id: 21,
      name: "Diamonds Stud Earring",
      description: "Classic diamond stud earrings for everyday elegance.",
      price: 899.99,
      imageUrl: "https://i.pinimg.com/564x/34/af/6c/34af6c7c457bcb1013aa968ecdc5deb2.jpg"
    },
    {
      id: 22,
      name: "Sapphire Drop Earrings",
      description: "Elegant drop earrings featuring vibrant sapphires.",
      price: 1299.99,
      imageUrl: "https://i.pinimg.com/564x/aa/28/f9/aa28f978c71f5bbaf28060f2ede0835d.jpg"
    },
    {
      id: 23,
      name: "Rose Gold Dangle Earrings",
      description: "Chic dangle earrings crafted in rose gold.",
      price: 399.99,
      imageUrl: "https://i.pinimg.com/564x/4f/f7/4e/4ff74eb540d7bf4e6438fb76455a8f8c.jpg"
    },
    {
      id: 24,
      name: "Emerald Cluster Earrings",
      description: "Gorgeous cluster earrings adorned with vibrant emeralds.",
      price: 1599.99,
      imageUrl: "https://i.pinimg.com/564x/5f/a4/23/5fa4235522b388fe4f594d2d079b589c.jpg"
    },
    {
      id: 25,
      name: "Pearl Stud Earrings",
      description: "Classic pearl stud earrings for timeless elegance.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/d1/98/e9/d198e9c89de48ac9dc39f8628a4f945c.jpg"
    },
    {
      id: 26,
      name: "Tanzanite Drop Earrings",
      description: "Exquisite drop earrings featuring rare tanzanite gemstones.",
      price: 1799.99,
      imageUrl: "https://i.pinimg.com/564x/e8/b7/f4/e8b7f45b93a1ae17d5cf4378a04fbb05.jpg"
    },
    {
      id: 27,
      name: "Infinity Symbol Earrings",
      description: "Symbolic earrings featuring the infinity symbol.",
      price: 79.99,
      imageUrl: "https://i.pinimg.com/564x/57/f8/2d/57f82d18523e5e732e09bb2c60cbbfcc.jpg"
    },
    {
      id: 28,
      name: "Halo Diamond Earrings",
      description: "Elegant halo diamond earrings for special occasions.",
      price: 2999.99,
      imageUrl: "https://i.pinimg.com/564x/a6/eb/ef/a6ebefe9f67e97ef3e6618ac90a7885f.jpg"
    },
    {
      id: 29,
      name: "Gold Hoop Earrings",
      description: "Simple and versatile gold hoop earrings.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/ee/ee/9b/eeee9b65a0b20cd17a6379b0a7cb1caf.jpg"
    },
    {
      id: 30,
      name: "Ruby Stud Earrings",
      description: "Bold ruby stud earrings for a pop of color.",
      price: 1399.99,
      imageUrl: "https://i.pinimg.com/564x/cf/1e/87/cf1e876ad931ff7a099e6a006417f16a.jpg"
    },
    {
      id: 31,
      name: "Sterling Silver Huggie Earrings",
      description: "Charming huggie earrings crafted in sterling silver.",
      price: 59.99,
      imageUrl: "https://i.pinimg.com/564x/c3/f0/d8/c3f0d8b3195b732c46c8a3823832704b.jpg"
    },
    {
      id: 32,
      name: "Crystal Chandelier Earrings",
      description: "Statement chandelier earrings adorned with sparkling crystals.",
      price: 499.99,
      imageUrl: "https://i.pinimg.com/564x/0c/a8/9e/0ca89e649a39fa509e2d2a1cfa596af7.jpg"
    }
  ];

  const productsPage3 = [
    {
      id: 57,
      name: "Men's Diamond Ring",
      description: "Stylish ring for men featuring a bold diamond.",
      price: 999.99,
      imageUrl: "https://i.pinimg.com/564x/66/95/0a/66950a28626f70b5e14038666b0ed9ea.jpg"
    },
    {
      id: 58,
      name: "Men's Gold Chain",
      description: "Classic gold chain necklace for men.",
      price: 599.99,
      imageUrl: "https://i.pinimg.com/564x/fa/10/d7/fa10d7f782f86d9600c275373f4b16df.jpg"
    },
   
    {
      id: 60,
      name: "Men's Titanium Watch",
      description: "Sleek titanium watch for men with a modern design.",
      price: 799.99,
      imageUrl: "https://i.pinimg.com/564x/57/58/67/5758676042a71c3f7268529b2a51292f.jpg"
    },
    {
      id: 61,
      name: "Men's Cufflinks",
      description: "Sophisticated cufflinks for formal occasions.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/91/fb/29/91fb29d68567ee8406fbfe1972f3b0cf.jpg"
    },
    {
      id: 62,
      name: "Men's Onyx Ring",
      description: "Bold ring for men featuring a black onyx gemstone.",
      price: 499.99,
      imageUrl: "https://i.pinimg.com/564x/56/71/73/56717374e72c042fee89ecb28d9b0149.jpg"
    },
    {
      id: 63,
      name: "Men's Stainless Steel Bracelet",
      description: "Durable stainless steel bracelet for everyday wear.",
      price: 79.99,
      imageUrl: "https://i.pinimg.com/564x/16/71/76/1671765029ed884154adf18364be0299.jpg"
    },
    {
      id: 59,
      name: "Men's Leather Bracelet",
      description: "Trendy leather bracelet for men.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/44/68/d4/4468d47d1acdc547a055948de59ed9cb.jpg"
    },
    {
      id: 64,
      name: "Men's Dog Tag Necklace",
      description: "Masculine dog tag necklace for a rugged look.",
      price: 69.99,
      imageUrl: "https://i.pinimg.com/564x/c0/eb/0c/c0eb0c7a8b9b420c9a4f0798e9852687.jpg"
    },
    {
      id: 65,
      name: "Men's Signet Ring",
      description: "Classic signet ring for men with personalized engraving options.",
      price: 299.99,
      imageUrl: "https://i.pinimg.com/564x/8f/84/ad/8f84ad48f391bc1623b59ddff2f22830.jpg"
    },
    {
      id: 66,
      name: "Men's Carbon Fiber Bracelet",
      description: "Sporty bracelet for men featuring carbon fiber accents.",
      price: 129.99,
      imageUrl: "https://i.pinimg.com/564x/f0/93/26/f093269793ab2e1ccbb6b234cfc43f0d.jpg"
    },
    {
      id: 67,
      name: "Men's Chain Bracelet",
      description: "Stylish chain bracelet for men in sterling silver.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/f4/95/09/f49509d371f9d43e0625af242a842561.jpg"
    },
    {
      id: 68,
      name: "Men's Cross Pendant",
      description: "Masculine cross pendant for men in stainless steel.",
      price: 89.99,
      imageUrl: "https://i.pinimg.com/564x/b9/57/ae/b957ae61d199b2078e1567f33e642ff0.jpg"
    }
  
  ];

  const productsPage4 = [
 
    {
      id: 45,
      name: "Sapphire Tennis Bracelet",
      description: "Exquisite tennis bracelet featuring vibrant sapphires.",
      price: 1499.99,
      imageUrl: "https://i.pinimg.com/564x/19/7b/b6/197bb64a73160287c1143a52cc504a1f.jpg"
    },
    {
      id: 46,
      name: "Rose Gold Tennis Bracelet",
      description: "Chic tennis bracelet crafted in rose gold.",
      price: 1299.99,
      imageUrl: "https://i.pinimg.com/564x/18/11/88/181188b7178ddddec2f3e7b5bd331af8.jpg"
    },
    {
      id: 47,
      name: "Pearl Tennis Bracelet",
      description: "Classic tennis bracelet featuring lustrous pearls.",
      price: 999.99,
      imageUrl: "https://i.pinimg.com/564x/b0/38/ab/b038ab6e027ca2f627c4495705c9c175.jpg"
    },
    {
      id: 48,
      name: "Tanzanite Tennis Bracelet",
      description: "Exquisite tennis bracelet featuring rare tanzanite gemstones.",
      price: 2299.99,
      imageUrl: "https://i.pinimg.com/564x/53/85/56/53855682fe20c9e46658b8fc82f6f473.jpg"
    },
    {
      id: 49,
      name: "Infinity Symbol Tennis Bracelet",
      description: "Symbolic tennis bracelet featuring the infinity symbol.",
      price: 799.99,
      imageUrl: "https://i.pinimg.com/564x/fc/06/2e/fc062e850b04df5a2511c3ef70eaba84.jpg"
    },
    {
      id: 50,
      name: "Ruby Tennis Bracelet",
      description: "Bold tennis bracelet featuring vibrant rubies.",
      price: 1899.99,
      imageUrl: "https://i.pinimg.com/564x/32/ee/65/32ee65d9ba241f711a754b9e4e50e006.jpg"
    },
    {
      id: 51,
      name: "Sterling Silver Tennis Bracelet",
      description: "Classic tennis bracelet crafted in sterling silver.",
      price: 499.99,
      imageUrl: "https://i.pinimg.com/564x/8e/59/38/8e59384f7636d6615519cfb877725221.jpg"
    },
    {
      id: 52,
      name: "Halo Diamond Tennis Bracelet",
      description: "Elegant tennis bracelet featuring diamonds surrounded by halos.",
      price: 2599.99,
      imageUrl: "https://i.pinimg.com/564x/af/97/c8/af97c8a349676b2d03c1f3896da908a0.jpg"
    },
    {
      id: 53,
      name: "Crystal Tennis Bracelet",
      description: "Dazzling tennis bracelet adorned with sparkling crystals.",
      price: 999.99,
      imageUrl: "https://i.pinimg.com/564x/a7/3d/12/a73d1268f3e9813d63bfd6e55f1485e0.jpg"
    },
    {
      id: 54,
      name: "Diamond Tennis Bracelet",
      description: "Stunning tennis bracelet featuring sparkling diamonds.",
      price: 1999.99,
      imageUrl: "https://i.pinimg.com/564x/5a/ab/46/5aab46b2967c2cf831f40bec6e5ec31c.jpg"
    },
    {
      id: 55,
      name: "Gold Tennis Bracelet",
      description: "Elegant tennis bracelet crafted in gold.",
      price: 899.99,
      imageUrl: "https://i.pinimg.com/736x/d3/20/7b/d3207b02afe1128e777132318d5ff1b4.jpg"
    },
    {
      id: 56,
      name: "Emerald Tennis Bracelet",
      description: "Luxurious tennis bracelet adorned with vibrant emeralds.",
      price: 1799.99,
      imageUrl: "https://i.pinimg.com/564x/ec/2b/92/ec2b92e0111b058a9c127df31adcb777.jpg"
    }

  ];
   
  const productsPage5 = [
    {
      id: 33,
      name: "Diamond Solitaire Ring",
      description: "Classic solitaire ring featuring a sparkling diamond.",
      price: 1499.99,
      imageUrl: "https://i.pinimg.com/564x/55/57/a8/5557a8472592b780ae6b7c2f7c53bd71.jpg"
    },
    {
      id: 34,
      name: "Gold Band Ring",
      description: "Simple and elegant gold band ring.",
      price: 299.99,
      imageUrl: "https://i.pinimg.com/564x/8a/2c/ed/8a2ced803b47ba97e0df29a1ce1708f8.jpg"
    },
    {
      id: 35,
      name: "Sapphire Halo Ring",
      description: "Exquisite ring featuring a vibrant sapphire surrounded by a halo of diamonds.",
      price: 1799.99,
      imageUrl: "https://i.pinimg.com/564x/3e/aa/19/3eaa1903fdf868e74d2d6531737597d9.jpg"
    },
    {
      id: 36,
      name: "Rose Gold Promise Ring",
      description: "Beautiful rose gold ring symbolizing a promise of love and commitment.",
      price: 499.99,
      imageUrl: "https://i.pinimg.com/564x/40/d5/61/40d561e9544a25d994a47b3b4b861bad.jpg"
    },
    {
      id: 37,
      name: "Emerald Cut Engagement Ring",
      description: "Elegant engagement ring featuring an emerald-cut diamond.",
      price: 2899.99,
      imageUrl: "https://i.pinimg.com/736x/5c/51/ec/5c51ecb11246955c595636cf0f50d0fb.jpg"
    },
    {
      id: 38,
      name: "Vintage Style Ring",
      description: "Vintage-inspired ring with intricate detailing.",
      price: 899.99,
      imageUrl: "https://i.pinimg.com/564x/bb/96/a8/bb96a849573d4f7f2dbba9e090681939.jpg"
    },
    {
      id: 39,
      name: "Pearl Cluster Ring",
      description: "Chic ring adorned with a cluster of pearls.",
      price: 349.99,
      imageUrl: "https://i.pinimg.com/564x/bd/90/41/bd9041cb1015f315e2b1b7f859795aac.jpg"
    },
    {
      id: 40,
      name: "Tanzanite and Diamond Ring",
      description: "Exquisite ring featuring a rare tanzanite gemstone accented with diamonds.",
      price: 2199.99,
      imageUrl: "https://i.pinimg.com/564x/6a/26/c7/6a26c74d2da1d60c914fc4f84cbb4c23.jpg"
    },
    {
      id: 41,
      name: "Infinity Symbol Ring",
      description: "Stylish ring featuring an infinity symbol design.",
      price: 99.99,
      imageUrl: "https://i.pinimg.com/564x/a8/b1/91/a8b191c2eda4771e9e534d68a4d32408.jpg"
    },
    {
      id: 42,
      name: "Ruby Cluster Ring",
      description: "Bold ring featuring a cluster of vibrant rubies.",
      price: 1599.99,
      imageUrl: "https://i.pinimg.com/564x/34/84/b2/3484b289f75ecb259c6a5cce211147d2.jpg"
    },
    {
      id: 43,
      name: "Sterling Silver Heart Ring",
      description: "Adorable ring with a heart-shaped design crafted in sterling silver.",
      price: 79.99,
      imageUrl: "https://i.pinimg.com/564x/a2/e2/37/a2e237e8d07dddded000854367d5ef7e.jpg"
    },
    {
      id: 44,
      name: "Eternity Band Ring",
      description: "Elegant eternity band ring featuring a continuous row of diamonds.",
      price: 1499.99,
      imageUrl: "https://i.pinimg.com/736x/84/e4/ab/84e4ab94940fd9299fd303aceba2ca6c.jpg"
    }
  
  ];

  const productsPage6 = [
    {
      id: 69,
      name: "Diamond Solitaire Pendant",
      description: "Classic solitaire pendant featuring a sparkling diamond.",
      price: 999.99,
      imageUrl: "https://i.pinimg.com/564x/f8/80/5f/f8805f46d7471fc89025d48b992dc198.jpg"
    },
    {
      id: 70,
      name: "Gold Heart Pendant",
      description: "Elegant gold pendant with a heart-shaped design.",
      price: 199.99,
      imageUrl: "https://i.pinimg.com/564x/8b/53/07/8b53074024fd7af02b7ab406f1a737cd.jpg"
    },
    {
      id: 71,
      name: "Sapphire and Diamond Pendant",
      description: "Exquisite pendant featuring a vibrant sapphire surrounded by diamonds.",
      price: 1499.99,
      imageUrl: "https://i.pinimg.com/564x/52/6a/69/526a697967dc751266aad950498d66ee.jpg"
    },
    {
      id: 72,
      name: "Rose Gold Cross Pendant",
      description: "Beautiful rose gold pendant in the shape of a cross.",
      price: 299.99,
      imageUrl: "https://i.pinimg.com/564x/10/97/cc/1097ccc16d0c25518f321c936824b2f0.jpg"
    },
    {
      id: 73,
      name: "Emerald Halo Pendant",
      description: "Chic pendant featuring an emerald surrounded by a halo of diamonds.",
      price: 799.99,
      imageUrl: "https://i.pinimg.com/564x/5a/1c/54/5a1c54076a8f91979632d84b950e13d5.jpg"
    },
    {
      id: 74,
      name: "Vintage Style Locket",
      description: "Vintage-inspired locket pendant with intricate detailing.",
      price: 499.99,
      imageUrl: "https://i.pinimg.com/564x/61/d5/c6/61d5c64e650f9505e1c1291830c83453.jpg"
    },
    {
      id: 75,
      name: "Pearl Drop Pendant",
      description: "Graceful pendant featuring a single pearl suspended from a chain.",
      price: 149.99,
      imageUrl: "https://i.pinimg.com/564x/f4/42/e5/f442e5555bfa5a8b28a3cc1007d3366a.jpg"
    },
    {
      id: 76,
      name: "Tanzanite Pendant",
      description: "Exquisite pendant featuring a rare tanzanite gemstone.",
      price: 1299.99,
      imageUrl: "https://i.pinimg.com/736x/ba/b5/cd/bab5cd01d90972e1476b2c14bd7e2bac.jpg"
    },
    {
      id: 77,
      name: "Infinity Symbol Pendant",
      description: "Symbolic pendant featuring the infinity symbol.",
      price: 99.99,
      imageUrl: "https://i.pinimg.com/564x/af/ae/7c/afae7cbb78bae1d0daa75cd62bc4b414.jpg"
    },
    {
      id: 78,
      name: "Ruby Cluster Pendant",
      description: "Bold pendant featuring a cluster of vibrant rubies.",
      price: 1599.99,
      imageUrl: "https://i.pinimg.com/736x/f3/ee/6d/f3ee6dc7fdb117d5e9846a289afef31c.jpg"
    },
    {
      id: 79,
      name: "Sterling Silver Key Pendant",
      description: "Charming pendant in the shape of a key crafted in sterling silver.",
      price: 79.99,
      imageUrl: "https://i.pinimg.com/564x/b9/1f/79/b91f7925ad645b0a6fe87be85843820b.jpg"
    },
    {
      id: 80,
      name: "Halo Diamond Pendant",
      description: "Elegant pendant featuring a halo of diamonds around the center stone.",
      price: 1999.99,
      imageUrl: "https://i.pinimg.com/564x/48/62/26/4862261df94cc675cd9c8ab4162f38eb.jpg"
  }

  ];
  return (

    <Router>
      <div>
        <Navbar cartCount={cartCount}  />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} /> 
          <Route path="/true" element={<True />} /> 
          <Route path="/certificates" element={<CertificateSlider />} />
          <Route path="/bracelet" element={<BraceletProducts products={productsPage1} addToCart={addToCart} addToWishlist={addToWishlist}  />} />
          <Route path="/earrings" element={<EarringProducts products={productsPage2} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/mens-collection" element={<MensCollectionProducts products={productsPage3} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/rings" element={<RingProducts products={productsPage5} addToCart={addToCart} addToWishlist={addToWishlist} />}  />
          <Route path="/tennis-bracelets" element={<TennisBraceletProducts products={productsPage4} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/pendant" element={<PendantProducts products={productsPage6} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>} />
          <Route path="/certificate" element={<Certificate/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/return-policy" element={<Return/>} />
          <Route path="/shipping-policy" element={<ShippingPolicy/>} />
          <Route path="/buyback-policy" element={<BuybackPolicy/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-conditions" element={<TermsConditons/>}/>
          


         
        </Routes>
        
      </div>
    </Router>
   
  );
};

export default App;
