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
import { useReplaceQueryParameter } from "../../queryParameters";

export const Header = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const locationHash = window.location.hash;

  const onInputchange = debounce(({ target }) => {
    replaceQueryParameter({
      value: target.value.trim(),
      key: "search"
    })
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
