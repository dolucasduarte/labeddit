import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background: #dae0e6;
    
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
}

a, button {
    cursor: pointer;
}
`;

export default GlobalStyle;
