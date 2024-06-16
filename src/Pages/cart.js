import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div style={styles.cartContainer}>
      <div style={styles.cartButton} onClick={toggleCart}>
        <img src="/path/to/your/cart/image.png" alt="Cart" style={styles.cartImage} />
      </div>
      {isCartOpen && (
        <div style={styles.cartDropdown}>
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={styles.cartItem}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>
                    Remove
                  </button>
                </div>
              ))}
              <div style={styles.total}>
                <h3>Total: ${calculateTotalPrice()}</h3>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  cartButton: {
    cursor: 'pointer',
  },
  cartDropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    width: '300px', // Adjust width as needed
    zIndex: 1000,
  },
  cartItem: {
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  total: {
    marginTop: '10px',
    textAlign: 'right',
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
};

export default Cart;
