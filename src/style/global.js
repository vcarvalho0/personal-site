import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body { 
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    font-family: "Open Sans" sans-serif;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`
