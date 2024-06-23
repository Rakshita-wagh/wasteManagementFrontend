import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Basket from '../images/cart.jpeg';

const Eshop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [isCartHovered, setIsCartHovered] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/products');
            setProducts(response.data);
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

        const updatedProducts = products.map(p => {
            if (p.id === product.id) {
                return { ...p, quantity: p.quantity - 1 };
            }
            return p;
        });
        setProducts(updatedProducts);
    };

    const renderCart = () => {
        return Object.keys(cart).map(productId => (
            <div key={productId} style={styles.cartItem}>
                <h3 style={{ marginBottom: '5px' }}>{cart[productId].name}</h3>
                <p>Quantity: {cart[productId].quantity}</p>
                <p>Price: ${cart[productId].price * cart[productId].quantity}</p>
            </div>
        ));
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Welcome to E Shop</h1>
                <div
                    style={styles.cartContainer}
                    onMouseEnter={() => setIsCartHovered(true)}
                    onMouseLeave={() => setIsCartHovered(false)}
                >
                    <img src={Basket} alt="Cart" style={styles.cartLogo} />
                    {isCartHovered && (
                        <div style={styles.cartDropdown}>
                            <h2 style={{ color: 'white', marginBottom: '10px' }}>Cart</h2>
                            {renderCart()}
                        </div>
                    )}
                </div>
            </header>
            <div style={styles.productsContainer}>
                {products.map(product => (
                    <div key={product.id} style={styles.product}>
                        <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} style={styles.img} />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        {product.quantity > 0 ? (
                            <button style={styles.addButton} onClick={() => addToCart(product)}>Add to Cart</button>
                        ) : (
                            <p style={styles.outOfStock}>Out of Stock</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        fontFamily: 'Roboto, sans-serif',
        padding: '20px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#343a40',
        color: 'white',
        borderBottom: '2px solid #17a2b8',
    },
    cartContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    cartLogo: {
        width: '50px',
        height: '50px',
        cursor: 'pointer',
    },
    cartDropdown: {
        position: 'absolute',
        top: '100%',
        right: '0',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '20px',
        width: '300px',
        zIndex: 1001,
        border: '1px solid #17a2b8',
        color: '#343a40',
    },
    cartItem: {
        borderBottom: '1px solid #17a2b8',
        padding: '10px 0',
        fontFamily: 'Roboto, sans-serif',
    },
    productsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
    },
    product: {
        border: '1px solid #17a2b8',
        padding: '20px',
        margin: '10px',
        width: 'calc(33.33% - 40px)', // Adjusted width to fit three products per row
        textAlign: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    img: {
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    outOfStock: {
        color: '#dc3545',
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#17a2b8',
        border: 'none',
        color: 'white',
        padding: '12px 0', // Adjusted padding for full-width button
        textAlign: 'center',
        textDecoration: 'none',
        display: 'block', // Change to block for full width
        fontSize: '16px',
        margin: '10px 0',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease',
        width: '100%', // Full width of the container
    },
    addButtonHover: {
        backgroundColor: '#138496',
    },
};

export default Eshop;

