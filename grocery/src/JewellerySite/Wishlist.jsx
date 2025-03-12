import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Wishlist.css'

const Wishlist = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <div className='container'>
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your Wishlist is empty </p>
      ) : (
      <div className="wishlist-container">
        {wishlistItems.map((item, index) => (
          <div className="wishlist-item" key={index}>
            <img src={item.imageUrl} alt={item.name} height={'100px'} width={'60%'} />
            <div className="wishlist-info">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price} /-</p>
            </div>
            <div className="wishlist-actions">
              <IconButton onClick={() => removeFromWishlist(item.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Wishlist;
