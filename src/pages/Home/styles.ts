import styled from "styled-components";
import FrameImage from "../../assets/images/homeFrame.png";

export const HomeMain = styled.main`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.black};
    overflow: hidden;
    padding: clamp(16px, 5.42vw, 5.42vw) clamp(16px, 8.33vw, 8.83vw);
    display: flex;
    justify-content: center;
    gap: clamp(32px, 5vw, 5vw);
    flex-wrap: wrap;
`;

export const ContentColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: clamp(32px, 1.67vw, 1.67vw);
    justify-content: center;

    h1 {
        font-family: 'Archivo', sans-serif;
        font-size: clamp(54px, 2.81vw, 2.81vw);
        color: ${({ theme }) => theme.colors.white};
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: clamp(20px, 1.04vw, 1.04vw);
        color: ${({ theme }) => theme.colors.white};
        font-weight: 400;
        margin-bottom: clamp(32px, 1.67vw, 1.67vw);
    }
`;

export const LogoImage = styled.img`
    width: clamp(200px, 10.42vw, 10.42vw);
    margin-bottom: clamp(40px, 4.58vw, 4.58vw);
`;

export const FrameImageContainer = styled.div`
    background: url(${FrameImage});
    height: clamp(360px, 56.76vh, 56.76vh);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
`;

export const CarImage = styled.img`
    width: clamp(352px, 31.67vw, 31.67vw);
`;