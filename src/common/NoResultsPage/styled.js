import styled from "styled-components";

export const NoResultsText = styled.p`
  font-weight: 600;
  font-size: 33px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 22px;
  }
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 250px;
  }
`;
