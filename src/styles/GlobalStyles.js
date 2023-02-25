import { css, useTheme } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();

  return css`
    html {
      box-sizing: border-box;
      scroll-behavior: smooth;
      /* width: 100vw;
    overflow-x: hidden; */
    }

    *,
    *::after,
    *::before {
      box-sizing: inherit;
    }

    body {
      font-family: 'Roboto', sans-serif;
      /* min-height: 100vh;
    margin: 0; */
      /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
      color: ${theme.colors.main};
      background-color: ${theme.colors.white};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    address {
      font-style: normal;
    }

    button {
      padding: 0;
      border: none;
      font: inherit;
      color: inherit;
      background-color: transparent;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `;
};
