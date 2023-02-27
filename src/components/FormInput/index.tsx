import React, { useState } from "react";
import * as S from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type InputProps = {
    label: string;
    id: string;
    placeHolder: string;
    type?: string;
    isPassword?: boolean;
    register: UseFormRegisterReturn;
    icon: JSX.Element;
}

export const FormInput = ({
    id,
    register,
    placeHolder,
    type = "text",
    isPassword = false,
    icon,
    label
}: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <S.FormInputContainer>
            <S.IconContainer title={label}>
                {icon}
            </S.IconContainer>
            <S.InputContainer>
                <input
                    id={id}
                    type={isPassword ? showPassword ? type : "password" : type}
                    placeholder={placeHolder}
                    {...register}
                />

                {isPassword && (
                    <>
                        <button onClick={(event) => {
                            event.preventDefault();
                            setShowPassword(prevState => !prevState);
                        }}>
                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </button>
                    </>
                )}
            </S.InputContainer>
        </S.FormInputContainer>
    )
}