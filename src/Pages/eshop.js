import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Basket from '../images/cart.jpeg';

const Eshop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false); // State to track whether the cart is open or closed

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

    const addToCart = (product) => {
        const updatedCart = { ...cart };
        if (updatedCart[product.id]) {
            updatedCart[product.id].quantity++;
        } else {
            updatedCart[product.id] = { ...product, quantity: 1 };
        }
        setCart(updatedCart);
        // Decrement product quantity
        const updatedProducts = products.map(p => {
            if (p.id === product.id) {
                return { ...p, quantity: p.quantity - 1 };
            }
            return p;
        });
        setProducts(updatedProducts);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const renderCart = () => {
        return Object.keys(cart).map(productId => (
            <div key={productId}>
                <h3>{cart[productId].name}</h3>
                <p>Quantity: {cart[productId].quantity}</p>
            </div>
        ));
    };

    return (
        <div>
            <header style={styles.header}>
                <h1>Welcome to E Shop</h1>
                {/* Cart button with basket logo */}
                <img src={Basket} alt="Cart" style={styles.cartLogo} onClick={toggleCart} />
            </header>
            {/* Render existing products */}
            <div style={styles.container}>
                {products.map(product => (
                    <div key={product.id} style={styles.product}>
                        <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} style={styles.img} />
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        {product.quantity > 0 ? (
                            <button style={styles.addButton} onClick={() => addToCart(product)}>Add to Cart</button>
                        ) : (
                            <p style={styles.outOfStock}>Out of Stock</p>
                        )}
                    </div>
                ))}
            </div>
            {/* Cart */}
            {isCartOpen && (
                <div style={{ float: 'right', width: '30%', marginRight: '20px' ,color: 'white'}}>
                    <h2>Cart</h2>
                    {renderCart()}
                </div>
            )}
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        borderBottom: '1px solid #ccc',
        color: 'white',
    },
    cartLogo: {
        width: '80px',
        height: '80px',
        cursor: 'pointer',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
        color: 'white',
    },
    product: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        width: 'calc(25% - 20px)', // Adjusted width to fit four products in one row with margin
        textAlign: 'center',
        boxSizing: 'border-box',
        color: 'white',
    },
    img: {
        width: '100%', // Full width of the container
        height: '300px', // Increased height for better display
        objectFit: 'cover', // Ensure the image covers the container while maintaining aspect ratio
    },
    outOfStock: {
        color: 'red',
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '10px 20px', // Adjusted padding
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px 0', // Adjusted margin
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
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px 0',
        cursor: 'pointer',
        borderRadius: '8px',
    },
    cancelButton: {
        backgroundColor: '#f44336',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px 0',
        cursor: 'pointer',
        borderRadius: '8px',
    }
};

export default Eshop;
