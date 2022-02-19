import { useLocation, useNavigate } from "react-router";
import debounce from "lodash.debounce";
import camera from "./icons/camera-icon.svg";
import search from "./icons/search-icon.svg";
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

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationHash = window.location.hash;
  const searchParams = new URLSearchParams(location.search);

  const onInputchange = debounce(({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
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
            onChange={onInputchange}
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
