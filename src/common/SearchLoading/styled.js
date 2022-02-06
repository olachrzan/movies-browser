import styled from "styled-components";

export const LoadingText = styled.p`
  font-weight: 600;
  font-size: 33px;
  letter-spacing: -0.5px;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 22px;
  }
`;