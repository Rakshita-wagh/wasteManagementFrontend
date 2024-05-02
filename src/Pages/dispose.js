import React from 'react';
import disp from '../images/dis.jpg';
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



const styles = {

 

  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundImage: `url(${disp})`, // Use imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formGroupLabel: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  formInput: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  formSelect: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8h16z"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '16px',
  },
  formSubmitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  formSubmitButtonHover: {
    backgroundColor: '#45a049',
  },
};

const WasteDisposalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    wasteType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/waste', formData); // Assuming your backend endpoint is /api/waste
      alert('Data saved successfully!');
      setFormData({
        name: '',
        address: '',
        phoneNumber: '',
        wasteType: ''
      });
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };



  return (
    <div style={styles.body}>
      <div style={styles.formContainer}>
        <h2>Waste Disposal Form</h2>
        <form onSubmit={handleSubmit}>
         
         
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.formGroupLabel}>Name:</label>
            <input type="text" id="name" name="name" value={formData.name}  style={styles.formInput}
            onChange={handleChange} required />
          </div>


          <div style={styles.formGroup}>
            <label htmlFor="address" style={styles.formGroupLabel}>Address:</label>
            <input type="text" id="address" name="address" 
            value={formData.address}  style={styles.formInput} 
            onChange={handleChange} required />
           
          </div>
         
         
         <div style={styles.formGroup}>
        <label htmlFor="phone" style={styles.formGroupLabel}>Phone Number:</label>
          <input type="tel" id="phone" name="phoneNumber" value={formData.phoneNumber}  style={styles.formInput} 
          onChange={handleChange} required />
        </div>

          <div style={styles.formGroup}>
            <label htmlFor="waste-type" style={styles.formGroupLabel}>Type of Waste:</label>
            <select id="wasteType" name="wasteType" style={styles.formSelect}  value={formData.wasteType} onChange={handleChange} placeholder='Select Waste Type'
             required>
              <option value="" > Select Waste Type</option>
              <option value="glass"> Glass</option>
              <option value="paper" > Paper</option>
              <option value="plastic" > Plastic</option>
              <option value="wooden" > Wooden</option>
            </select>
          </div>
          <div style={styles.formGroup}>
          <button type="button" class="btn btn-success">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WasteDisposalForm;





