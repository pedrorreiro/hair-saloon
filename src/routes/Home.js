import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";
import { AuthContext } from "../App";
import { SaloonContext } from "../Contexts/SaloonContext";


export function Home() {

    const [errors] = useContext(AuthContext);
    const [saloon, setSaloon] = useState(null);

    const [saloonId, setSaloonId] = useContext(SaloonContext);

    useEffect(() => {
        document.title = "Home ";
        const getSaloon = async () => {
            const data = await api.getSaloonById(saloonId);

            setSaloon(data);
        };

        if (saloonId) getSaloon();

        // checkIfIsFuncionary();
    }, [errors, saloonId])

    return (
        <Style>
            {
                saloonId !== null ? (
                    <div>
                        <h1>{saloon?.name}</h1>
                    </div>

                ) : (
                    <h1 className="noSaloon">Você não está alocado em nenhum salão</h1>
                )
            }

        </Style >
    );
}

const Style = styled.div`
    width: 100%;

    .noSaloon{
        font-weight: bold;
        color: red;
    }
`