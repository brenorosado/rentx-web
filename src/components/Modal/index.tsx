import * as S from "./styles";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { theme } from "@/globalStyles";

export type ModalInfoProps = {
	visibility: boolean;
	title: string;
	text: string;
	error: string | undefined;
	success: boolean;
}

export const defaultModalInfo: ModalInfoProps = {
	visibility: false,
	title: "",
	text: "",
	error: "",
	success: false
};

type ModalProps = {
    title: string;
    text: string;
    buttonText: string;
    success: boolean;
    onOk: () => void
}

export const Modal = ({ title, text, buttonText, success, onOk }: ModalProps) => {
	return (
		<S.Overlay>
			<S.Modal data-testid="modal">
				{success ? (
					<FaCheck size="clamp(64px, 3.33vw, 3.33vw)" color={theme.colors.green}/>
				) : (

					<IoClose size="clamp(80px, 4.167vw, 4.167vw)" color={theme.colors.red}/>
				)}
				<h3>{title}</h3>
				<p>{text}</p>
				<button onClick={onOk}>{buttonText}</button>
			</S.Modal>
		</S.Overlay>
	);
};