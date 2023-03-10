import styled from "styled-components";

export const StyledButton = styled.button<{ styleType: "RED" | "GREEN" }>`
    padding: clamp(29px, 1.5vw, 1.52vw) clamp(80px, 4.17vw, 4.17vw);
    outline: none;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: clamp(18px, 0.94vw, 0.94vw);
    color: white;
    cursor: pointer;

    ${({ theme, styleType }) => `
        background: ${styleType === "RED" ? theme.colors.red : theme.colors.green};
    `}
`;