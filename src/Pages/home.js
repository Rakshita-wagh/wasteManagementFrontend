import React from 'react';
import main from '../images/mm.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import Gif from '../images/3D_Earth_Rotation.mp4';
// import earth from '../images/Designer (6).png';
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
    marginLeft: '180px',
  },
  heading: {
    color: 'green',
    position: 'absolute',
    top: '40%',
    left: '20px',
    transform: 'translate(0, -50%)',
  },
  content: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translate(0, -50%)',
    fontSize: '24px',
  },
  signUpButton: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    marginTop: '20px',
    transition: 'transform 0.3s ease', // Add transition for transform property
    '&:hover': {

    },
  },
  /* Add this CSS to your global CSS file or component */


};


function Home() {
  return (
    <div style={styles.body}>
      <div style={styles.upperSection}>
        <div style={styles.heading}>
          <h1 style={{ fontSize: '70px', fontFamily: 'sans-serif' }}>
            <b>Embrace <br></br> Sustainable Living!</b>
          </h1>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div style={styles.content}><br></br><br></br>
          <h3>
            <i>"Effortless waste management solutions at your fingertips."</i>
          </h3>
          <Link to='/main'>
          <button style={styles.signUpButton}>Get Started</button>
          </Link>
          
        </div>
        <img src={main} alt="Image2" style={styles.centerImage} />
        {/* <video autoPlay loop muted style={styles.centerImage}>
          <source src={Gif} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* <img src={earth} alt="Image2" style={styles.centerImage} />  */}

      </div>
        {/* <div style={styles.signupLogin}>
          <Link to='/loginSignup'>
          <button style={{width: '100%',marginRight:'20px', marginTop:'-5px',paddingRight:'10px'}} className='btn btn-success' >Login</button>
          </Link>
        </div> */}
      {/* <section id="contact" style={styles.contactSection}>
        <h2>Sign Up to Save Mother Earth</h2> */}
        {/* ... (other contact section content) */}
      {/* </section> */}
    </div>
  );
}

export default Home;
