import styled from "styled-components";

export const TopBarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: ${({ theme }) => theme.colors.white};
    height: clamp(80px, 4.167vw, 4.167vw);
    padding: clamp(16px, 0.83vw, 0.83vw) clamp(16px, 6.042vw, 6.042vw);
    padding-left: calc(clamp(80px, 4.167vw, 4.167vw) + clamp(16px, 6.042vw, 6.042vw));
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Location = styled.span`
    font-size: clamp(20px, 1.042vw, 1.042vw);
    font-weight: 600;
    text-transform: capitalize;
`;
    
export const AuthInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(16px, 0.83vw, 0.83vw);
    cursor: pointer;

    span {
        font-size: clamp(16px, 0.83vw, 0.83vw);
        font-weight: 600;
    }
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: clamp(48px, 2.5vw, 2.5vw);
        height: clamp(48px, 2.5vw, 2.5vw);
        border-radius: 50%;
        font-size: clamp(22px, 1.146vw, 1.146vw);
        ${({ theme }) => {
            const { gray_secundary, gray_text } = theme.colors;

            return `
                background: ${gray_secundary};
                color: ${gray_text};
            `
        }}
    }
`;