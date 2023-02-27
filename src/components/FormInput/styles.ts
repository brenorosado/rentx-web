import styled from "styled-components";

export const FormInputContainer = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.gray_secundary};
    gap: clamp(2px, 0.1042vw, 0.1042vw);
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(24px, 1.25vw, 1.25vw);
    width: clamp(64px, 3.33vw, 3.33vw);

    ${({ theme }) => {
        const { white, gray_text } = theme.colors;
        return `
            color: ${gray_text};
            background: ${white};
        `
    }};
`;

export const InputContainer = styled.div`
    display: flex;
    background: white;
    width: 100%;

    input {
        all: unset;
        background: white;
        font-size: clamp(16px, 0.833vw, 0.833vw);
        padding: clamp(24px, 1.25vw, 1.25vw);
        color: ${({ theme }) => theme.colors.gray_titles};

        ::placeholder {
            color: ${({ theme }) => theme.colors.gray_details};
        }
    }
    
    button {
        all: unset;
        cursor: pointer;
        padding: clamp(8px, 0.42vw, 0.42vw);
        font-size: clamp(20px, 1.042vw, 1.042vw);
        color: ${({ theme }) => theme.colors.gray_details};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;