import { render } from "@testing-library/react";
import { Button } from ".";
import { theme } from "@/globalStyles";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
	it("Should render properly", () => {
		const { getByRole } = render(
			<ThemeProvider theme={theme}>
				<Button
					styleType="RED"
					onClick={() => "clicked"}
					text="Confirmar"
					disabled={false}
				/>
			</ThemeProvider>
		);

		const button = getByRole("button");
		expect(button).toBeInTheDocument();
	});

	it("Should have corecct styles", () => {
		const { getByRole, rerender } = render(
			<ThemeProvider theme={theme}>
				<Button
					styleType="GREEN"
					onClick={() => "clicked"}
					text="Confirmar"
					disabled={false}
				/>
			</ThemeProvider>
		);
        
		const { red, green } = theme.colors;
		const button = getByRole("button");

		expect(button).toHaveStyle({ 
			background: green,
			color: "white"
		});

		rerender(
			<ThemeProvider theme={theme}>
				<Button
					styleType="RED"
					onClick={() => "clicked"}
					text="Confirmar"
					disabled={false}
				/>
			</ThemeProvider>
		);

		const newButton = getByRole("button");
		expect(newButton).toHaveStyle({ 
			background: red,
			color: "white"
		});
	});

	it("Should call onClick function when enabled ", async () => {
		const onClick = jest.fn();

		const { getByRole, rerender } = render(
			<ThemeProvider theme={theme}>
				<Button
					styleType="GREEN"
					onClick={onClick}
					text="Confirmar"
					disabled={true}
				/>
			</ThemeProvider>
		);

		const button = getByRole("button");
		await userEvent.click(button);
		expect(onClick).not.toBeCalled();

		rerender(
			<ThemeProvider theme={theme}>
				<Button
					styleType="GREEN"
					onClick={onClick}
					text="Confirmar"
					disabled={false}
				/>
			</ThemeProvider>
		);

		const newButton = getByRole("button");
		await userEvent.click(newButton);
		expect(onClick).toBeCalled();
	});
});