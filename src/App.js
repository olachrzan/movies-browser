import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header';
import { theme } from "./theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header title="Movies Browser"/>
    </ThemeProvider>
  );
}

export default App;
