import styled from "styled-components";

export const RegistrationMain = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

export const CarImage = styled.img`
    width: 648px;
`;

export const RegistrationColumnInfo = styled.article`
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
        font-family: 'Archivo', sans-serif;
        font-weight: 600;
        font-size: 36px;
        ${({ theme }) => theme.colors.gray_titles};
    }

    p {
        font-size: 16px;
        ${({ theme }) => theme.colors.gray_text};
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;