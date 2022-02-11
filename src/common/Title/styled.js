import styled, { css } from "styled-components";

export const Title = styled.h2`
  margin-top: 56px;
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

  @media(max-width:${({ theme }) => theme.breakpoints.container}){
      margin-top: calc(24px + (56 - 24) * ((100vw - 320px) / (1368 - 320)));
    }

  ${({ movie }) => movie && css`
    font-size: 36px;
    margin-bottom: 32px;
    margin-top: 0px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      font-size: calc(20px + (36 - 20) * ((100vw - 320px) / (1368 - 320)));
      margin-top: calc(21px + (64 - 21) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
`;