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
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
    
    :root {
        font-family: 'Inter';
    }
`;

export default GlobalStyle;