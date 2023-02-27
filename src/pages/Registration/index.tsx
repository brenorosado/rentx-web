import * as S from "./styles";
import { useForm } from "react-hook-form";
import RegistrationImage from "../../assets/images/RegistrationImage.png";
import { FormInput } from "../../components/FormInput";
import { RiUser6Line } from "react-icons/ri";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { Button } from "../../components/Button";

export const Registration = () => {
    const { handleSubmit, register } = useForm();

    const registrate = async (data: any) => {
        console.log("data", data);
    }

    const errorHandler = (errors: any) => {
        console.log("errors", errors)
    }

    return (
        <S.RegistrationMain>
            <S.RegistrationColumnInfo>
                <h1>Crie sua conta</h1>
                <p>Faça seu cadastro de forma<br/> rápida e fácil.</p>
                <form onSubmit={handleSubmit(registrate, errorHandler)}>
                    <FormInput
                        id="name"
                        placeHolder="Nome"
                        label="Nome"
                        icon={<RiUser6Line />}
                        register={{
                            ...register("name", {
                                required: "Campo 'Nome' obrigatório."
                            })
                        }}
                    />
                    <FormInput
                        id="email"
                        placeHolder="E-mail"
                        label="E-mail"
                        icon={<AiOutlineMail />}
                        register={{
                            ...register("email", {
                                required: "Campo 'E-mail' obrigatório."
                            })
                        }}
                    />
                    <FormInput
                        id="cnh"
                        placeHolder="CNH"
                        label="CNH"
                        icon={<MdOutlineDirectionsCarFilled />}
                        register={{
                            ...register("cnh", {
                                required: "Campo 'E-mail' obrigatório."
                            })
                        }}
                    />
                    <FormInput
                        id="password"
                        placeHolder="Senha"
                        label="Senha"
                        icon={<RiUser6Line />}
                        register={{
                            ...register("password", {
                                required: "Campo 'Senha' obrigatório."
                            })
                        }}
                        isPassword={true}
                    />
                    <FormInput
                        id="passwordConfirmation"
                        placeHolder="Repetir senha"
                        label="Repetir senha"
                        icon={<AiOutlineLock />}
                        register={{
                            ...register("passwordConfirmation", {
                                required: "Campo 'Repetir senha' obrigatório."
                            })
                        }}
                        isPassword={true}
                    />

                    <Button 
                        styleType="RED"
                        text="Cadastrar"
                        type="submit"
                    />
                </form>
            </S.RegistrationColumnInfo>
            <S.CarImage src={RegistrationImage} alt="rentX-registration"/>
        </S.RegistrationMain>
    )
}