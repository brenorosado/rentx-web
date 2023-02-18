import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        black: "#1B1B1F",
        red: "#DC1637",
        green: "#03B352",
        white: "#FFFFFF",
        pink: "#FF99AA"
    }
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        font-family: 'Inter';
    }
`;

export default GlobalStyle;