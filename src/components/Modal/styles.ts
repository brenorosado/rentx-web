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
    background-color: ${({ theme }) => theme.colors.black_secundary};
    padding: clamp(16px, 0.83vw, 0.83vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(16px, 0.83vw, 0.83vw);
    padding: clamp(80px, 4.166vw, 4.166vw);
    max-width: clamp(344px, 20vw, 20vw);
    background-image: url(${ModalBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% auto;

    h3 {
        margin-top: clamp(32px, 1.667vw, 1.667vw);
        font-family: 'Archivo', sans-serif;
        font-size: clamp(36px, 1.875vw, 1.875vw);
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-size: clamp(18px, 0.9375vw, 0.9375vw);
        color: ${({ theme }) => theme.colors.gray_dark};
        text-align: center;
    }

    button {
        all: unset;
        padding: clamp(20px, 1.042vw, 1.042vw) clamp(48px, 2.5vw, 2.5vw);
        ${({ theme }) => {
		const { gray_titles, white } = theme.colors;

		return `
                background: ${gray_titles};
                color: ${white};
            `;
	}};
        margin-top: clamp(24px, 1.25vw, 1.25vw);
        font-size: clamp(16px, 0.83vw, 0.83vw);
        cursor: pointer;
        background-opacity: 0.3;
    }
`;