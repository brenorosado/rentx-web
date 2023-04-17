import styled from "styled-components";

export const SideBarContainer = styled.aside`
    position: fixed;
    top: 0;
    z-index: 10;
    left: 0;
`;
    
export const LogoContainer = styled.button`
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${({ theme }) => {
		const { x80 } = theme.sizes;
		const { red } = theme.colors;
		return `
            width: ${x80};
            height: ${x80};
            background: ${red};
        `;
	}}

    img {
        width: clamp(29.09px, 1.515vw, 1.515vw);
    }
`;
    
export const SideBar = styled.ul`
    background: ${({ theme }) => theme.colors.black};
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => {
		const { x8, x80 } = theme.sizes;
		return `
            height: calc(100vh - ${x80});
            width: ${x80};
            gap: ${x8};
        `;
	}}
`;

export const SideItem = styled.li<{ isSelected: boolean }>`
    font-size: clamp(22px, 1.146vw, 1.146vw);
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme, isSelected }) => {
		const { red, black, white, gray_text } = theme.colors;
		const { x16 } = theme.sizes;
		return `
            padding: ${x16};   
            border-left: clamp(3px, 0.15625vw, 0.15625vw) solid ${isSelected ? red : black};
            background: ${isSelected ? "black" : black};
            color: ${isSelected ? white : gray_text};
        `;
	}};
    cursor: pointer;
`;