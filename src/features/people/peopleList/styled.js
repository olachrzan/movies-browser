import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(208px, 1fr)); 
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr 1fr;
  }
`;