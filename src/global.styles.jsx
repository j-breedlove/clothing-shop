import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
margin: 0;
padding: 20px 40px;
font-family: 'Ubuntu Condensed', sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyles;
