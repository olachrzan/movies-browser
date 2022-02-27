import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1260px;
  padding: 0px 20px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0px 16px;
  }
`;