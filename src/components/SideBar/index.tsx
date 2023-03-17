import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import Logo from "@/assets/images/logo.png";
import { useEffect, useState } from "react";

type SideBarProps = {
    currentPath: string;
}

export const SideBar = ({ currentPath }: SideBarProps) => {
	const [showSideItems, setShowSideItems] = useState<boolean>(true); 

	useEffect(() => {
		const sideBarPreference = localStorage.getItem("rentx_sidebar");
		if(sideBarPreference) setShowSideItems(sideBarPreference === "shown");
	}, []);

	return (
		<S.SideBarContainer>
			<S.LogoContainer onClick={() => {
				setShowSideItems(prevState => {
					localStorage.setItem("rentx_sidebar", !prevState ? "shown" : "hidden");
					return !prevState;
				});
			}}>
				<img src={Logo} alt="RentX" />
			</S.LogoContainer>
			{showSideItems && (
				<S.SideBar>
					<Link to="/inicio">
						<S.SideItem 
							title="Início"
							isSelected={currentPath.includes("/inicio")}
						>
							<BsHouse />
						</S.SideItem>
					</Link>
					<Link to="/carros">
						<S.SideItem
							title="Carros"
							isSelected={currentPath.includes("carros")}
						>
							<MdOutlineDirectionsCarFilled />
						</S.SideItem>
					</Link>
					<Link to="/minha-conta">
						<S.SideItem 
							title="Minha conta"
							isSelected={
								currentPath.includes("minha-conta") || 
                                currentPath.includes("cadastro") ||
                                currentPath.includes("entrar")
							}
						>
							<RiUser6Line />
						</S.SideItem>
					</Link>
				</S.SideBar>
			)}
		</S.SideBarContainer>
	);
};