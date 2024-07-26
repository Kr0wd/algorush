// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: "#d27532",
    neutral: "#0b0a09",
    success: "#9ff51f",
    caution: "#f6ed10",
    danger: "#d84b4e",
    info: "#1d26b5",
  },
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

export default theme;
