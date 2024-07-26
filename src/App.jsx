import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import MetroOptionsPage from './components/MetroOptionsPage';
import Breadcrumbs from './components/Breadcrumbs'; // Import the Breadcrumbs component
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

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="app-container">
          <Breadcrumbs /> {/* Include the Breadcrumbs component */}
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/Buses" element={<SecondPage />} />
            <Route path="/Details" element={<ThirdPage />} />
            <Route path="/metro" element={<MetroOptionsPage />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;
