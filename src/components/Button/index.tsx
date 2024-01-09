import * as S from "./styles";

type ButtonProps = {
    type?: "button" | "submit";
    styleType: "RED" | "GREEN" | "TRANSPARENT";
    onClick?: () => void;
    text: string;
    disabled?: boolean;
}

export const Button = ({ 
	type = "button",
	styleType,
	onClick = () => undefined,
	text,
	disabled = false
}: ButtonProps) => {
	return (
		<S.StyledButton
			onClick={onClick}
			type={type}
			styleType={styleType}
			disabled={disabled}
		>
			{text}
		</S.StyledButton>
	);
};
