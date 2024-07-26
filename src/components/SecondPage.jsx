// src/components/SecondPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Second Page</h1>
      <button onClick={() => navigate('/third')}>Go to Third Page</button>
      <button onClick={() => navigate('/')}>Back to First Page</button>
    </div>
  );
};

export default SecondPage;

