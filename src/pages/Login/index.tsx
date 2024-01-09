import { FormInput } from "@/components/FormInput";
import * as S from "./styles";
import LoginImage from "@/assets/images/loginImage.png";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Button } from "@/components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { AxiosError } from "axios";
import { Modal, ModalInfoProps, defaultModalInfo } from "@/components/Modal";
import { useState } from "react";

const modalErrorInfo: ModalInfoProps = {
	visibility: true,
	title: "Erro ao fazer login",
	text: "Ocorreu um erro ao realizar a autenticação. Revise os dados.",
	error: "",
	success: false
};

type LoginFormInputs = {
	email: string;
	password: string;
}

const defaultValues: LoginFormInputs = {
	email: "",
	password: ""
};

export const Login = () => {
	const [modalInfo, setModalInfo] = useState<ModalInfoProps>(defaultModalInfo);

	const { fetch: signIn } = useFetch({
		route: "/user/sign-in",
		method: "post"
	});

	const navigate = useNavigate();
	
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ defaultValues });

	const login = async (data: LoginFormInputs) => {
		const signInRequest = await signIn({ payload: data});
		if(signInRequest.status === 200)
			navigate("/inicio");

		if(signInRequest instanceof AxiosError) {
			setModalInfo({
				...modalErrorInfo,
				error: signInRequest?.response?.data?.message
			});
		}
	};

	return (
		<S.LoginSection>
			<S.LoginColumnInfo>
				<S.CarImage src={LoginImage} alt="rentX-registration"/>
			</S.LoginColumnInfo>
			<S.LoginColumnInfo>
				<h1>Estamos quase lá.</h1>
				<p>Faça seu login para começar uma<br/> experiência incrível.</p>	
				<form onSubmit={handleSubmit(login)}>
					<FormInput
						id="email"
						placeHolder="E-mail"
						label="E-mail"
						icon={<AiOutlineMail />}
						register={{
							...register("email", {
								required: "Campo obrigatório."
							})
						}}
						error={errors?.email?.message}
					/>
					<FormInput
						id="password"
						placeHolder="Senha"
						label="Senha"
						icon={<AiOutlineLock />}
						register={{
							...register("password", {
								required: "Campo obrigatório."
							})
						}}
						error={errors?.password?.message}
						isPassword={true}
					/>

					<S.ForgottenPasswordContainer>
						<Link to="/cadastro">
							<span>Esqueci minha senha</span>
						</Link>
					</S.ForgottenPasswordContainer>

					<S.LoginButtonsContainer>
						<Button 
							styleType="RED"
							text="Login"
							type="submit"
						/>
						<Button 
							styleType="TRANSPARENT"
							text="Criar conta gratuita"
							type="button"
							onClick={() => navigate("/cadastro")}
						/>
					</S.LoginButtonsContainer>
				</form>
			</S.LoginColumnInfo>

			{modalInfo.visibility && (
				<Modal
					success={modalInfo.success}
					title={modalInfo.title}
					text={modalInfo.error ? modalInfo.error : modalInfo.text}
					buttonText="Ok"
					onOk={() => {
						setModalInfo(defaultModalInfo);
					}}
				/>
			)}
		</S.LoginSection>
	);
};