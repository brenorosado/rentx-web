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
	},

	sizes: {
		x80: "clamp(80px, 4.167vw, 4.167vw)",
		x64: "clamp(64px, 3.33vw, 3.33vw)",
		x48: "clamp(48px, 2.5vw, 2.5vw)",
		x36: "clamp(36px, 1.875vw, 1.875vw)",
		x32: "clamp(32px, 1.667vw, 1.667vw)",
		x24: "clamp(24px, 1.25vw, 1.25vw)",
		x20: "clamp(20px, 1.042vw, 1.042vw)",
		x18: "clamp(18px, 0.9375vw, 0.9375vw)",
		x16: "clamp(16px, 0.83vw, 0.83vw)",
		x12: "clamp(12px, 0.625vw, 0.625vw)",
		x8: "clamp(8px, 0.42vw, 0.42vw)",
		x4: "clamp(4px, 0.21vw, 0.21vw)",
		x2: "clamp(2px, 0.1042vw, 0.1042vw)",
		x1: "clamp(1px, 0.052vw, 0.052vw)"
	},
};

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