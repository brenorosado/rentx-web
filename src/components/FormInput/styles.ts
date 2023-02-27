import styled from "styled-components";

export const FormInputContainer = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.gray_secundary};
    gap: 2px;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 64px;

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
        font-size: 16px;
        padding: 24px;
    }
    
    button {
        all: unset;
        cursor: pointer;
        padding: 8px;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.gray_details};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;