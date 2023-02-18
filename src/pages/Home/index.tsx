import * as S from "./styles";
import FullLogo from "../../assets/images/FullLogo.png";
import CarImage from "../../assets/images/homeCar.png"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <S.HomeMain>
            <S.ContentColumn>
                <S.LogoImage src={FullLogo} />
                <h1>Alugue um<br/>carro de maneira<br/>simples e fácil</h1>
                <h2>Vários modelos para você dirigir<br/> seguro, com conforto e segurança.</h2>
                <Link to="/inicio">
                    <Button
                        styleType="RED"
                        text="Começar agora"
                    />
                </Link>
            </S.ContentColumn>
            <S.ContentColumn>
                <S.FrameImageContainer>
                    <S.CarImage src={CarImage} />
                </S.FrameImageContainer>
            </S.ContentColumn>
        </S.HomeMain>
    )
}