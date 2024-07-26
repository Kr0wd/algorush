import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
