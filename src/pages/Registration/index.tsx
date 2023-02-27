import * as S from "./styles";
import { useForm } from "react-hook-form";
import RegistrationImage from "../../assets/images/RegistrationImage.png";
import { FormInput } from "../../components/FormInput";
import { RiUser6Line } from "react-icons/ri";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { Button } from "../../components/Button";

export const Registration = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const registrate = async (data: any) => {
        console.log("data", data);
    }

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
                        icon={<RiUser6Line />}
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
        </S.RegistrationSection>
    )
}