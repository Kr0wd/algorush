import React from 'react';
import { Table, TableContainer, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';

const MetroOptionsPage = () => {
  return (
    <div className="page-container">
      <h1>Metro Options</h1>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Metro Line</Th>
              <Th>Starting Point</Th>
              <Th>Ending Point</Th>
              <Th isNumeric>Travel Time (minutes)</Th>
              <Th>Fare</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Line 1</Td>
              <Td>Station A</Td>
              <Td>Station B</Td>
              <Td isNumeric>15</Td>
              <Td>$2.50</Td>
            </Tr>
            <Tr>
              <Td>Line 2</Td>
              <Td>Station C</Td>
              <Td>Station D</Td>
              <Td isNumeric>20</Td>
              <Td>$3.00</Td>
            </Tr>
            <Tr>
              <Td>Line 3</Td>
              <Td>Station E</Td>
              <Td>Station F</Td>
              <Td isNumeric>25</Td>
              <Td>$3.50</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Metro Line</Th>
              <Th>Starting Point</Th>
              <Th>Ending Point</Th>
              <Th isNumeric>Travel Time (minutes)</Th>
              <Th>Fare</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MetroOptionsPage;
