import styled from "styled-components";

export const Image = styled.img`
  display: block;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 250px;
  }
`;