import styled from "styled-components";

export const Wrapper = styled.section`
    margin-bottom: 64px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      margin-bottom: calc(21px + (64 - 21) * ((100vw - 320px) / (1368 - 320)));
    }
`;