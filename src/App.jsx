import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import MetroOptionsPage from './components/MetroOptionsPage'; // Import the MetroOptionsPage
import './global.css'; // Import the global CSS file

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#131114", // Neutral color as background
        color: "white",
      },
      ".app-container": {
        minHeight: "100vh",
      },
      ".fullscreen-page": {
        minHeight: "100%",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="app-container">
        <Router>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/second" element={<SecondPage />} />
            <Route path="/third" element={<ThirdPage />} />
            <Route path="/metro" element={<MetroOptionsPage />} /> {/* Add MetroOptionsPage route */}
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
