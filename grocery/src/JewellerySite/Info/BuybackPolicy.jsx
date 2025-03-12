import React from 'react'

import Footer from '../Footer'
import './ShippingPolicy.css'


const BuybackPolicy = () => {
  return (
   
    <div className='ship'>
    
        <div className='container1'>
        <h2>Buyback Policy</h2>
    <p>Though we are confident this situation will never arise, we have taken care of it.</p>
    <p>We have a lifetime free no questions asked buyback and exchange policy.</p>
    <p>The exchange value will be calculated as follows:</p>
    <ul>
        <li>Gold: 100% of the market value</li>
        <li>Diamond: 80% of the market value</li>
        <li>Making charges: none</li>
        <li>GST: none</li>
    </ul>
    <p>In case you wish to raise a request for a buyback and exchange, you are requested to write an email to <a href="mailto:hi@truediamond.in">hi@truediamond.in</a> with your order number, invoice, photograph of the product, and the authentication certificate.</p>
    <p>Once our team takes a preliminary check on the product being in good condition, we will send an email confirmation and arrange for a pickup from your address. You are requested to handover all the products, invoice, and certificates in the same box with proper packaging back to the pickup executive. Once the box reaches our officer, our team will undertake a thorough check of the product.</p>
    <p>Once it passes the quality check, we will issue a credit note as per value above. You can purchase a new product within 90 days of the credit note issuance. The quality check will also involve ensuring the authentication of the diamond shipped v/s returned, using the unique identification number (UIN) that is mentioned in the certificate and that is inscripted on the diamond. No wear and tear, re-work, alteration should have been done on the products for it to be eligible for this policy.</p>
    <p>In case the product is damaged on receipt or the UIN does not match then your buyback request will be rejected our team will contact you for further information. The Company’s decision regarding the quality check shall be final and binding on the customer. Under no circumstance the Company will return money to the customer.</p>

        </div>
        <Footer/>
     </div>
    
  )
}

export default BuybackPolicy