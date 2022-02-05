import { SearchBar, SearchIcon, SearchInput } from "./styled";
import search from "./icons/search-icon.svg"

export const Search = () => {
  return (
    <SearchBar>
      <SearchIcon src={search} alt=""/>
      <SearchInput type="search" placeholder="Search for movies..." />
    </SearchBar>
  );
};
