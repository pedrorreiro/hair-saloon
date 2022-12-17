import styled from "styled-components";
import Menu from "../Menu/Menu";

export default function Main({ children }) {
    return (
        <Style>
            <Menu />
            {children}
        </Style>
    );
}

const Style = styled.div`
    width: 100%;
    display: flex;

    >div{
        padding: 20px;
    }

    h1{
        text-align: center;
        font-size: 20px;
    }
`