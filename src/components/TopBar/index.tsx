import * as S from "./styles";
import { RiUser6Line } from "react-icons/ri";

type TopBarProps = {
    currentPath: string;
}


export const TopBar = ({ currentPath }: TopBarProps) => {
    console.log("currentPath", currentPath);

    const getLocation = (pathname: string) => {
        const location = pathname.split("/")[1];

        if(location === "inicio") return "Início";
        if(location === "minha-conta") return  "Perfil";

        return location.charAt(0).toUpperCase() + location.slice(1);
    }

    return (
        <S.TopBarContainer>
            <S.Location data-testid="location">
                {getLocation(currentPath)}
            </S.Location>
            <S.AuthInfoContainer>
                <span>Faça login</span>
                <div>
                    <RiUser6Line />
                </div>
            </S.AuthInfoContainer>
        </S.TopBarContainer>
    )
}