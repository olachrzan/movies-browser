import axios from "axios";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import {
  HeaderArea,
  HeaderContainer,
  Title,
  NavList,
  Icon,
  ListItem,
  TextSide,
  SearchBar,
  SearchIcon,
  SearchInput,
  ListLink,
} from "./styled";
import camera from "./icons/camera-icon.svg";
import search from "./icons/search-icon.svg";
import { apiUrl, apiKey } from "../../features/apiData";
import {
  selectPeoplePage,
  setTotalPage,
  setPeople,
  setPeoplePage,
  fetchPeople,
} from "../../features/people/peopleList/peopleListSlice";
import {
  fetchMovies,
  selectMovies,
  selectPage,
  setMovies,
  setPage,
  setTotalMoviesPages,
} from "../../features/movies/MovieList/movieListSlice";
import { getApi } from "../../features/getApi";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationHash = window.location.hash;
  const query = (new URLSearchParams(location.search)).get("query");
  // const movies = useSelector(selectMovies);
  // console.log(query);
  // console.log(movies);
  const pageSearch = useSelector(selectPage);

  const onInputChange = debounce((value) => {
    const searchParams = new URLSearchParams(location.search);

    if (value) {
      fetch(locationHash === "#/movie"
        ? `${apiUrl}search/movie?api_key=${apiKey}&query=${value}&page=`
        : `${apiUrl}search/person?api_key=${apiKey}&query=${value}&page=`)
        .then(res => res.json())
        .then(data => {
          dispatch(locationHash === "#/movie"
            ? setMovies(data.results)
            : setPeople(data.results));
            console.log(data);
        });
    } else {
      dispatch(fetchMovies());
      dispatch(fetchPeople());
    }

    // axios
    //   .get(locationHash === "#/movie"
    //     ? `${apiUrl}search/movie?api_key=${apiKey}&query=${value}&page=`
    //     : `${apiUrl}search/person?api_key=${apiKey}&query=${value}&page=`)
    //   .then((response) => {
    //     dispatch(locationHash === "#/people"
    //       ? setPeople(response.data.results)
    //       : setMovies(response.data.results));
    //     // dispatch(locationHash === "#/people"
    //     //   ? setPeoplePage(response.data.page)
    //     //   : setPage(response.data.page));
    //     // dispatch(locationHash === "#/people" ?
    //     //   setTotalPage(response.data.total_pages)
    //     //   : setPeoplePage(response.data.total_pages));
    //     console.log(response.data.results);
    //   })
    //   .catch((error) => {
    //     console.log(error, "Something went wrong");
    //   });

    if (value.trim() === "") {
      searchParams.delete("query");
    } else {
      searchParams.set("query", value);
    }
    navigate(`${location.pathname}?${searchParams.toString()}`);
  }, 1000);

  return (
    <HeaderArea>
      <HeaderContainer>
        <TextSide>
          <Title>
            <Icon src={camera} alt="" />
            Movies Browser
          </Title>
          <nav>
            <NavList>
              <ListItem>
                <ListLink to="/movie">Movies</ListLink>
              </ListItem>
              <ListItem >
                <ListLink to="/people">People</ListLink>
              </ListItem>
            </NavList>
          </nav>
        </TextSide>
        <SearchBar>
          <SearchIcon src={search} alt="" />
          <SearchInput
            onChange={(e) => onInputChange(e.target.value)}
            type="search"
            placeholder={
              `Search for ${locationHash === "#/people"
                ? "people..."
                : "movies..."}
              `}
          />
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};
