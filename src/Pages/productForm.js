// ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    image: null
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newProduct);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} style={styles.field} />
      <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} style={styles.field} />
      <input type="text" placeholder="Quantity" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} style={styles.field} />
      <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.field} />
      <button type="submit" style={styles.submitButton}>Add Product</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  field: {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '300px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
  },
};

export default ProductForm;
