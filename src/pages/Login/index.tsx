import * as S from "./styles";
import { useForm } from "react-hook-form";
import LoginImage from "@/assets/images/loginImage.png";
import { FormInput } from "@/components/FormInput";
import { RiUser6Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "@/components/Button";
import { useFetch } from "@/hooks/useFetch";
import { useNavigate } from "react-router-dom";

type FormProps = {
    email:string;
    password:string;
}

export const Login = () => {

	const { handleSubmit, register, formState: { errors } } = useForm({
		defaultValues: {
			email: "",
			password: "",
		}
	});

	const { fetch: mergeRegistration, loading, error } = useFetch({
		route: "/account/authenticate",
		method: "post",
		authRequired: false
	});

	const navigate = useNavigate();

	const login = async (data: FormProps) => {
		try {
			const createdAccountRes = await mergeRegistration({ 
				payload: {
					...data,
					role: "USER"
				}
			});
			if (createdAccountRes) {
				console.log("sucess");
				navigate("/inicio");
			}
			else console.log("faild");
		} catch (e) {
			console.log("faild");
		}
	};

	return (
		<S.LoginSection>
			<S.LoginColumnInfo>
				<S.CarImage src={LoginImage} alt="rentX-login"/>
			</S.LoginColumnInfo>
			<S.LoginColumnInfo>
				<h1>Estamos quase lá.</h1>
				<p>Faça seu login para começar uma<br/> experiência incrível.</p>
				<form onSubmit={handleSubmit(login)}>
					<FormInput
						id="email"
						placeHolder="Digite seu e-mail"
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
						placeHolder="Digite sua senha"
						label="Senha"
						icon={<RiUser6Line />}
						register={{
							...register("password", {
								required: "Campo obrigatório."
							})
						}}
						error={errors?.password?.message}
						isPassword={true}
					/>
					<Button 
						styleType="RED"
						text="Login"
						type="submit"
						disabled={loading}
					/>
				</form>
			</S.LoginColumnInfo>
		</S.LoginSection>
	);
};