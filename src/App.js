import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Navigation } from './Navigation';
import { theme } from "./theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation title="Movies Browser"/>
    </ThemeProvider>
  );
}

export default App;
