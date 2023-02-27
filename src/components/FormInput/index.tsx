import React, { useState } from "react";
import * as S from "./styles";
import { Merge, FieldError, UseFormRegisterReturn, FieldErrorsImpl } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

type InputProps = {
    label: string;
    id: string;
    placeHolder: string;
    type?: string;
    isPassword?: boolean;
    register: UseFormRegisterReturn;
    icon: JSX.Element;
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const FormInput = ({
    id,
    register,
    placeHolder,
    type = "text",
    isPassword = false,
    icon,
    label,
    error
}: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <S.FormInputContainer error={!!error}>
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

                {error && (
                    <S.ErrorContainer>
                        <span><BiErrorCircle /> {error as string}</span>
                    </S.ErrorContainer>
                )}
            </S.InputContainer>
        </S.FormInputContainer>
    )
}