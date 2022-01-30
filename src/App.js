import Pagination from "./common/Pagination";
import Container from "./common/Container";
import { MovieList } from "./features/movies/MoviesList";

function App() {

  return (
    <Container>
      <MovieList />
      <Pagination />
    </Container>
  );
};

export default App;
