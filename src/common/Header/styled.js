import styled, { css } from "styled-components";

export const HeaderArea = styled.div`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.white};
  padding: 23px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 16px 0;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 1408px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 0 16px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-basis: 420px;
    justify-content: space-evenly;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-basis: 360px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    font-weight: 500;
  }
`;

export const Icon = styled.img`
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 16px;
    margin-right: 8px;
  }
`;

export const NavList = styled.ul`
  margin: 0 0 0 72px;
  padding: 0;
  list-style: none;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0 0 0 7px;
  }
`;

export const ListItem = styled.li`
  margin: 0 8px;
  padding: 14px 24px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: max-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 10px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 8px 12px;
    margin: 0 2px;
  }

  ${({ inactive }) => inactive && css`
    border: none;
  `}
`;

export const ListLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }
`;

export const SearchBar = styled.div`
  flex-shrink: 1;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-basis: 495px;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 25%;
  left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    top: 30%;
    left: 20px;
    width: 15px;
  }
`;

export const SearchInput = styled.input`
  width: 432px;
  border-radius: 25px;
  border: none;
  padding: 15px 12px 12px 45px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
  }
`;
