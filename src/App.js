import Pagination from "./common/Pagination";
import Container from "./common/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./features/movies/MoviesList/movieListSlice";
import { fetchMovieDetails } from "./features/movies/movieDetailsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchMovieDetails());
  }, [dispatch]);

  return (
    <Container>
      <Pagination />
    </Container>
  );
};

export default App;
