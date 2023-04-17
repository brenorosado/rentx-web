import styled from "styled-components";

export const FormInputContainer = styled.div<{ error: boolean }>`
    display: flex;
    ${({ theme, error }) => {
		const { gray_secundary, pink } = theme.colors;
		const { x1, x2 } = theme.sizes;

		return `
            gap: ${x2};
            border: ${x1} solid ${error ? pink : gray_secundary};
        `;
	}}
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => {
		const { white, gray_text } = theme.colors;
		const { x24, x64 } = theme.sizes;
		return `
            width: ${x64};
            font-size: ${x24};
            color: ${gray_text};
            background: ${white};
        `;
	}};
`;

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    background: white;
    width: 100%;

    input {
        all: unset;
        background: white;
        width: 100%;
        ${({ theme }) => {
		const { gray_details, gray_titles } = theme.colors;
		const { x16, x24 } = theme.sizes;
		return `
            font-size: ${x16};
            padding: ${x24};
            color: ${gray_titles};

            ::placeholder {
                color: ${gray_details};
            }
        `;
	    }}
    }
    
    button {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        ${({ theme }) => {
		const { gray_details} = theme.colors;
		const { x8, x20 } = theme.sizes;
		return `
            color: ${gray_details};
            padding: ${x8};
            font-size: ${x20};
        `;
	}}
    }
`;

export const ErrorContainer = styled.div`
    position: absolute;
    ${({ theme }) => {
		const { x2, x12 } = theme.sizes;
		const { pink } = theme.colors;
		return `
        bottom: ${x2};
        span {
            display: flex;
            align-items: center;
            padding-left: ${x2};
            gap: ${x2};
            color: ${pink};
            font-size: ${x12};
        }
    `;
	}}
`;