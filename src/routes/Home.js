import { useEffect } from "react";
import styled from "styled-components";

export function Home() {

    useEffect(() => {
        document.title = "Home";
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