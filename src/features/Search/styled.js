import styled from "styled-components";

export const SearchBar = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-basis: 100%;
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 10px;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 25%;
  left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    top: 30%;
    left: 16px;
    width: 15px;
  }
`;

export const SearchInput = styled.input`
  width: 432px;
  border-radius: 25px;
  border: none;
  padding: 14px 12px 14px 45px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    padding: 12px 12px 12px 38px;
  }
`;
