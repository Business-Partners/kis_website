import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }

  body {
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }
`;
