import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        black: "#1B1B1F",
        black_secundary: "#29292E",
        red: "#DC1637",
        green: "#03B352",
        white: "#FFFFFF",
        pink: "#FF99AA",
        gray_main: "#F4F5F6",
        gray_secundary: "#EBEBF0",
        gray_black: "#DEDEE3",
        gray_details: "#AEAEB3",
        gray_text: "#7A7A80",
        gray_titles: "#47474D",
        gray_dark: "#A8A8B3"
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
        background: ${theme.colors.gray_main};
    }
    
    :root {
        font-family: 'Inter';
    }
`;

export default GlobalStyle;