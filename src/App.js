import { Header } from "./common/Header";
import Container from "./common/Container";
import { MovieList } from "./features/movies/MovieList";

function App() {

  return (
    <>
      <Header />
      <Container>
        <MovieList />
      </Container>
    </>
  );
};

export default App;
