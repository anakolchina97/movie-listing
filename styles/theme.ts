import { ThemeProvider } from "styled-components";
import React, { ReactNode } from "react";

const theme = {
  colors: {
    primary: "#9c92f8",
    black: "#000000",
    white: "#ffffff",
    grey: {
      var100: "#c3c8d4",
      var300: "#8e95a9",
      var400: "#767e94",
      threeHundred: "#8e95a9",
      fifty: "#ebeef5",
    },
  },
  breakpoints: {
    md: "992px",
    sm: "768px",
    x: "576px",
  },
};

export default theme;
