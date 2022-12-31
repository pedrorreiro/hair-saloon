import { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import api from "../api";
import { AuthContext } from "../App";


export function Home() {

    const [errors] = useContext(AuthContext);

    const { user } = useOutletContext();

    const [userData, setUserData] = useState({});
    const [funcionary, setFuncionary] = useState({});

    useEffect(() => {
        document.title = "Home ";
        const checkIfIsFuncionary = async () => {
            const isFuncionary = await api.userIsFuncionary(1);
            isFuncionary ? errors.success("É funcionário") : errors.error("Não é funcionário");
        }

        const getUserData = async () => {
            const u = await (await api.getUserByEmail(user.email)).data

            console.log(u);

            setUserData(u);
            const func = await api.getFuncionaryByUserId(u.id);
            setFuncionary(func);
            console.log(func)
            sessionStorage.setItem("saloon_id", func.saloon.key);
        }

        getUserData();

        // checkIfIsFuncionary();
    }, [errors])

    return (
        <Style>
            <h1>{funcionary?.saloon?.name}</h1>
        </Style >
    );
}

const Style = styled.div`
    width: 100%;
`