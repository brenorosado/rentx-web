import { SideBar } from ".";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../../globalStyles";
import "@testing-library/jest-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe("SideBar component", () => {
    it("Should toggle sidebar items visibility when clicking the logo", async () => {
        const { getByRole, queryByRole } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <SideBar currentPath="/"/>
                </BrowserRouter>
            </ThemeProvider>
        );

        const logoButton = getByRole("button");
        const list = getByRole("list");

        expect(logoButton).toBeInTheDocument()
        expect(list).toBeInTheDocument();
        
        await userEvent.click(logoButton);
        expect(queryByRole("list")).not.toBeInTheDocument();
        
        await userEvent.click(logoButton);
        expect(queryByRole("list")).toBeInTheDocument();
    });

    it("The correct icon must be selected" , async () => {
        type TestCaseType = {
            currentPath: string;
            mustBeSelectedIndex: number;
        }

        const cases: TestCaseType[] = [
            {
                currentPath: "/inicio",
                mustBeSelectedIndex: 0
            },
            {
                currentPath: "/carros",
                mustBeSelectedIndex: 1
            },
            {
                currentPath: "/minha-conta",
                mustBeSelectedIndex: 2    
            }
        ]
        
        const { getAllByRole, rerender } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <SideBar currentPath="/" />
                </BrowserRouter>
            </ThemeProvider>
        );

        const links = await getAllByRole("listitem");
        expect(links?.length).toEqual(3);
        cases.forEach(({ currentPath, mustBeSelectedIndex}: TestCaseType) => {
            rerender(
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <SideBar currentPath={currentPath} />
                    </BrowserRouter>
                </ThemeProvider>
            );

            const items = getAllByRole("listitem");
            const selectedItem = items[mustBeSelectedIndex];

            expect(items.length).toBe(3);

            items.splice(mustBeSelectedIndex, 1);
            
            expect(items.length).toBe(2);
            expect(items[0].getAttribute("class")).toEqual(items[1].getAttribute("class"));
            expect(selectedItem.getAttribute("class")).not.toBe(items[0].getAttribute("class"));
        });
    })
});