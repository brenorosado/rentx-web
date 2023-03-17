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
    background: ${({ theme }) => theme.colors.red};
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(80px, 4.167vw, 4.167vw);
    height: clamp(80px, 4.167vw, 4.167vw);
    cursor: pointer;

    img {
        width: clamp(29.09px, 1.515vw, 1.515vw);
    }
`;
    
export const SideBar = styled.ul`
    height: calc(100vh - clamp(80px, 4.167vw, 4.167vw));
    background: ${({ theme }) => theme.colors.black};
    width: clamp(80px, 4.167vw, 4.167vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: clamp(8px, 0.42vw, 0.42vw);
`;

export const SideItem = styled.li<{ isSelected: boolean }>`
    font-size: clamp(22px, 1.146vw, 1.146vw);
    padding: clamp(16px, 0.83vw, 0.83vw);
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme, isSelected }) => {
		const { red, black, white, gray_text } = theme.colors;
		return `
            border-left: clamp(3px, 0.15625vw, 0.15625vw) solid ${isSelected ? red : black};
            background: ${isSelected ? "black" : black};
            color: ${isSelected ? white : gray_text};
        `;
	}};
    cursor: pointer;
`;