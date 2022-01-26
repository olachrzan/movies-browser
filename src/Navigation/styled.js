import styled from "styled-components";
import SearchIcon from "../images/Search.png"

export const NavigationContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PageHeader = styled.header`
  font-size: 24px;
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

export const ListItem = styled.li`
  margin: 5px;
  padding: 13px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  font-size: 18px;
  
`;

export const SearchBar = styled.input`
  border-radius: 25px;
  border: none;
  padding: 10px;
  width: 300px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: left;
 
`;

export const Icon = styled.img`
  padding: 5px;
  margin-right: 10px;
`;
