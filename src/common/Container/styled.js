import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1408px;
  padding: 56px 20px 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    padding: 24px 16px 30px;
  }
`;