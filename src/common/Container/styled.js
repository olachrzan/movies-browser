import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1408px;
    padding: 56px 20px 100px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
      padding: 24px 16px 30px;
    }
`;