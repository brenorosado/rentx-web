import { useState } from "react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import RegistrationImage from "@/assets/images/RegistrationImage.png";
import { FormInput } from "@/components/FormInput";
import { RiUser6Line } from "react-icons/ri";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { Button } from "@/components/Button";
import { useFetch } from "@/hooks/useFetch";
import { Modal } from "@/components/Modal";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { ModalInfoProps, defaultModalInfo } from "@/components/Modal";

const modalSuccessInfo: ModalInfoProps = {
	visibility: true,
	title: "Conta criada",
	text: "Agora você parte da RentX. Seja bem-vindo(a).",
	error: "",
	success: true
};

const modalErrorInfo: ModalInfoProps = {
	visibility: true,
	title: "Erro ao criar conta",
	text: "Ocorreu um erro ao criar sua conta. Revise os dados do formulário.",
	error: "",
	success: false
};

type FormProps = {
    name:string;
    cnh:string;
    email:string;
    password:string;
    passwordConfirmation:string;
}

export const Registration = () => {
	const [modalInfo, setModalInfo] = useState<ModalInfoProps>(
		defaultModalInfo
	);

	const { handleSubmit, register, formState: { errors } } = useForm({
		defaultValues: {
			name: "",
			cnh: "",
			email: "",
			password: "",
			passwordConfirmation: "",
		}
	});

	const { fetch: mergeRegistration } = useFetch({
		route: "/user/sign-up",
		method: "post"
	});

	const navigate = useNavigate();

	const registrate = async (data: FormProps) => {
		const createdAccountRes = await mergeRegistration({ 
			payload: {
				...data,
				role: "USER"
			}
		});

		if (createdAccountRes.status === 201)
			setModalInfo(modalSuccessInfo);

		if(createdAccountRes instanceof AxiosError)
			setModalInfo({
				...modalErrorInfo,
				error: createdAccountRes?.response?.data?.message
			});
	};

	return (
		<S.RegistrationSection>
			<S.RegistrationColumnInfo>
				<h1>Crie sua conta</h1>
				<p>Faça seu cadastro de forma<br/> rápida e fácil.</p>
				<form onSubmit={handleSubmit(registrate)}>
					<FormInput
						id="name"
						placeHolder="Nome"
						label="Nome"
						icon={<RiUser6Line />}
						register={{
							...register("name", {
								required: "Campo obrigatório."
							})
						}}
						error={errors?.name?.message}
					/>
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
						id="cnh"
						placeHolder="CNH"
						label="CNH"
						icon={<MdOutlineDirectionsCarFilled />}
						register={{
							...register("cnh", {
								required: "Campo obrigatório."
							})
						}}
						error={errors?.cnh?.message}
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
					<FormInput
						id="passwordConfirmation"
						placeHolder="Repetir senha"
						label="Repetir senha"
						icon={<AiOutlineLock />}
						register={{
							...register("passwordConfirmation", {
								required: "Campo obrigatório."
							})
						}}
						error={errors?.passwordConfirmation?.message}
						isPassword={true}
					/>

					<Button 
						styleType="RED"
						text="Cadastrar"
						type="submit"
					/>
				</form>
			</S.RegistrationColumnInfo>
			<S.RegistrationColumnInfo>
				<S.CarImage src={RegistrationImage} alt="rentX-registration"/>
			</S.RegistrationColumnInfo>

			{modalInfo.visibility && (
				<Modal
					success={modalInfo.success}
					title={modalInfo.title}
					text={modalInfo.error ? modalInfo.error : modalInfo.text}
					buttonText="Ok"
					onOk={() => {
						setModalInfo(defaultModalInfo);
						modalInfo.success && navigate("/entrar");
					}}
				/>
			)}
		</S.RegistrationSection>
	);
};