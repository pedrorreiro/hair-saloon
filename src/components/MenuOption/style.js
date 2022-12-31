import styled from "styled-components";
import { colors } from "../../utils";

export const MenuOptionContainer = styled.div`

a{
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 200px;
    padding: 15px 20px;
    font-size: .9em;
    font-weight: 400;
    gap: 10px;
    color: ${colors.white};
    text-decoration: none;
    border-radius: 4px;
}

img{
    width: 25px;
    height: 25px;
}

.active{
    background-color: ${colors.secondary} !important; 
}

:not(.active):hover{
    background-color: ${colors.hover};
}
`