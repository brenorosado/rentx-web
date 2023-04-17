import styled from "styled-components";

export const TopBarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: clamp(80px, 4.167vw, 4.167vw);
    padding-left: calc(clamp(80px, 4.167vw, 4.167vw) + clamp(16px, 6.042vw, 6.042vw));
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => {
		const { x16 } = theme.sizes;
		const { white } = theme.colors;
		return `
            padding: ${x16} clamp(16px, 6.042vw, 6.042vw);
            background: ${white};
        `;
	}}
`;

export const Location = styled.span`
    font-weight: 600;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.sizes.x20};
`;
    
export const AuthInfoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    ${({ theme }) => {
		const { x12, x24 } = theme.sizes;
		const { gray_secundary, gray_text } = theme.colors;

		return `
        gap: ${x12};
        
        span {
            font-size: ${x12};
            font-weight: 600;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-size: clamp(22px, 1.146vw, 1.146vw);
            width: ${x24};
            height: ${x24};
            background: ${gray_secundary};
            color: ${gray_text};
        }
        `;
	}}
`;