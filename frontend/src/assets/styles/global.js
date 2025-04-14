import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial Narrow', sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    font-size: 24px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.menu}
  }
`;
