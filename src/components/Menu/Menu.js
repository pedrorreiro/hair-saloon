import { useLocation } from "react-router-dom";
import logo from "../../assets/img/icons/tesoura.png";
import { logout } from "../../firebase/auth";
import { menuOptions } from "../../utils";
import MenuOption from "../MenuOption/MenuOption";
import { MenuContainer } from "./style";

export default function Menu() {

    const location = useLocation();

    const isVisible = location.pathname !== "/login";

    return (
        <MenuContainer isVisible={isVisible}>
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Hair Salon</h1>
            </div>

            <div id="menu-options">
                {Object.keys(menuOptions).map((option) => (
                    menuOptions[option].show ?
                        <MenuOption key={option} data={{
                            ...menuOptions[option],
                            text: option
                        }
                        }
                        /> : null)
                )}
            </div>

            <div id="sair" onClick={() => logout()}>
                <MenuOption data={{
                    ...menuOptions["Sair"],
                    text: "Sair"
                }} />
            </div>


        </MenuContainer>
    );
}