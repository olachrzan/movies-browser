import { SearchBar, SearchIcon, SearchInput } from "./styled";
import search from "./icons/search-icon.svg";
import { useState } from "react";
import { apiUrlSearchMovies } from "../apiData";

export const Search = () => {


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
    <SearchBar>
      <SearchIcon src={search} alt="" />
      <form onSubmit={handleOnSubmit}>
        {" "}
        <SearchInput type="search" value={searchTerm }placeholder="Search for movies..."  onChange={handleOnChange}/>
      </form>
    </SearchBar>
  );
};
