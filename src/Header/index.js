import {
  HeaderArea,
  HeaderContainer,
  Title,
  LinkList,
  Icon,
  ListItem,
  TextSide,
  SearchBar,
  SearchIcon,
  SearchInput
} from "./styled";
import camera from "../Header/icons/camera-icon.svg";
import search from "../Header/icons/search-icon.svg";

export const Header = () => {
  return (
    <HeaderArea>
      <HeaderContainer>
        <TextSide>
          <Title><Icon src={camera} alt="" />Movies Browser</Title>
          <nav>
            <LinkList>
              <ListItem>
                <a>Movies</a>
              </ListItem>
              <ListItem>
                <a>People</a>
              </ListItem>
            </LinkList>
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
