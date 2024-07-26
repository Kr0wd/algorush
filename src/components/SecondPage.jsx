import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button } from '@chakra-ui/react';

const SecondPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = location.state?.matches || [];

  return (
    <div>
      <h1>Second Page</h1>
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <Card
            key={index}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            mb="4"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={match.img}
              alt={match.name}
            />
            <Stack>
              <CardBody>
                <Heading size="md">{match.name}</Heading>
                <Text py="2"><strong>From:</strong> {match.from}</Text>
                <Text><strong>To:</strong> {match.to}</Text>
                <Text><strong>Time:</strong> {match.time}</Text>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="blue" onClick={() => navigate('/third', { state: { match } })}>
                  View Details
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))
      ) : (
        <p>No matches found</p>
      )}
      <button onClick={() => navigate('/')}>Back to First Page</button>
    </div>
  );
};

export default SecondPage;
