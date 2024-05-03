import React from 'react';
import about from '../images/about.jpg'

function About() {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      scrollBehavior: 'smooth',
    },
    upperSection: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    left: {
      flex: 1,
      padding: '20px',
      textAlign: 'center',
    },
    rightCenter: {
      flex: 1,
      padding: '20px',
      textAlign: 'center',
      color: 'green',
    },
    rightCenterH1: {
      fontSize: '50px',
      marginBottom: '20px',
    },
    rightCenterP: {
      fontSize: '25px',
      marginTop: '20px',
      textAlign: 'left',
      lineHeight: '1.6',
    },
    contactSection: {
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      padding: '50px 0',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      width: '80%',
    },
  };

  return (
    <div style={styles.body}>
      <div className="upper-section" style={styles.upperSection}>
        <div className="left" style={styles.left}>
          <img src={about} alt="Environment" style={styles.image} />
        </div>
        <div className="right-center" style={styles.rightCenter}>
          <h1 style={styles.rightCenterH1}>~ About us ~</h1>
          <p style={styles.rightCenterP}>We are dedicated to reducing plastic use and protecting our environment. Our mission is to contribute to the Sustainable Development Goals (SDGs) by promoting eco-friendly practices and raising awareness about the importance of preserving our planet.</p>
          <p style={styles.rightCenterP}>Our team  adsfshas built this website to raise awareness about waste management and provide an e-shop for recycled products. Additionally, we offer waste disposal options to help individuals and businesses make sustainable choices. Through this platform, we aim to empower people to reduce waste and contribute to a healthier planet.</p>
        </div>
      </div>

      <section id="contact" className="contact-section" style={styles.contactSection}>
        <h2>Contact Us</h2>
        <div>
          <p>*** - +1234567890</p>
          <p>*** - +9876543210</p>
        </div>
      </section>
    </div>
  );
}

export default About;
