import styled, { css } from "styled-components";

export const Section = styled.section`
  margin-bottom: 64px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}){
    margin-bottom: calc(21px + (64 - 21) * ((100vw - 320px) / (1368 - 320)));
  }

  ${({ person }) => person && css`
    margin-top: 56px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      margin-top: calc(23px + (56 - 23) * ((100vw - 320px) / (1368 - 320)));
    }
  `}

  ${({ last }) => last && css`
    margin-bottom: 0px;
  `}
`;