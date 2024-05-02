import React from 'react';
import main from '../images/mm.jpg';

const styles = {
  
  body: {
    fontFamily: 'Times New Roman, Times, serif',
    margin: 0,
    padding: 0,
    scrollBehavior: 'smooth',
  },
  upperSection: {
    height: 'calc(100vh - 100px)',
    paddingBottom: '0.1px',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px 20px',
    position: 'relative',
  },
  menuItems: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px',
  },
  menuItem: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    textTransform: 'uppercase',
    marginRight: '20px',
    top: '20px',
  },
  contactSection: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    padding: '40px 0',
  },
  signupForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailInput: {
    width: '300px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
  },
  submitButton: {
    backgroundColor: '#1a1a2e',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    outline: 'none',
  },
  submitButtonHover: {
    backgroundColor: '#0d0d1a',
  },
  centerImage: {
    position: 'absolute',
    top: '51%',
    left: '65%',
    transform: 'translate(-50%, -50%)',
    width: '680px',
    height: 'auto',
    marginTop: '50px',
  },
  heading: {
    color: 'green',
    position: 'absolute',
    top: '40%',
    left: '20px',
    transform: 'translate(0, -50%)',
    fontSize: '25px',
  },
  content: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translate(0, -50%)',
    fontSize: '24px',
  },
};

function Home() {
  return (
    <div style={styles.body}>
      <div style={styles.upperSection}>
        <div style={styles.heading}>
          <h2>Embrace Sustainable Living</h2>
        </div>
        <div style={styles.content}>
          <p>Effortless waste management solutions at your fingertips.</p>
        </div>
        <img
          src={main}
          alt="Image2"
          style={styles.centerImage}
        />
      </div>

      <section id="contact" style={styles.contactSection}>
        <h2>Sign Up to Save Mother Earth</h2>
        <div style={styles.signupForm}>
          <input type="email" style={styles.emailInput} placeholder="Enter your email" />
          <button type="submit" style={styles.submitButton}>
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
