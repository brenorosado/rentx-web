import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { TopBar } from ".";
import { theme } from "../../globalStyles";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
  }));

describe("TopBar component", () => {
    it("Should render correct location name", () => {
        type TestCaseProps = {
            path: string;
            location: string;
        }

        const cases: TestCaseProps[] = [
            {
                path: "/inicio",
                location: "Início"
            },
            {
                path: "/carros",
                location: "Carros"
            },
            {
                path: "/carros/12j32n3124jk1231",
                location: "Carros"
            },
            {
                path: "/minha-conta",
                location: "Perfil"
            },
            {
                path: "/minha-conta/esqueci-minha-senha",
                location: "Perfil"
            },
            {
                path: "/cadastro",
                location: "Cadastro"
            },
            {
                path: "/login",
                location: "Login"
            },
        ];

        const { getByText, rerender } =render (
            <ThemeProvider theme={theme}>
                <TopBar currentPath="/inicio" />
            </ThemeProvider>
        );

        cases.forEach(({ path, location }) => {
            rerender (
                <ThemeProvider theme={theme}>
                    <TopBar currentPath={path} />
                </ThemeProvider>
            );

            expect(getByText(location)).toBeInTheDocument();
        })
    })
})