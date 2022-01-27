import {
  NavigationContainer,
  NavWrapper,
  PageHeader,
  LinkList,
  SearchBar,
  Icon,
  ListItem
} from "./styled";
import CameraIcon from "../Navigation/icons/camera-icon.svg";

export const Navigation = ({ title }) => {
  return (
    <NavigationContainer>
      <NavWrapper>
        <Icon src={CameraIcon} alt="camera icon" />
        <PageHeader>{title}</PageHeader>
        <LinkList>
          <ListItem>
            <a>Movies</a>
          </ListItem>
          <ListItem>
            <a>People</a>
          </ListItem>
        </LinkList>
      </NavWrapper>
      <SearchBar type="search" placeholder="Search for movies..." />
    </NavigationContainer>
  );
};
