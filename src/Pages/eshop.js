import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Eshop = () => {
    const [products, setProducts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        image: null
    });

    useEffect(() => {
        // Fetch products from the backend when the component mounts
        fetchProducts();
    }, []);

    useEffect(() => {
        // Save products to local storage whenever it changes
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/products');
            setProducts(response.data);

            // Update local storage with fetched products
            localStorage.setItem('products', JSON.stringify(response.data));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', newProduct.name);
            formData.append('price', newProduct.price);
            formData.append('quantity', newProduct.quantity);
            formData.append('image', newProduct.image);
    
            // Make a POST request to add the new product
            const response = await axios.post('http://localhost:8081/api/products/post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            // Update the products state with the newly added product
            setProducts([...products, response.data]);
    
            // Reset form fields and close the add product form
            setNewProduct({ name: '', price: '', quantity: '', image: null });
            setShowAddForm(false);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setNewProduct({ ...newProduct, image: file });
    };

    return (
        <div>
            <header>
                <h1>Welcome to E Shop</h1>
            </header>
            <div>
                {/* Render existing products */}
                <div style={styles.container}>
                    {products.map(product => (
                        <div key={product.id} style={styles.product}>
                            <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} style={styles.img} />
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                            {/* <p>{product.inStock ? `Available Quantity: ${product.quantity}` : <span style={styles.outOfStock}>Out of Stock</span>}</p> */}
                            <p>{product.quantity}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Button to show form for adding a product */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button style={styles.addButton} onClick={() => setShowAddForm(!showAddForm)}>Add Product</button>
            </div>

            {/* Form for adding a product */}
            {showAddForm && (
                <div>
                    <form onSubmit={handleAddProduct} style={styles.form}>
                        <input type="text" placeholder="Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
                        <input type="text" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
                        <input type="text" placeholder="Quantity" value={newProduct.quantity} onChange={e => setNewProduct({ ...newProduct, quantity: e.target.value })} />
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                        <button type="submit" style={styles.submitButton}>Add</button>
                        <button type="button" onClick={() => setShowAddForm(false)} style={styles.cancelButton}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align items at the start of the cross axis
        padding: '20px',
    },
    product: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        width: 'calc(30% - 20px)', // Adjusted width to fit three products in one row with margin
        textAlign: 'center',
    },
    img: {
        width: '100%',
        height: 'auto',
        maxHeight: '200px', // Set a maximum height for the images
        objectFit: 'cover', // Ensure the image covers the container while maintaining aspect ratio
    },
    outOfStock: {
        color: 'red',
    },
    addButton: {
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
    form: {
        textAlign: 'center',
        marginTop: '20px',
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
    cancelButton: {
        backgroundColor: '#f44336',
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
    }
};


export default Eshop;