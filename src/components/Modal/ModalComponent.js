import { mdiAccountGroup, mdiPencil } from '@mdi/js';
import Icon from '@mdi/react';
import { Button, Modal } from 'antd';
import React from 'react';
import AdicionarAgendamento from './Contents/AdicionarAgendamento';
import AdicionarFuncionario from './Contents/AdicionarFuncionario';
import EditarFuncionario from './Contents/EditarFuncionario';
import { ListAgendamentos } from './Contents/ListAgendamentos';
import { ServiceFuncionaries } from './Contents/ServiceFuncionaries';


export default function ModalComponent({ type, data, update }) {

    const [open, setOpen] = React.useState(false);

    const updateTable = () => {
        update();
    }

    const types = {
        "addFunctionary": {
            component: <Button onClick={() => setOpen(true)}>Adicionar funcionário</Button>,
            title: "Adicionar"
        },
        "addAgendamento": {
            component: <Button onClick={() => setOpen(true)}>Adicionar agendamento</Button>,
            title: "Adicionar"
        },
        "editFuncionary": {
            component: <Icon path={mdiPencil} size={1} onClick={() => setOpen(true)} />,
            title: "Editar"
        },
        "listFunctionaries": {
            component: <Icon path={mdiAccountGroup} size={1} onClick={() => setOpen(true)}>Serviços</Icon>,
            title: "Funcionários"
        },
        "listAgendamentos": {
            component: <Button onClick={() => setOpen(true)}>Visualizar</Button>,
            title: "Agendamentos"
        }

    }

    return (
        <>
            {types[type].component}
            <Modal
                title={types[type].title}
                centered
                open={open}
                okButtonProps={{ style: { display: "none" } }}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
                bodyStyle={{
                    height: '30vh',
                    overflow: 'auto',
                }}
            >

                {
                    type === "addFunctionary" &&
                    (
                        <AdicionarFuncionario setOpen={setOpen} update={updateTable} />
                    )
                }

                {
                    type === "addAgendamento" &&
                    (
                        <AdicionarAgendamento setOpen={setOpen} update={updateTable} />
                    )
                }

                {
                    type === "editFuncionary" &&
                    (
                        <EditarFuncionario setOpen={setOpen} functionary={data} update={updateTable} />
                    )
                }

                {
                    type === "listFunctionaries" &&
                    (
                        <ServiceFuncionaries data={data} />
                    )
                }

                {
                    type === "listAgendamentos" &&
                    (
                        <ListAgendamentos data={data} />
                    )
                }

            </Modal>
        </>
    );
}