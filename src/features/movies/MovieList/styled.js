import styled from "styled-components";

export const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 12px;
    font-size: 18px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto 40px;
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(324px, 1fr)); */
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;