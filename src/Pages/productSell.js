import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './cart';
import bottomRightImage from '../images/Designer (11).png'; // Make sure to replace this with the correct path to your image

const ProductSell = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    image: null
  });
  const [updates, setUpdates] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchUpdates();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, image: file });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', newProduct.name);
      formData.append('price', newProduct.price);
      formData.append('quantity', newProduct.quantity);
      formData.append('image', newProduct.image);

      await axios.post('http://localhost:8081/api/products/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Product added successfully');
      fetchProducts();
      fetchUpdates();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchUpdates = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/updates');
      setUpdates(response.data);
    } catch (error) {
      console.error('Error fetching updates:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      await axios.post('http://localhost:8081/api/cart/add', { productId: product.id });

      setCart([...cart, product]);
      fetchProducts();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.post('http://localhost:8081/api/cart/remove', { productId });

      setCart(cart.filter((item) => item.id !== productId));
      fetchProducts();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Add Product</h2>
        <form onSubmit={handleAddProduct} style={styles.form}>
          <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} style={styles.field} />
          <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} style={styles.field} />
          <input type="text" placeholder="Quantity" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} style={styles.field} />
          <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.field} />
          <button type="submit" style={styles.submitButton}>Add Product</button>
        </form>
      </div>
      <img src={bottomRightImage} alt="Background" style={styles.backgroundImage} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end', // Align form to the right
    alignItems: 'center',
    padding: '40px',
    color: 'white',
    position: 'relative', // Ensure relative positioning for the container
    height: '100vh',
    width: '100%',
    overflow: 'hidden', // Ensure content doesn't overflow
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.4)', // Box shadow
    border: '2px solid rgba(255, 255, 255, 0.1)', // Border with transparency for a 3D effect
    borderRadius: '10px',
    padding: '50px',
    boxSizing: 'border-box',
    zIndex: 1, // Ensure form is above the background image
    width: '500px', // Increase width to make the form bigger
    marginRight: '50px', // Add more margin to the right
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  field: {
    marginBottom: '10px',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid rgba(255, 255, 255, 0.2)', // Blurred border effect
    borderRadius: '5px',
    width: '100%',
    backgroundColor: '#333', // Darkened background for input fields
    color: 'white',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
    width: '100%',
    marginTop: '10px', // Added margin top for spacing
  },
  backgroundImage: {
    position: 'absolute',
    bottom: '-50px', // Adjust this value to move the image further down
    left: '10px',
    width: '700px', // Adjust the size as needed
    height: 'auto', // Maintain aspect ratio
    zIndex: 0, // Ensure background image is behind the form
  },
};

export default ProductSell;
