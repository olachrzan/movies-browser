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
import camera from "../Header/icons/camera-icon.svg";
import search from "../Header/icons/search-icon.svg";

export const Header = () => {
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
                <ListLink>Movies</ListLink>
              </ListItem>
              <ListItem inactive>
                <ListLink>People</ListLink>
              </ListItem>
            </NavList>
          </nav>
        </TextSide>
        <SearchBar>
          <SearchIcon src={search} alt="" />
          <SearchInput type="search" placeholder="Search for movies..." />
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};
