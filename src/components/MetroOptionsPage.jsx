import React from 'react';
import { Box, Heading, Table, TableContainer, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import metroImage from '../assets/metro-removebg-preview.png'; // Updated path for the new image

const MetroSchedule = () => {
  return (
    <Box p={4} bg="#0b0a09" color="#d27532" height="100vh" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
      <Box flex="1" textAlign="center" mb={6} maxWidth="800px">
        <Heading as="h1" size="lg" color="#d27532">Metro Schedule</Heading>
        
        <Box mb={6}>
          <Heading as="h2" size="md" mb={4} color="#d27532">Train Timings</Heading>
          <TableContainer className="table-container">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="#ffffff">Details</Th>
                  <Th color="#ffffff">Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Morning First Train from Aluva to Maharaja's</Td>
                  <Td>6:00 AM</Td>
                </Tr>
                <Tr>
                  <Td>Morning First Train from Maharaja's to Aluva</Td>
                  <Td>6:00 AM</Td>
                </Tr>
                <Tr>
                  <Td>Night Last Train from Aluva to Maharaja's</Td>
                  <Td>10:00 PM</Td>
                </Tr>
                <Tr>
                  <Td>Night Last Train from Maharaja's to Aluva</Td>
                  <Td>10:00 PM</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box>
          <Heading as="h2" size="md" mb={4} color="#d27532">Train Availability</Heading>
          <TableContainer className="table-container">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="#ffffff">Time Interval</Th>
                  <Th color="#ffffff">Interval</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>06:00 AM to 07:30 AM</Td>
                  <Td>17 Mins 30 Sec</Td>
                </Tr>
                <Tr>
                  <Td>07:30 AM to 08:30 AM</Td>
                  <Td>11 Mins 40 Sec</Td>
                </Tr>
                <Tr>
                  <Td>08:30 AM to 08:00 PM</Td>
                  <Td>08 Mins 45 Sec</Td>
                </Tr>
                <Tr>
                  <Td>08:00 PM to 10:00 PM</Td>
                  <Td>15 Mins</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <Box flex="1" display="flex" justifyContent="center" ml={24}> {/* Increased margin-left for more spacing */}
        <img src={metroImage} alt="Metro" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default MetroSchedule;
