import styled from "styled-components";

export const StyledButton = styled.button<{ styleType: "RED" | "GREEN" }>`
    padding: clamp(24px, 1.25vw, 1.25vw) clamp(80px, 4.17vw, 4.17vw);
    outline: none;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: clamp(18px, 0.94vw, 0.94vw);
    color: white;
    cursor: pointer;

    ${({ theme, styleType, disabled }) => {
		const { red, green } = theme.colors;

		return `
            opacity: ${disabled ? "0.7" : "1"};
            background: ${styleType === "RED" ? red : green};
        `;
	}}
`;