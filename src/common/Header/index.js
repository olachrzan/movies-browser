
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
import { selectPeopleByQuery, selectPeopleList, setPeople } from "../../features/people/peopleList/peopleListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = (new URLSearchParams(location.search)).get("query");
  const people = useSelector(selectPeopleList);


  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    target.value !== "" && target.value !== undefined && axios
      .get(`${apiUrl}search/person?api_key=${apiKey}&query=${target.value}`)
      .then((response) => {
        dispatch(setPeople(response.data.results));
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error, "Something went wrong");
      });

    if (target.value.trim() === "") {
      searchParams.delete("query");
    } else {
      searchParams.set("query", target.value);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

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
            value={query || ""}
            onChange={onInputChange}
            type="search"
            placeholder="Search for movies..." />
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};
