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
  FlexWrapper
} from "./styled";
import CameraIcon from "../Navigation/icons/camera-icon.svg";

export const PageNavigation = ({ title }) => {
  return (
    <Header>
      <Wrapper>
        <FlexWrapper>
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
        </FlexWrapper>
        <SearchWrapper>
          <SearchBar type="search" placeholder="Search for movies..." />
        </SearchWrapper>
      </Wrapper>
    </Header>
  );
};
