import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { PageNavigation } from './Navigation';
import { theme } from "./theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageNavigation title="Movies Browser"/>
    </ThemeProvider>
  );
}

export default App;
