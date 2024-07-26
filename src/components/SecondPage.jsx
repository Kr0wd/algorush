import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react';

const SecondPage = () => {
  const navigate = useNavigate();

  // Example data
  const busInfo = {
    name: 'Express Bus',
    time: '10:00 AM',
    fare: '$20'
  };

  return (
    <div>
      <h1>Second Page</h1>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{busInfo.name}</Heading>
            <Text>
              <strong>Time:</strong> {busInfo.time}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              <strong>Fare:</strong> {busInfo.fare}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={() => navigate('/third')}>
              View Details
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <button onClick={() => navigate('/')}>Back to First Page</button>
    </div>
  );
};

export default SecondPage;


