import styled from "styled-components";
import SearchIcon from "../Navigation/icons/search-icon.svg";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-flow: column wrap;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PageHeader = styled.h1`
  font-size: 22px;
  word-break: normal;
  width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
  }
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavigationItem = styled.li`
  margin: 5px;
  padding: 13px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  font-size: 16px;
  word-break: keep-all;
`;

export const SearchWrapper = styled.div`
  width: 64%;
  display: flex;
  justify-content: flex-end;
`;

export const SearchBar = styled.input`
  border-radius: 25px;
  border: none;
  min-width: 350px;
  padding: 10px;
  text-indent: 40px;
  font-size: 16px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 5% 48%;
`;

export const Icon = styled.img`
  padding: 5px;
  margin-right: 8px;
`;
