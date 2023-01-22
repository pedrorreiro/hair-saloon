import moment from "moment"
import styled from "styled-components"

export const ListAgendamentos = ({ data }) => {
    return (
        <Style>
            <div className="agendamentos">
                {data.map((agendamento, index) => {
                    return (
                        <div className="agendamento" key={index}>
                            <p>Cliente: {agendamento.clientName}</p>
                            <p>Funcionário: {agendamento.functionary.name}</p>
                            <p>Serviço: {agendamento.service.name}</p>
                            <p>Horário: {moment(new Date(agendamento.date)).format("HH:mm")}h</p>
                        </div>
                    )
                })}
            </div>
        </Style>
    )
}

const Style = styled.div`
    .agendamentos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    
        .agendamento {
            padding: 1.5rem;
            flex: 1;
            border: 1px solid #ccc;
        }
    }
`