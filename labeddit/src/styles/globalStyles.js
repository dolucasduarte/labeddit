import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #dae0e6;
    
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
}

a, button {
    cursor: pointer;
}
`;

export default GlobalStyle;
