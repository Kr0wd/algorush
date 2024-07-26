// src/theme.js

import { extendTheme } from "@chakra-ui/react";

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

export default theme;
