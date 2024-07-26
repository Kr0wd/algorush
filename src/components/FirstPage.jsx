import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import busData from './bus.json'; // Adjust the path if needed

const FirstPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ from: '', to: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matches = busData.results.filter(
      (bus) =>
        bus.from.toLowerCase() === formData.from.toLowerCase() &&
        bus.to.toLowerCase() === formData.to.toLowerCase()
    );
    navigate('/second', { state: { matches } });
  };

  return (
    <div>
      <h1>First Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            From:
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            To:
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FirstPage;
