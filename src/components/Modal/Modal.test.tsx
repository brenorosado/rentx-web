import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { Modal } from ".";
import { theme } from "../../globalStyles";

describe("Modal component", () => {
    it("Should render properly", () => {
        const onOk = jest.fn();
        
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Modal
                    success={true}
                    title="Modal title"
                    text="Modal text"
                    buttonText="Ok"
                    onOk={onOk}
                />
            </ThemeProvider>
        );

        const modal = getByTestId("modal");
        expect(modal).toBeInTheDocument();
    });

    it("Should render the right texts", () => {
        const onOk = jest.fn();
        
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Modal
                    success={true}
                    title="Modal title"
                    text="Modal text"
                    buttonText="Ok"
                    onOk={onOk}
                />
            </ThemeProvider>
        );

        const title = getByText("Modal title");
        const text = getByText("Modal text");
        const button = getByText("Ok");
        expect(title).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it("Should call the button function", async () => {
        const onOk = jest.fn();
        
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Modal
                    success={true}
                    title="Modal title"
                    text="Modal text"
                    buttonText="Ok"
                    onOk={onOk}
                />
            </ThemeProvider>
        );

        const button = getByText("Ok");

        await userEvent.click(button);
        expect(onOk).toBeCalled();
    });
})