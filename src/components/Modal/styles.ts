import styled from "styled-components";
import ModalBackground from "@/assets/images/modal-background.png";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: clamp(80px, 4.166vw, 4.166vw);
    max-width: clamp(344px, 20vw, 20vw);
    background-image: url(${ModalBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    ${({ theme }) => {
		const { x16, x18, x20, x24, x32, x36, x48, x80 } = theme.sizes;
		const { black_secundary, white, gray_dark, gray_titles } = theme.colors;
		return `
        padding: ${x16} ${x80};
        gap: ${x16};
        background-color: ${black_secundary};
        
        h3 {
            font-family: 'Archivo', sans-serif;
            text-align: center;
            margin-top: ${x32};
            font-size: ${x36};
            color: ${white};
        }

        p {
            font-family: 'Inter', sans-serif;
            text-align: center;
            font-size: ${x18};
            color: ${gray_dark};
        }

        button {
            all: unset;
            cursor: pointer;
            background-opacity: 0.3;
            padding: ${x20} ${x48};
            background: ${gray_titles};
            color: ${white};
            margin-top: ${x24};
            font-size: ${x16};
        }
        `;
	}}
`;