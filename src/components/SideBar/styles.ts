import styled from "styled-components";

export const SideBarContainer = styled.aside`
    position: fixed;
    left: 0;
`;
    
export const LogoContainer = styled.button`
    outline: none;
    border: none;
    background: ${({ theme }) => theme.colors.red};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;

    img {
        width: 29.09px;
    }
`;
    
export const SideBar = styled.ul`
    height: calc(100vh - 80px);
    background: ${({ theme }) => theme.colors.black};
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
`;

export const SideItem = styled.li<{ isSelected: boolean }>`
    font-size: 22px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme, isSelected }) => {
        const { red, black, white, gray_text } = theme.colors;
        return `
            border-left: 3px solid ${isSelected ? red : black};
            background: ${isSelected ? "black" : black};
            color: ${isSelected ? white : gray_text};
        `;
    }};

    cursor: pointer;
`;