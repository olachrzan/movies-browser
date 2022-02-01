import { Header } from "./common/Header";
import Container from "./common/Container";
import { MovieList } from "./features/movies/MovieList";
import { Pagination } from "./common/Pagination";

function App() {

  return (
    <>
      <Header />
      <Container>
        <MovieList />
        <Pagination />
      </Container>
    </>
  );
};

export default App;
