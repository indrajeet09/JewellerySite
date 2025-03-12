import React from 'react';
import Footer from '../Footer';
import './ShippingPolicy.css'


const TermsCondition = () => {
  return (
    <div className='ship'>
    
      <div className='container1'>
      <h2>Shipping policy</h2>
        <p>Once you confirm your order, our team of jewellery experts will choose the most exquisite diamonds for your jewellery. After a thorough production, customisation to fit your size and quality check, the jewellery will be ready for dispatch within 10 days from the date of order.
We use a specialised courier partner, Sequel Global Logistics to deliver your product. Once dispatched, our team will share the proof of dispatch that will have a unique tracking number.
You will receive your order within 4 business days from the date of dispatch. You can track your delivery status at https://sequelglobal.com/ using the unique tracking number.
Kindly ensure that either you or someone in your blood relative is available to receive the courier. The delivery person may ask you for an OTP and an identity proof to handover your jewellery.
We take care of all the transit insurance, thus till the handover of the product in your hands, all the risk is ours.</p>

      </div>
      <Footer/>
    </div>
    
  );
}

export default TermsCondition;
