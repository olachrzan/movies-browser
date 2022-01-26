import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from "./theme";
import Container from './common/Container';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        
      </Container>
    </ThemeProvider>
  );
}

export default App;
