import React from "react";
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

    >div:nth-child(2){
        padding: 20px;
        width: 100%;
    }

    h1{
        text-align: center;
        font-size: 20px;
    }
`