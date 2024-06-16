import React, { useState } from 'react';
import disp from '../images/dis.jpg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundImage: `url(${disp})`,
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
    textAlign: 'left',
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
    marginTop: '10px',
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

  const [formErrors, setFormErrors] = useState({
    name: '',
    address: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for name: must contain at least one letter
    const nameRegex = /[a-zA-Z]/;
    if (!nameRegex.test(formData.name)) {
      setFormErrors({ ...formErrors, name: 'Name must contain at least one letter' });
      return;
    }

    // Validation for address: must contain only letters, or a combination of letters and numbers
    const addressRegex = /^(?!^\d+$)(?!^[^a-zA-Z]*$)[a-zA-Z0-9 ,:;]*$/;
    if (!addressRegex.test(formData.address)) {
      setFormErrors({ ...formErrors, address: 'Invalid Address' });
      return;
    }

    // Validation for phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setFormErrors({ ...formErrors, phoneNumber: 'Phone number must be exactly 10 digits' });
      return;
    }

    try {
      await axios.post('http://localhost:8081/api/waste', formData);
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
            <input type="text" id="name" name="name" value={formData.name} style={styles.formInput} onChange={handleChange} required />
            {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="address" style={styles.formGroupLabel}>Address:</label>
            <input type="text" id="address" name="address" value={formData.address} style={styles.formInput} onChange={handleChange} required />
            {formErrors.address && <p style={{ color: 'red' }}>{formErrors.address}</p>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.formGroupLabel}>Phone Number:</label>
            <input type="tel" id="phone" name="phoneNumber" value={formData.phoneNumber} style={styles.formInput} onChange={handleChange} required />
            {formErrors.phoneNumber && <p style={{ color: 'red' }}>{formErrors.phoneNumber}</p>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="waste-type" style={styles.formGroupLabel}>Type of Waste:</label>
            <select id="wasteType" name="wasteType" style={styles.formSelect} value={formData.wasteType} onChange={handleChange} required>
              <option value="">Select Waste Type</option>
              <option value="glass">Glass</option>
              <option value="paper">Paper</option>
              <option value="plastic">Plastic</option>
              <option value="wooden">Wooden</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <button type="submit" style={styles.formSubmitButton}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WasteDisposalForm;
