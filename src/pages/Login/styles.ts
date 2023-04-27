import styled from "styled-components";

export const LoginSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: clamp(96px, 5vw, 5vw);
    padding: clamp(64px, 3.33vw, 3.33vw) clamp(116px, 6.042vw, 6.042vw);
    min-height: calc(100vh - clamp(80px, 4.167vw, 4.167vw));
`;

export const CarImage = styled.img`
    width: clamp(272px, 33.75vw, 33.75vw);
    flex-shrink: 0;
`;

export const LoginColumnInfo = styled.article`
    display: flex;
    flex-direction: column;
    ${({ theme }) => {
		const { x8, x16, x24, x36 } = theme.sizes;
		const { gray_titles, gray_text } = theme.colors;
		return `
            gap: ${x24};

            h1 {
                font-family: 'Archivo', sans-serif;
                font-weight: 600;
                font-size: ${x36};
                ${gray_titles};
            }

            p {
                font-size: ${x16};
                color: ${gray_text};
            }

            form {
                min-width: 272px;
                display: flex;
                flex-direction: column;
                gap: ${x8};
            }
        `;
	}}
`;