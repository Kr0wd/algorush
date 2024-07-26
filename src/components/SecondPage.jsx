import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button } from '@chakra-ui/react';
import './SecondPage.css'; // Import the CSS file

const SecondPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = location.state?.matches || [];

  return (
    <div className="page-container">
      <h1>Second Page</h1>
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <Card
            key={index}
            className="card"
          >
            <Image
              className="card-image"
              src={match.img}
              alt={match.name}
            />
            <Stack className="card-content">
              <CardBody>
                <Heading className="card-heading">{match.name}</Heading>
                <Text className="card-text"><strong>From:</strong> {match.from}</Text>
                <Text className="card-text"><strong>To:</strong> {match.to}</Text>
                <Text className="card-text"><strong>Time:</strong> {match.time}</Text>
              </CardBody>
              <CardFooter>
                <Button className="card-button" onClick={() => navigate('/third', { state: { match } })}>
                  View Details
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))
      ) : (
        <p>No matches found</p>
      )}
      <button className="back-button" onClick={() => navigate('/')}>Back to First Page</button>
    </div>
  );
};

export default SecondPage;
