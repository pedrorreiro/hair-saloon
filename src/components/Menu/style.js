import styled from "styled-components";
import { colors } from "../../utils";

export const MenuContainer = styled.div`
    display: ${props => props.isVisible ? "block" : "none"};
    padding: 50px 20px;
    box-sizing: border-box;
    height: 100vh;
    text-align: center;
    position: relative;

    h1{
        font-size: 24px;
    }

    background-color: ${colors.primary};
    color: ${colors.white};

    .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img{
            width: 40px;
            height: 40px;
        }
    }

    #menu-options{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    #sair{
        position: absolute;
        bottom: 0;
        padding: inherit;
        left: 0;
    }
`