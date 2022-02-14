import axios from "axios";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
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
import { setPeople, setTotalPage } from "../../features/people/peopleList/peopleListSlice";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const query = (new URLSearchParams(location.search)).get("query");

  const onInputChange = debounce((value) => {
    const searchParams = new URLSearchParams(location.search);

    axios
      .get(`${apiUrl}search/person?api_key=${apiKey}&query=${value}`)
      .then((response) => {
        dispatch(setPeople(response.data.results));
        dispatch(setTotalPage(response.data.total_pages));
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error, "Something went wrong");
      });

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
            placeholder="Search for movies..." />
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};
