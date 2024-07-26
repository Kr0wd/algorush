import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Heading, Grid, GridItem, HStack } from '@chakra-ui/react';
import busData from './bus.json'; // Adjust the path if needed
import './FirstPage.css'; // Import the CSS file

const FirstPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ from: '', to: '', time: '' });
  const [selectedOption, setSelectedOption] = useState(null); // New state for selected option

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'bus') {
      const matches = busData.results.filter(
        (bus) =>
          bus.from.toLowerCase() === formData.from.toLowerCase() &&
          bus.to.toLowerCase() === formData.to.toLowerCase() &&
          bus.time === formData.time
      );
      navigate('/Buses', { state: { matches } });
    } else if (selectedOption === 'metro') {
      // You can add any necessary data fetching or processing for the metro option here
      navigate('/metro');
    }
  };

  return (
    <div className="fullscreen-container">
      <Box p={8} className="form-container" width="90vw" maxWidth="1200px">
        <HStack spacing={4} mb={6} justifyContent="center">
          <Button colorScheme="teal" onClick={() => setSelectedOption('cabs')}>Cabs</Button>
          <Button colorScheme="teal" onClick={() => setSelectedOption('metro')}>Metro</Button>
          <Button colorScheme="teal" onClick={() => setSelectedOption('bus')}>Bus</Button>
        </HStack>
        <Heading mb={6} textAlign="center">Search for Buses</Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem colSpan={1}>
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
          </GridItem>
          <GridItem colSpan={1}>
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
          </GridItem>
          <GridItem colSpan={1}>
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
          </GridItem>
          <GridItem colSpan={1} display="flex" alignItems="center" justifyContent="center">
            <Button type="submit" mt={4} onClick={handleSubmit}>
              Search
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default FirstPage;
