import React from 'react';
import { useLocation } from 'react-router-dom';

const SecondPage = () => {
  const location = useLocation();
  const matches = location.state?.matches || [];

  return (
    <div>
      <h1>Second Page</h1>
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <div key={index}>
            <p>From: {match.from}</p>
            <p>To: {match.to}</p>
            <p>Time: {match.time}</p>
            <p>Name: {match.name}</p>
          </div>
        ))
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
};

export default SecondPage;
