import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

function Nav() {
    const navbarStyle = {
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 20px',
    };

    const menuItemsContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end', // Align items to the end of the container
        alignItems: 'center', // Center items vertically
        flex: 1, // Occupy remaining space
    };

    const navLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '20px',
        textTransform: 'uppercase',
        marginRight: '30px',

    };

    return (
        <div style={navbarStyle} className="navbar">
            <div className="upper-section">
                <div className="menu-items">
                    <Link to="/" style={navLinkStyle}>Waste Wise Web</Link>
                </div>
                <div style={menuItemsContainerStyle} className="menu-items">
                    <Link to="/" style={navLinkStyle}>Home</Link>
                    <Link to="/about" style={navLinkStyle}>About Us</Link>
                    <Link to="/eshop" style={navLinkStyle}>E-Shop</Link>
                    <Link to="/news" style={navLinkStyle}>News</Link>
                    <Link to="/disposal" style={navLinkStyle}>Dispose Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
