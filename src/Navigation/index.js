import {
  HeaderArea,
  Title,
  NavigationItem,
  NavigationList,
  SearchInput,
  Icon,
  HeaderContainer,
  SearchBar,
  TextSide,
  SearchIcon,
} from "./styled";
import camera from "../Navigation/icons/camera-icon.svg";
import search from "../Navigation/icons/search-icon.svg";

export const Header = ({ title }) => {
  return (
    <HeaderArea>
      <HeaderContainer>
        <TextSide>
          <Title>
            <Icon src={camera} alt="camera icon" />
            {title}
          </Title>
          <nav>
            <NavigationList>
              <NavigationItem>
                <a>Movies</a>
              </NavigationItem>
              <NavigationItem>
                <a>People</a>
              </NavigationItem>
            </NavigationList>
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
