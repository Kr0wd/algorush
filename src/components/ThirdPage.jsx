// src/components/ThirdPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThirdPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Third Page</h1>
      <button onClick={() => navigate('/Buses')}>Back to Second Page</button>
    </div>
  );
};

export default ThirdPage;
