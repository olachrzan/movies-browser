import styled from "styled-components";

export const HeaderArea = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.white};
  padding: 23px 16px;
`;

export const HeaderContainer = styled.div`
  max-width: 1237px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px;
  }
`;

export const TextSide = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-basis: 495px;
    justify-content: space-between;
    flex-shrink: 1;
  }
`;

export const Icon = styled.img`
  margin-right: 12px;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  display: flex;
  align-items: center;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-left: -25px;
  }
`;

export const NavigationItem = styled.li`
  margin: 0 8px;
  padding: 13px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  font-size: 16px;
  width: 100px;
  text-align: center;
`;

export const SearchBar = styled.div`
  margin-left: 8px;
  flex-shrink: 1;
  border-radius: 25px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-basis: 495px;
    margin-left: 0px;
  }
`;

export const SearchInput = styled.input`
  width: 432px;
  border-radius: 25px;
  border: none;
  padding: 12px 12px 12px 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 25%;
  left: 16px;
`;
