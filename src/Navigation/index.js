import {
  Header,
  PageHeader,
  NavigationItem,
  Navigation,
  SearchBar,
  Icon,
  HeaderWrapper,
  Wrapper,
  SearchWrapper,
} from "./styled";
import CameraIcon from "../Navigation/icons/camera-icon.svg";

export const PageNavigation = ({ title }) => {
  return (
    <Header>
      <Wrapper>
        <HeaderWrapper>
          <Icon src={CameraIcon} alt="camera icon" />
          <PageHeader>{title}</PageHeader>
        </HeaderWrapper>
        <Navigation>
          <NavigationItem>
            <a>Movies</a>
          </NavigationItem>
          <NavigationItem>
            <a>People</a>
          </NavigationItem>
        </Navigation>
        <SearchWrapper>
          <SearchBar type="search" placeholder="Search for movies..." />
        </SearchWrapper>
      </Wrapper>
    </Header>
  );
};
