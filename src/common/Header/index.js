import {
  HeaderArea,
  HeaderContainer,
  Title,
  NavList,
  Icon,
  ListItem,
  TextSide,
  ListLink,
} from "./styled";
import camera from "./icons/camera-icon.svg";
import { Search } from "../../features/Search/";

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
        <div>{<Search />}</div>
      </HeaderContainer>
    </HeaderArea>
  );
};
