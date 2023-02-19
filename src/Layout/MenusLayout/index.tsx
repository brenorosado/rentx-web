import { SideBar } from "../../components/SideBar"

type MenusLayoutProps = {
    children: JSX.Element
}

export const MenusLayout = ({ children }: MenusLayoutProps) => {
    return (
        <main>
            <SideBar />
            {children}
        </main>
    )
}