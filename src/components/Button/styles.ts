import styled from "styled-components";


const getStyleType = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	themeColors: any,
	styleType: "RED" | "GREEN" | "TRANSPARENT"
) => {
	const styleTypes = {
		RED: `
      color: ${themeColors.white};
      background: ${themeColors.red};
    `,
		GREEN: `
      color: ${themeColors.white};
      background: ${themeColors.green};
    `,
		TRANSPARENT: `
      background: transparent;
      color: ${themeColors.gray_titles};
      border: 1px solid ${themeColors.gray_black};
    `
	};

	return styleTypes[styleType];
};

export const StyledButton = styled.button<{ styleType: "RED" | "GREEN" | "TRANSPARENT" }>`
    padding: clamp(24px, 1.25vw, 1.25vw) clamp(80px, 4.17vw, 4.17vw);
    outline: none;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: clamp(18px, 0.94vw, 0.94vw);
    color: white;
    cursor: pointer;

    ${({ theme, styleType }) =>
		getStyleType(theme.colors, styleType)}
`;