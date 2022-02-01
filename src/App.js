import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header';
import { theme } from "./theme";
import Container from './common/Container';
import { MovieList } from './features/movies/MovieList';
import { Pagination } from './common/Pagination';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        <MovieList />
        <Pagination />
      </Container>
    </ThemeProvider>
  );
}

export default App;
