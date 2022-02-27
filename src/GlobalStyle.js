import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    word-break: break-word;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.darkText};
    padding-bottom: 103px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      padding-bottom: calc(31px + (103 - 31) * ((100vw - 320px) / (1368 - 320)));
    }
  }
`;