import { Calendar } from 'antd';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import api from '../../api';
import ModalComponent from '../../components/Modal/ModalComponent';
import { SaloonContext } from '../../Contexts/SaloonContext';
import { AgendamentoStyle } from './style';

export default function Agendamento() {

    const [agendamentos, setAgendamentos] = useState([]);
    const [dataSource, setDataSource] = useState([]);

    const [saloonId, setSaloonId] = useContext(SaloonContext);

    const getAgendamentos = async () => {
        const agendamentos = await api.getAgendamentos(saloonId);
        setAgendamentos(agendamentos);
    }

    useEffect(() => {
        if (agendamentos.length > 0) {
            console.log(agendamentos)
            const calendarData = agendamentos.map(a => {
                return {
                    key: a.key,
                    clientName: a.clientName,
                    clientPhone: a.clientPhone,
                    date: a.date,
                    functionary: a.functionary,
                    service: a.service,
                }
            })

            setDataSource(calendarData);
        }

    }, [agendamentos])

    useEffect(() => {
        document.title = "Agendamentos";
        if (saloonId && agendamentos.length === 0) getAgendamentos();

    }, [saloonId])

    const dateCallRender = (value) => {

        const listData = dataSource.filter(d =>
            moment(new Date(d.date)).format("DD/MM/YYYY") === value.format("DD/MM/YYYY")
        );

        return (
            <ul className="events">
                {listData.length > 0 ? (
                    <>
                        <p>{listData.length + ' agendamentos'}</p>
                        <ModalComponent type={"listAgendamentos"} data={listData} />
                    </>
                ) : ''}
            </ul>
        );
    }

    const monthCellRender = (value) => {

        console.log(value);
    }

    return (
        <AgendamentoStyle>
            <h1>Agendamentos</h1>
            {dataSource.length > 0 ? <Calendar dateCellRender={dateCallRender} monthCellRender={monthCellRender} /> : <p>Nenhum agendamento encontrado</p>}

            <div>
                <ModalComponent type={"addAgendamento"} update={getAgendamentos} />
                {/* <Table columns={employeesTableColumns} dataSource={dataSource} /> */}
            </div>
        </AgendamentoStyle>
    )
}