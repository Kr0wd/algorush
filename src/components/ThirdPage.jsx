
// src/components/ThirdPage.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import imageSrc from '../assets/WhatsApp Image 2024-07-27 at 4.27.41 AM.jpeg'; // Adjust path as needed
import './ThirdPage.css'; // Import the CSS file

const ThirdPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { match } = location.state || {};
  const { from_latitude, from_longitude, to_latitude, to_longitude } = match || {};

  return (
    <div className="container">
      <div className="info-section">
        <h1>Bus Route Information</h1>
        {from_latitude && from_longitude && to_latitude && to_longitude ? (
          <div className="location-info">
            <div>
              <h2>From Location</h2>
              <p><strong>Latitude:</strong> {from_latitude}</p>
              <p><strong>Longitude:</strong> {from_longitude}</p>
            </div>
            <div>
              <h2>To Location</h2>
              <p><strong>Latitude:</strong> {to_latitude}</p>
              <p><strong>Longitude:</strong> {to_longitude}</p>
            </div>
          </div>
        ) : (
          <p>Location data is missing.</p>
        )}
        <button className="back-button" onClick={() => navigate('/Buses')}>Back to Second Page</button>
      </div>
      <div className="image-section">
        <h2>Route</h2>
        <img src={imageSrc} alt="Bus Image" />
      </div>
    </div>
  );
};

export default ThirdPage;

