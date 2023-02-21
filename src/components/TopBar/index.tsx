import * as S from "./styles";
import { RiUser6Line } from "react-icons/ri";

type TopBarProps = {
    currentPath: string;
}


export const TopBar = ({ currentPath }: TopBarProps) => {
    console.log("currentPath", currentPath);

    return (
        <S.TopBarContainer>
            <S.Location>{currentPath.replace("/", "")}</S.Location>
            <S.AuthInfoContainer>
                <span>Faça login</span>
                <div>
                    <RiUser6Line />
                </div>
            </S.AuthInfoContainer>
        </S.TopBarContainer>
    )
}