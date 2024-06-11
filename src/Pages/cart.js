import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div style={styles.cartContainer}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>Remove</button>
            </div>
          ))}
          <div style={styles.total}>
            <h3>Total: ${calculateTotalPrice()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    marginTop: '40px',
    width: '100%',
    maxWidth: '600px',
  },
  cartItem: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  total: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Cart;
