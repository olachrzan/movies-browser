import { Search } from "./index";
import { MovieList } from "../movies/MovieList";
import { FetchSearchMovies } from "../getApi";

export const SearchPage = () => {
  const apiUrlSearchMovies =
    "https://api.themoviedb.org/3/search/movie?&api_key=5d668a4e55e28292714d6fdd2fd67935&query=";

  const [searchTerm, setSearchTerm] = useState("");
 

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      FetchSearchMovies();
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
