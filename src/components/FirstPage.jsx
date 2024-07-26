// src/components/FirstPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>First Page</h1>
      <button onClick={() => navigate('/second')}>search</button>
    </div>
  );
};

export default FirstPage;
