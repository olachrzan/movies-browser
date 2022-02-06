import { Search } from "./index";
import { MovieList } from "../movies/MovieList";

export const SearchPage = () => {
  const apiUrlSearchMovies =
    "https://api.themoviedb.org/3/search/movie?&api_key=5d668a4e55e28292714d6fdd2fd67935&query=";

  const [searchTerm, setSearchTerm] = useState("");
  const [moviesSearch, setMoviesSearch] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(apiUrlSearchMovies + searchTerm)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setMoviesSearch(data.results);
        });
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header>
          <div>{Search}</div>
      </Header>
      <MovieList />
    </>
  );
};
