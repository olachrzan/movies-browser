import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from "./theme";
import Container from './common/Container';
import { MovieList } from './features/movies/MovieList';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <MovieList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
