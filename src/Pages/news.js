import React from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    background: 'linear-gradient(90deg, #FF82AB, #67B2E6)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    maxWidth: '800px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
  },
  tableContainer: {
    maxHeight: '300px',
    overflowY: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#F4F4F4',
  },
  th: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#0080FF',
    color: 'white',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  evenRow: {
    backgroundColor: '#F4F4F4',
  },
};

function News() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2>Program List</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Program Name</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Venue</th>
                <th style={styles.th}>Entry Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>p1</td>
                <td style={styles.td}>May 10, 2024</td>
                <td style={styles.td}>Convention Center</td>
                <td style={styles.td}>Free</td>
              </tr>
              {/* Add more program details here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default News;
