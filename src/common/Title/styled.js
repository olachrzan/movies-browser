import styled, { css } from "styled-components";

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

  ${({ movie }) => movie && css`
    font-size: 36px;
    margin-bottom: 32px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}px){
      font-size: calc(20px + (36 - 20) * ((100vw - 320px) / (1368 - 320)));
      margin-top: calc(21px + (64 - 21) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
`;