// src/components/Breadcrumbs.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, HStack, Spacer, Text } from '@chakra-ui/react';

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box p={4} bg="gray.700" color="primary">
      <HStack spacing={4} alignItems="center">
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Spacer />
        <Text textAlign="center" flex="1">
          {pathnames.length > 0 ? (
            pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              return (
                <span key={to}>
                  {index > 0 && ' / '}
                  <span>{value}</span>
                </span>
              );
            })
          ) : (
            'Home'
          )}
        </Text>
        <Spacer />
        <Button onClick={() => navigate(1)} style={{ marginLeft: 'auto' }}>Forward</Button>
      </HStack>
    </Box>
  );
};

export default Breadcrumbs;
