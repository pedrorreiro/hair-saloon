import { useEffect } from "react";
import styled from "styled-components";
import api from "../api";

export function Home() {

    useEffect(() => {
        document.title = "Home";

        api.getEmployeeSaloons("639f6c705b31cfbeb42dbcf2").then((res) => {
            console.log(res.data);
        })
    }, [])

    return (
        <Style>
            <h1>Home</h1>
        </Style >
    );
}

const Style = styled.div`
    width: 100%;
`