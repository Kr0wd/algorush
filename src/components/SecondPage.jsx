import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import './SecondPage.css'; // Import the updated CSS file

const SecondPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = location.state?.matches || [];

  return (
    <div className="page-container">
      <h1>Availabe Buses</h1>
      <div className="grid-container">
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <div className="grid-item" key={index}>
              <Image
                className="grid-image"
                src={match.img}
                alt={match.name}
              />
              <div className="grid-content">
                <Heading className="grid-heading">{match.name}</Heading>
                <Text className="grid-text"><strong>From:</strong> {match.from}</Text>
                <Text className="grid-text"><strong>To:</strong> {match.to}</Text>
                <Text className="grid-text"><strong>Time:</strong> {match.time}</Text>
                <Button className="grid-button" onClick={() => navigate('/Details', { state: { match } })}>
                  View Details
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No matches found</p>
        )}
      </div>
      <button className="back-button" onClick={() => navigate('/')}>Back to First Page</button>
    </div>
  );
};

export default SecondPage;
