import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './display.css'; // Import the CSS file
import { AiOutlineDelete } from 'react-icons/ai'; // Import React Icons for delete

const WasteDataTable = () => {
  const [wasteData, setWasteData] = useState([]);

  useEffect(() => {
    const fetchWasteData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/waste');
        setWasteData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching waste data:', error);
      }
    };

    fetchWasteData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/waste/${id}`);
      setWasteData(wasteData.filter(data => data.id !== id));
      console.log(`Deleted item with id ${id}`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="table-container">
      <h1>Waste Disposal Data</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Waste Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wasteData.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.wasteType}</td>
              <td>
                <button onClick={() => handleDelete(data.id)}>
                  <AiOutlineDelete className="delete-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WasteDataTable;
