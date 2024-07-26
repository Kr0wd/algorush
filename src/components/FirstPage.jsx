import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, VStack } from '@chakra-ui/react';
import busData from './bus.json'; // Adjust the path if needed
import './FirstPage.css'; // Import the CSS file

const FirstPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ from: '', to: '', time: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matches = busData.results.filter(
      (bus) =>
        bus.from.toLowerCase() === formData.from.toLowerCase() &&
        bus.to.toLowerCase() === formData.to.toLowerCase() &&
        bus.time === formData.time
    );
    navigate('/second', { state: { matches } });
  };

  return (
    <div className="fullscreen-container">
      <Box p={4} className="form-container" width="100%" maxWidth="500px">
        <Heading mb={6}>Search for Buses</Heading>
        <VStack as="form" onSubmit={handleSubmit} spacing={4}>
          {/* Wrap form controls in VStack for vertical stacking with spacing */}
          <FormControl>
            <FormLabel htmlFor="from">From:</FormLabel>
            <Input
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="to">To:</FormLabel>
            <Input
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="time">Time:</FormLabel>
            <Input
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button type="submit" mt={4}>
            Search
          </Button>
        </VStack>
      </Box>
    </div>
  );
};

export default FirstPage;
