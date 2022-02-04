import styled from "styled-components";

export const Title = styled.h2`
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