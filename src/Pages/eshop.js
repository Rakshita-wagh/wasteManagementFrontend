import React from 'react';
import p3 from '../images/p3.jpeg';
import p4 from '../images/p4.jpeg';
import p5 from '../images/p5.jpeg';
import paperbag from '../images/paperbag.jpeg';
import stationary from '../images/stationary.jpeg';

const Eshop = () => {
    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
        },
        header: {
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 0',
            textAlign: 'center',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        },
        product: {
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px',
            width: 'calc(30.60% - 60px)', // Adjusted width to fit three products in one row
            textAlign: 'center',
        },
        img: {
            width: '100%',
            height: 'auto',
        },
        footer: {
            backgroundColor: '#333',
            color: '#fff',
            textAlign: 'center',
            padding: '10px 0',
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
        },
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <h1>Welcome to E Shop</h1>
            </header>
            <div style={styles.container}>
                <div style={styles.product}>
                    <img src={stationary} alt="Product 1" style={styles.img} />
                    <h2>Pencil stand</h2>
                    <button>Add to Cart</button>
                </div>

                <div style={styles.product}>
                    <img src={paperbag} alt="Product 2" style={styles.img} />
                    <h2>Paper bag</h2>
                    <button>Add to Cart</button>
                </div>

                <div style={styles.product}>
                    <img src={p3}alt="Product 3" style={styles.img} />
                    <h2>Recycling container</h2>
                    <button>Add to Cart</button>
                </div>
                
                <div style={styles.product}>
                    <img src={p4} alt="Product 4" style={styles.img} />
                    <h2>Reusable shopping bags</h2>
                    <button>Add to Cart</button>
                </div>

                <div style={styles.product}>
                    <img src={p5} alt="Product 5" style={styles.img} />
                    <h2>Bamboo utensils</h2>
                    <button>Add to Cart</button>
                </div>
            </div>
           
        </div>
    );
};

export default Eshop;