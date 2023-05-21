import { createGlobalStyle } from 'styled-components';

const ResetCSS = createGlobalStyle`
  /* Reset CSS */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: "Roboto", sans-serif;
    line-height: 1.4;
    letter-spacing: 2%;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
`;

export default ResetCSS;