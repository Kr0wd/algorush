// src/components/FirstPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>First Page</h1>
      <button onClick={() => navigate('/second')}>Go to Second Page</button>
    </div>
  );
};

export default FirstPage;