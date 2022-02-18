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

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationHash = window.location.hash;
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  const onInputchange = ({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
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
            onChange={onInputchange}
            value={query || ""}
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
