import { queryByText, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { FormInput } from ".";
import { theme } from "../../globalStyles";
import { AiOutlineMail } from "react-icons/ai";
import userEvent from "@testing-library/user-event";

describe("FormInput component", () => {
    it("Should render properly", () => {
        const { getByPlaceholderText } = render(
            <ThemeProvider theme={theme}>
                <FormInput
                    label="E-mail"
                    id="email"
                    placeHolder="Digite seu e-mail"
                    icon={<AiOutlineMail />}
                />
            </ThemeProvider>
        );

        const input = getByPlaceholderText("Digite seu e-mail");
        expect(input).toBeInTheDocument();
    });

    it("Should have correct value after typing", async () => {
        const { getByPlaceholderText } = render(
            <ThemeProvider theme={theme}>
                <FormInput
                    label="E-mail"
                    id="email"
                    placeHolder="Digite seu e-mail"
                    icon={<AiOutlineMail />}
                />
            </ThemeProvider>
        );

        const input = getByPlaceholderText("Digite seu e-mail");
        await userEvent.type(input, "brenorosado.cjr@gmail.com");
        expect(input).toHaveValue("brenorosado.cjr@gmail.com");
    });
    
    it("Should toggle text vilibility when it's a password input", async () => {
        const { getByPlaceholderText, getByRole } = render(
            <ThemeProvider theme={theme}>
                <FormInput
                    isPassword={true}
                    label="Senha"
                    id="password"
                    placeHolder="Digite sua senha"
                    icon={<AiOutlineMail />}
                />
            </ThemeProvider>
        );

        const input = getByPlaceholderText("Digite sua senha");
        const button = getByRole("button");

        await userEvent.type(input, "password123");
        expect(input).toHaveProperty("type", "password");
        await userEvent.click(button)
        expect(input).toHaveProperty("type", "text");
        await userEvent.click(button)
        expect(input).toHaveProperty("type", "password");
    });

    it("Should show error when it exists", async () => {
        const { getByText, queryByText, rerender } = render(
            <ThemeProvider theme={theme}>
                <FormInput
                    isPassword={true}
                    label="Senha"
                    id="password"
                    placeHolder="Digite sua senha"
                    error="Senha inadequada"
                    icon={<AiOutlineMail />}
                />
            </ThemeProvider>
        );

        const errorMessage = getByText("Senha inadequada");
        expect(errorMessage).toBeInTheDocument();

        rerender(
            <ThemeProvider theme={theme}>
                <FormInput
                    isPassword={true}
                    label="Senha"
                    id="password"
                    placeHolder="Digite sua senha"
                    icon={<AiOutlineMail />}
                />
            </ThemeProvider> 
        );

        const newErrorMessage = queryByText("Senha inadequada");
        expect(newErrorMessage).not.toBeInTheDocument();
    });
});