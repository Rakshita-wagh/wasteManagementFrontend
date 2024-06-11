import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './cart'; 

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
      fetchProducts(); // Update product list to reflect new quantities
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.post('http://localhost:8081/api/cart/remove', { productId });

      setCart(cart.filter((item) => item.id !== productId));
      fetchProducts(); // Update product list to reflect restored quantities
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct} style={styles.form}>
        <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} style={styles.field} />
        <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} style={styles.field} />
        <input type="text" placeholder="Quantity" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} style={styles.field} />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button type="submit" style={styles.submitButton}>Add Product</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  
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

export default ProductSell;
