import styled from "styled-components";

export const RegistrationSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: clamp(96px, 5vw, 5vw);
    padding: clamp(64px, 3.33vw, 3.33vw) clamp(116px, 6.042vw, 6.042vw);
    min-height: calc(100vh - clamp(80px, 4.167vw, 4.167vw));
`;

export const CarImage = styled.img`
    width: clamp(352px, 33.75vw, 33.75vw);
    flex-shrink: 0;
`;

export const RegistrationColumnInfo = styled.article`
    display: flex;
    flex-direction: column;
    gap: clamp(24px, 1.25vw, 1.25vw);

    h1 {
        font-family: 'Archivo', sans-serif;
        font-weight: 600;
        font-size: clamp(36px, 1.875vw, 1.875vw);
        ${({ theme }) => theme.colors.gray_titles};
    }

    p {
        font-size: clamp(16px, 0.83vw, 0.83vw);
        color: ${({ theme }) => theme.colors.gray_text};
    }

    form {
        display: flex;
        flex-direction: column;
        gap: clamp(8px, 0.42vw, 0.42vw);
    }
`;