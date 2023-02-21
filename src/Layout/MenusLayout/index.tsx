import { SideBar } from "../../components/SideBar";
import { TopBar } from "../../components/TopBar";
import { useLocation } from "react-router-dom";

type MenusLayoutProps = {
    children: JSX.Element
}

export const MenusLayout = ({ children }: MenusLayoutProps) => {
    const location = useLocation();

    return (
        <main>
            <SideBar currentPath={location.pathname} />
            <TopBar currentPath={location.pathname} />
            {children}
        </main>
    )
}