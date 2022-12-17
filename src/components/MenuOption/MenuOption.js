import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOptionContainer } from "./style";

export default function MenuOption(props) {

    const { icon, text, route } = props.data;

    const location = useLocation();

    return (
        <MenuOptionContainer>

            <Link to={route || location.pathname} className={location.pathname === route ? "active" : ""}>
                <img src={icon} alt="menu-icon" />
                <span>{text}</span>
            </Link>

        </MenuOptionContainer>
    );
}